import React from "react";
import Slider from "react-slick";
import { Navbar } from "../../../components/Navbar";
import Image from "next/image";
import Locations from "../../../components/Locations";
import Footer from "../../../components/Footer";
import Head from "next/head";
import UseIntersectionAnimations from "../../../components/UseIntersectionAnimations";

const DevelopmentServices = () => {
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
      <title>GFS IT Solutions</title>
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
      <section className="dev-health-care">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <h1 className="animate-up">SaaS Development Services</h1>
              <p className="animate-right">
                SaaS Development Agency Revolutionizing The Way Your Business
                Operates!
              </p>
              <button
                className="health-ctn animate-left"
                onClick={() => (window.location.href = "/contactus")}
              >
                Get in Touch
              </button>
            </div>
            <div className="col-12 col-md-5">
              <div className="dev-health-care-banner">
                <Image
                  src={require("../../assets/images/solutions/image 32.png")}
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
                  src={require("../../assets/images/solutions/SaaS-application-development-services 1.png")}
                  alt="app-develpment"
                  className="animate-right"
                />
              </div>
            </div>
            <div className="col-12 col-md-12 col-xl-6">
              <h1 className="animate-up">
                SaaS Development Agency Revolutionizing The Way Your Business
                Operates!
              </h1>
              <p className="animate-left">
                <b>
                  
                  Innovation Is Our Middle Name - GFS IT Solutions Is Always One
                  Step Ahead When It Comes To SaaS Application Development
                  Services!
                </b>
                <br />
                <br />
                We are not your average SaaS development services company; we
                don't do things the traditional way. <b>
                  GFS IT Solutions </b> believes software development should be fun, exciting, and, most
                importantly, business-driven!
                <br />
                <br />
                Our team of developers specializes in SaaS application
                development services tailored to your specific
                <needs className="em">
                  
                  Whether looking for a project management tool that doubles as
                  a virtual pet, or accounting software that incorporates a
                  dance battle mini-game
                </needs>
                , our SaaS development services back you up!
                <br />
                <br />
                We don't believe in cookie-cutter SaaS product development
                strategy or one-size-fits-all software. We love innovation since
                invention runs in our DNA!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="dev-hiring-process">
        <div className="container">
          <div className="row ">
            <h1 className="animate-up">
              How Our SaaS Application Development Services Are Your Road To
              Growth?
            </h1>

            <div className="col-12">
              <Slider {...settings}>
                <div className="sass-process-box animate-right">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/2230389-200 1 (3).png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Customization</h3>
                  <p>
                    Our team of developers is always ready to embrace their
                    inner weirdness and channel it into SaaS software
                    development services. We will work with you to understand
                    your brand and goals and create a SaaS application that's
                    tailor-made to meet your needs.
                  </p>
                </div>
                <div className="sass-process-box animate-right">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/2230389-200 1 (4).png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Scalability</h3>
                  <p>
                    As your business grows, your software needs will also
                    evolve. Hence, we offer SaaS product development services
                    that can scale with your business. Our applications are
                    designed to handle high volumes of users and data, so you
                    can focus on growing your business without worrying about
                    your software infrastructure.
                  </p>
                </div>
                <div className="sass-process-box animate-left">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/2230389-200 1 (5).png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Time-Saving </h3>
                  <p>
                    Time is money, and we know that you don't have time to waste
                    on software that's slow, clunky, or doesn't work. Our SaaS
                    application development services are optimized for speed and
                    efficiency so you can get more done in less time.
                  </p>
                </div>
                <div className="sass-process-box animate-left">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/2230389-200 1 (6).png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Future-Proof</h3>
                  <p>
                    Technology is always evolving, and we make sure that our
                    SaaS product development strategy is future-proof. We use
                    the latest technologies and industry standards for SaaS
                    custom development, so you can be sure your software won't
                    become obsolete anytime soon.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="sass-industry">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-xl-6">
              <h1 className="animate-up">
                Think it, SaaS it - We Will Make It Happen!
              </h1>
              <p className="animate-left">
                <b>
                  Welcome To Our World Of SaaS Custom Development, Where The Sky
                  Is The Limit And Your Imagination Is The Only Constraint!
                </b>
                <br />
                <br />
                Our SaaS development developers are experts in the latest SaaS
                technologies and frameworks, so you can rest assured that you
                can get applications packed with efficiency and precision. We
                are always pushing the boundaries of what's possible, using
                cutting-edge tools to create apps that are
                <br />
                <br />
              
                  <b>Fast</b> 
             <br/>
                  <b>Secure</b> 
             <br/>
                  <b>Scalable</b>
             <br/>
             <br/>
                Our SaaS application development services are fully
                customizable, so you can choose the features and functionalities
                to meet your business goals and needs. Whether you need a simple
                application for internal use or a complex platform that serves
                millions of users, we have got your back!
              </p>
              {/* <button className="project-ideas">Have a Project In Mind?</button> */}
            </div>
            <div className="col-12 col-md-12 col-xl-6">
              <div className="industry-img">
                <Image
                  src={require("../../assets/images/solutions/Vector-Smart-Object2-1 1.png")}
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

export default DevelopmentServices;
