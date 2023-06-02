import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Navbar } from "../../../components/Navbar";
import Head from "next/head";
import Locations from "../../../components/Locations";
import Footer from "../../../components/Footer";
import UseIntersectionAnimations from "../../../components/UseIntersectionAnimations";

export const MaintenanceSupport = () => {
    UseIntersectionAnimations()
  //technologies scection slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    slidesToScroll: 1,
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
      <title>24/7 Software Maintenance & Support Services</title>
      <meta name="description" content="Unleash the superpowers of your application with our 24/7 maintenance and support services. Partner with us and experience the peace of mind you deserve." />
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
      <section className="maintence-support">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <h1 className="animate-up">
                Software Maintenance And Support Services
              </h1>
              <p className="animate-right">
                Software Maintenance And Support Services To Let Your Business
                Hit The Ground Running!
              </p>
              <button
                className="health-ctn animate-left"
                onClick={() => (window.location.href = "/contactus")}
              >
                Get in Touch
              </button>
            </div>
            <div className="col-12 col-md-5">
              <div className="solution-health-care-banner">
                <Image
                  src={require("../../assets/images/solutions/OBJECTS.png")}
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
                  src={require("../../assets/images/solutions/news_image_14039 1.png")}
                  alt="app-develpment"
                  className="animate-right"
                />
              </div>
            </div>
            <div className="col-12 col-md-12 col-xl-6">
              <h1 className="animate-up">
                Maintenance & Support Services To Keep Your Technology Alive And
                Kicking!
              </h1>
              <p className="animate-right">
                Our maintenance and software support services are like a safety
                net that catches you when you fall. <b>GFS IT Solutions</b> tend
                to be the ones who keep your website up and running, your
                software glitch-free, and your hardware humming like a happy
                little bee.
                <br />
                <br />
                So, whether you're a small business owner, a tech-savvy
                individual, or just someone who wants to keep their devices in
                top shape, our maintenance & support services got your back.
                <br />
                <br />
                <b>
                  Have us on your side to keep your business succeeding in leaps
                  and bounds!
                </b>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="maintence-support-process">
        <div className="container">
          <div className="row ">
            <h1 className="animate-up">
              Why Our Application Maintenance And Support Services Serves As The
              Best?
            </h1>
            <p>
              {/* Leverage our long decade experience and expertise in transforming
              sites and apps into intuitive world where customers can acquire
              satisfaction and peace of mind while making a purchase. */}
            </p>
            <div className="col-12">
              <Slider {...settings}>
                <div className="process-box animate-right">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/custom 1.png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Proactive Monitoring</h3>
                  <p>
                    We don't just wait for something to break – we keep a
                    watchful eye on your technology around the clock. If
                    something seems fishy, we'll jump on it before it becomes a
                    full-blown problem.
                  </p>
                </div>
                <div className="process-box animate-right">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/website-design 1.png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Lightning-Fast Response Times</h3>
                  <p>
                    When something does go wrong, we don't waste a single
                    second. Our team of experts is available 24/7 to jump into
                    action and get things back on track ASAP.
                  </p>
                </div>
                <div className="process-box animate-left">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/web-traffic 1.png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Tailored Solutions</h3>
                  <p>
                    We don't believe in one-size-fits-all solutions. Instead, we
                    take the time to understand your unique needs and create a
                    customized plan that's just right for you.
                  </p>
                </div>
                <div className="process-box animate-left">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/profits 1.png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Customer Satisfaction Guaranteed</h3>
                  <p>
                    We're not happy unless you're happy. That's why we offer a
                    100% satisfaction guarantee – if you're not completely
                    satisfied with our services, we'll do whatever it takes to
                    make things right.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="maintenance-industry">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-xl-6">
              <h1 className="animate-up">GFS Software Maintenance Services</h1>
              <p className="animate-right">
                Our software support services help ensure that your systems and
                processes{" "}
                <em>
                  run smoothly, minimizing downtime and maximizing efficiency
                </em>
                . With our software maintenance service, you can focus on
                growing your business without worrying about technical issues.
                From planning to execution, we ensure that our services are
                seamless and hassle-free.
                <br />
                <br />
                Peace of mind is just a call away - with our 24/7 maintenance &
                support services!
              </p>
            </div>
            <div className="col-12 col-md-12 col-xl-6">
              <div className="industry-img">
                <Image
                  src={require("../../assets/images/solutions/support 1.png")}
                  className="animate-left"
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

export default MaintenanceSupport;
