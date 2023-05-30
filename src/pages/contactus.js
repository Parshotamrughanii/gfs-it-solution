
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Navbar } from '../../components/Navbar'
import Footer from "../../components/Footer";
import UseIntersectionAnimations from "../../components/UseIntersectionAnimations";
import ContactBanner from "../../components/ContactBanner";
const Contactus = () => {
    const [showMessage, setshowMessage] = useState("");
    const [error, seterror] = useState("");
  UseIntersectionAnimations()

    // Formik Form validations
    const HandleFormValidation = useFormik({
      validationSchema: Yup.object().shape({
        first_name: Yup.string().required("This field is required"),
        last_name: Yup.string().required("This field is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        message: Yup.string().required("This field is required"),
        mobile_no: Yup.string().required("Mobile number is required"),
      }),
      initialValues: {
        first_name: "",
        last_name: "",
        email: "",
        mobile_no: "",
        message: "",
      },
      onSubmit: (values, { setSubmitting, resetForm }) => {
        const body = {
          name: `${values.first_name} ${values.last_name}`,
          email: values.email,
          phoneno: values.mobile_no,
          message: values.message,
          service: "GFS IT Solutions",
        };
        axios
          .post("https://mail-api.gfsitsolutions.com/", body)
          .then((response) => {
            setshowMessage(response.data);
            resetForm();
            setSubmitting(false);
            setTimeout(() => {
              setshowMessage("");
            }, 3000);
          })
          .catch((error) => {
            seterror(error);
            setSubmitting(false);
            setTimeout(() => {
              seterror("");
            }, 3000);
          });
        console.log(values);
      },
    });
  
  
    const isFormikValid = (name) =>
      !!(HandleFormValidation.touched[name] && HandleFormValidation.errors[name]);
    const getFormMessage = (name) => {
      return (
        isFormikValid(name) && (
          <p
            className="small p-0 m-0 mt-1"
            style={{ color: "red", fontSize: "12px", fontWeight: "500" }}
          >
            {HandleFormValidation.errors[name]}
          </p>
        )
      );
    };
  return (
    <>
    <Navbar/>
    <ContactBanner/>
    <div className="form-section">
      <div className="container">
        <form onSubmit={HandleFormValidation.handleSubmit}>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-main-section">
              <input
                  onChange={HandleFormValidation.handleChange}
                  name="first_name"
                  value={HandleFormValidation.values.first_name}
                  type="text"
                  className="about-input"
                  placeholder="First Name"
                />
                {getFormMessage("first_name")}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-main-section">
                <input
                  name="last_name"
                  onChange={HandleFormValidation.handleChange}
                  value={HandleFormValidation.values.last_name}
                  className="about-input"
                  type="text"
                  placeholder="Last Name"
                />
                {getFormMessage("last_name")}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-main-section">
                <input
                  name="email"
                  onChange={HandleFormValidation.handleChange}
                  value={HandleFormValidation.values.email}
                  className="about-input"
                  type="text"
                  placeholder="Email"
                />
                {getFormMessage("email")}
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="form-main-section">
                <input
                  name="mobile_no"
                  onChange={HandleFormValidation.handleChange}
                  value={HandleFormValidation.values.mobile_no}
                  className="about-input"
                  type="text"
                  placeholder="Phone no"
                />
                {getFormMessage("mobile_no")}
              </div>
            </div>
            <div className="col-12">
              <textarea
                name="message"
                onChange={HandleFormValidation.handleChange}
                value={HandleFormValidation.values.message}
                className="about-message"
                placeholder="Message"
              />
              {getFormMessage("message")}
            </div>
          </div>
     
          
            {error?.message === "Request failed with status code 400"
              ? <h2 style={{textAlign:'center',color:"#DF0003",fontWeight:'600',fontSize:"20px"}}>There was an error submitting the form.</h2>
              : ""}
          <h2 style={{color:'green',fontWeight:600,textAlign:'center'}}>{showMessage.message}</h2>
          <div className="send-btn">
            <button className="send-message">Send Message</button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Contactus