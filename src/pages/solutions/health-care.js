import React from "react";
import Slider from "react-slick";
import Locations from "../../../components/Locations";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { Navbar } from "../../../components/Navbar";
import Head from "next/head";
import UseIntersectionAnimations from "../../../components/UseIntersectionAnimations";

const HealthCare = () => {
    UseIntersectionAnimations()
  //technologies scection slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  var techSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <Head>
      <title>Custom Healthcare App & Software Development Company</title>
      <meta name="description" content="Transform healthcare with our bespoke software and app development solutions, Partner with a leading company to revolutionize patient care." />
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <Navbar />
      <section className="health-care">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <h1 className="animate-up">Health Care App Development</h1>
              <p className="animate-left">
                Next-Gen IT Solutions For Healthcare Elevating Your Practice To
                New Heights!
              </p>
              <button
                className="health-ctn animate-right"
                onClick={() => (window.location.href = "/contactus")}
              >
                Get in Touch
              </button>
            </div>
            <div className="col-12 col-md-5">
              <div className="health-care-banner">
                <Image
                  src={require("../../assets/images/solutions/Group 1282 1.png")}
                  alt="app-develpment"
                  className="animate-left"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="health-creaft">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-12 col-md-12 col-xl-6">
              <div className="health-craft-banner">
                <Image
                  src={require("../../assets/images/solutions/Group 1284.png")}
                  alt="app-develpment"
                  className="animate-right"
                />
              </div>
            </div>
            <div className="col-12 col-md-12 col-xl-6">
              <h1 className="animate-up">
                Revolutionize Your Health Game With Our App-Tastic Solutions!
              </h1>
              <p className="animate-right">
                Are you tired of waiting in long lines at the doctor's office?
                Do you wish you could access your medical records at the touch
                of a button? Look no further! Our health care app development
                solution is the answer to all your healthcare needs.
                <br />
                <br />
                Our team of experts specializes in developing healthcare
                solutions that are user-friendly, reliable, and secure. With our
                app, you can
                <b>
                  schedule appointments, access your medical records, receive
                  personalized health tips, and even consult with a doctor
                  virtually.
                </b>
                <br />
                <br />
                <em>
                  From telemedicine and virtual consultations to remote patient
                  monitoring and personalized health plans
                </em>
                , our custom healthcare solutions are designed to revolutionize
                the way you manage your health.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="hiring-process">
        <div className="container">
          <div className="row ">
            <h1 className="animate-up">
              Why Settle For Being Sick When Our Health Care App Development
              Company Does The Trick?
            </h1>

            <div className="col-12">
              <Slider {...settings}>
                <div className="health-process-box animate-left">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/2230389-200 1.png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Holistic Approach</h3>
                  <p>
                    When developing GFS healthcare app solutions, we take a
                    holistic approach. We understand that healthcare is not just
                    about treating symptoms, but about addressing the whole
                    person. We create healthcare software solutions that focus
                    on the overall well-being of patients, not just their
                    medical conditions.
                  </p>
                </div>
                <div className="health-process-box animate-left">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/2230389-200 1 (1).png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Customization</h3>
                  <p>
                    We provide customized healthcare app solutions tailored to
                    the unique needs of healthcare providers and patients. Not
                    to mention, we take the time to comprehend our client's
                    goals and requirements and create apps that meet those
                    specific needs.
                  </p>
                </div>
                <div className="health-process-box animate-right">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/Vector (1).png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Security</h3>
                  <p>
                    We take the security of our healthcare apps very seriously.
                    Our tech gurus use the latest encryption and security
                    measures to ensure that patient data is protected at all
                    times.
                  </p>
                </div>
                <div className="health-process-box animate-right">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/2230389-200 1 (2).png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Customer service</h3>
                  <p>
                    We treat our customers like royalty and always surpass our
                    client's expectations with unparalleled customer support.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="healthcare-industry">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-xl-6">
              <h1 className="animate-up">
                Join The Healthcare App Revolution And Say Goodbye To Waiting
                Rooms!
              </h1>
              <p className="animate-left">
                <em>
                  Did you know the global telemedicine market is expected to
                  grow to $130 billion by 2025?
                </em>
                That's a lot of people who will benefit from healthcare app
                solutions!
                <br />
                <br />
                Keeping in mind the statistics, our healthcare solutions are
                designed to meet the latest industry standards, including HIPAA
                compliance, to ensure the highest level of security and
                confidentiality for our users. So, are you ready to take the
                first step towards a healthier, happier you? Let our healthcare
                software solutions be your guide.
              </p>
              <button
                className="project-ideas animate-left"
                onClick={() => (window.location.href = "/contactus")}
              >
                Have a Project In Mind?
              </button>
            </div>
            <div className="col-12 col-md-12 col-xl-6">
              <div className="industry-img">
                <Image
                  src={require("../../assets/images/solutions/Group 1286.png")}
                  className="animate-right"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="health-tech">
        <div className="container">
          <div className="row  ">
            <div className="health-tech-title">
              <h1 className="animate-up">Technologies We Are Excellent At</h1>
              <p>
                Our team is adept at leveraging the most updated tools and
                technologies.
              </p>
            </div>
          </div>

          <Slider {...techSettings}>
            <div className="health-technology-slider">
              <div className="health-techno-box">
                <Image
                  src={require("../../assets/images/solutions/React-icon 1 (1).png")}
                  className="health-tech-img"
                  alt=""
                />
              </div>
            </div>
            <div className="health-technology-slider">
              <div className="health-techno-box">
                <Image
                  src={require("../../assets/images/solutions/nestjs-icon-512x510-9nvpcyc3 1 (1).png")}
                  className="health-tech-img"
                  alt=""
                />
              </div>
            </div>
            <div className="health-technology-slider">
              <div className="health-techno-box">
                <Image
                  src={require("../../assets/images/solutions/267_Python_logo-512 1 (1).png")}
                  className="health-tech-img"
                  alt=""
                />
              </div>
            </div>
            <div className="health-technology-slider">
              <div className="health-techno-box">
                <Image
                  src={require("../../assets/images/solutions/flutter 1 (1).png")}
                  className="health-tech-img"
                  alt=""
                />
              </div>
            </div>
            <div className="health-technology-slider">
              <div className="health-techno-box">
                <Image
                  src={require("../../assets/images/solutions/angular 1 (1).png")}
                  className="health-tech-img"
                  alt=""
                />
              </div>
            </div>
            <div className="health-technology-slider">
              <div className="health-techno-box">
                <Image
                  src={require("../../assets/images/solutions/2560px-Node.js_logo 1 (1).png")}
                  className="health-tech-img"
                  alt=""
                />
              </div>
            </div>
            <div className="health-technology-slider">
              <div className="health-techno-box">
                <Image
                  src={require("../../assets/images/solutions/5968332 1 (1).png")}
                  className="health-tech-img"
                  alt=""
                />
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <Locations />
      <Footer />
    </div>
  );
};

export default HealthCare;
