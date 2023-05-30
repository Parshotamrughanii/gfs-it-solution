/* eslint-disable */
import Image from "next/image";
import React from "react";
import { Navbar } from "../../../components/Navbar";
import Slider from "react-slick";
import Head from "next/head";
import UseIntersectionAnimations from "../../../components/UseIntersectionAnimations";
import Footer from "../../../components/Footer";
import ServiceSectionSlider from "../../../components/ServiceSectionSlider";


function WebApp() {
    UseIntersectionAnimations()
    var settingsTechnology = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        arrows:false,
        responsive: [
          {
            breakpoint: 1024,
            settingsTechnology: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 767,
            settingsTechnology: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
<>
<Head>
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
<Navbar/>
<div className="web-app-Banner">
     <div className="container">
        <div className="row align-items-center web-app-top-banner ">
            <div className="col-12 col-md-6">
              <div className="web-app-banner-box">
              <h1 className='web-app-mobile-heading animate-down'>Web App Consulting</h1>
                <p className='web-app-mobile-sub-heading my-4 animate-left'>Web App Woes? Leave It To The Experts!</p>
                <button className="web-app-get-in-touch " onClick={()=>window.location.href=("/contactus")}>Get in Touch</button>
              </div>
            </div>
            <div className="col-12 col-md-6">
               <div className="web-app-banner-img animate-right">
               <Image src={require('../../assets/images/consulting/webbg.png')} className='img-fluid' alt="" />
               </div>
            </div>
        </div>
      </div>
    </div>
    <div className="row g-0">
        <div className="col-12 col-md-6 p-0">
          <Image
            src={require("../../assets/images/consulting/female-web-designer-taking-notes-office 1 (1).png")}
            className="web-app-turn-key-img animate-left"
            alt=""
          />
        </div>
        <div className="col-12 col-md-6 web-app-turn-key-desc">
          <div className="web-app-turn-key-box">
            <h3 className="web-app-turn-key-heading my-4 animate-down">
              Consultation That Helps Your Web App Steal The Limelight!
            </h3>
            <p className="web-app-turn-key-subheading animate-left">
              Welcome to our web app development consulting firm, where we help
              businesses create amazing web applications that help them leave
              their competitors in the dust. Our web app consulting covers the
              entire web app development process, from <em>ideation to launch</em>.
              <br />
              <br />
              The GFS web app consultant team defines your <b>web app strategy</b>,
              identifies the <b>right development tools and technologies</b>, and
              creates a <b>design</b> that reflects your brand and appeals to your
              target audience.
            </p>
          </div>
        </div>
      </div>
      <div className="web-app-hire-us">
      <div className="container">
        <h3 className="web-app-hire-us-title my-5 animate-down">
          Compelling Reasons To Have Us On Your Side
        </h3>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="web-app-hire-box">
              <Image
                src={require("../../assets/images/consulting/drop-price-6410044-5272917 1.png")}
                className="web-app-img animate-right animate-right"
                alt=""
              />

              <h3 className="web-app-hire-us-heading animate-left animate-left">Expertise</h3>
              <p className="web-app-hire-us-subheading animate-left animate-left">
                Our team has years of experience in development and marketing.
                We stay up-to-date with the latest trends and techniques to
                ensure our clients are always ahead of the curve.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="web-app-hire-box">
              <Image
                src={require("../../assets/images/consulting/Asset 1 1.png")}
                className="web-app-img animate-right"
                alt=""
              />

              <h3 className="web-app-hire-us-heading animate-left">Personalized Service</h3>
              <p className="web-app-hire-us-subheading animate-left">
                We believe in building strong relationships with our clients. We
                work closely with you to understand your goals and needs, and we
                will tailor our services to meet your specific requirements.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="web-app-hire-box">
              <Image
                src={require("../../assets/images/consulting/team-management-5806312-4863041 1.png")}
                className="web-app-img animate-right"
                alt=""
              />

              <h3 className="web-app-hire-us-heading animate-left">Affordable</h3>
              <p className="web-app-hire-us-subheading animate-left ">
                We offer competitive pricing for our services, so you don't
                have to break the bank to create a successful product.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="web-app-hire-box">
              <Image
                src={require("../../assets/images/consulting/flexible-work-time-5796820-4862968 1.png")}
                className="web-app-img animate-right"
                alt=""
              />

              <h3 className="web-app-hire-us-heading animate-left">
                Round-the-clock Support{" "}
              </h3>
              <p className="web-app-hire-us-subheading animate-left">
                We offer 24/7 hours support so that our client’s queries don't
                remain unanswered or unattended.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="OperationalCost">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <div className="operational-main-box">
              <div className="operational-box">
                <p className="operational-title animate-up">
                  Web App Development Consulting Is Our Forte
                </p>
                <h3 className="operational-subtitle animate-right">
                  No Job Is Too Big or Too Small For Us!
                </h3>
                <p className="operational-desc animate-left">
                  We are maestros in helping our clients get bullet-proof advice
                  that is subject to making their projects happen. Our web app
                  consultant knows the ins and outs of everything that goes into
                  the process of devising the web application. With us on your
                  side, you can rest assured that you get the premium
                  suggestion, that too at the fraction of the cost!
                  <br />
                  <br />
                  So, why wait? Get our custom web application dev consultants
                  on board and get your project up and running!
                </p>
                <button className="techno-ctn" onClick={()=>window.location.href=("/contactus")}>Have a Project In Mind?</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5"></div>
        </div>
      </div>
    </div>
    <div className="web-app-technologies">
      <div className="container">
        <h3 className="web-app-technologies-heading animate-up">Technologies We Are Excellent At</h3>
        <p className="web-app-tecnologies-desc">
          Our team is adept at leveraging the most updated tools and
          technologies.
        </p>
        <div className="row ">
          <div className="col">
            <Slider {...settingsTechnology}>
              <div>
                <div className="web-app-techno-box">
                  <Image
                    src={require("../../assets/images/consulting/react.png")}
                    className="web-app-tech-img"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <div className="web-app-techno-box">
                  <Image
                    src={require("../../assets/images/consulting/nestjs.png")}
                    className="web-app-tech-img"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <div className="web-app-techno-box">
                  <Image
                    src={require("../../assets/images/consulting/python.png")}
                    className="web-app-tech-img"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <div className="web-app-techno-box">
                  <Image
                    src={require("../../assets/images/consulting/flutter.png")}
                    className="web-app-tech-img"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <div className="web-app-techno-box">
                  <Image
                    src={require("../../assets/images/consulting/angular.png")}
                    className="web-app-tech-img"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <div className="web-app-techno-box">
                  <Image
                    src={require("../../assets/images/consulting/node.png")}
                    className="web-app-tech-img"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <div className="web-app-techno-box">
                  <Image
                    src={require("../../assets/images/consulting/php.png")}
                    className="web-app-tech-img"
                    alt=""
                  />
                </div>
              </div>
              
            </Slider>
          </div>
        </div>
      </div>
    </div>
    <ServiceSectionSlider/>
    <Footer/>
</>
  );
}

export default WebApp;
