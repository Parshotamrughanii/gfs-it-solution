import React from "react";
import Slider from "react-slick";
import { Navbar } from "../../../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Locations from "../../../components/Locations";
import Footer from "../../../components/Footer";
import UseIntersectionAnimations from "../../../components/UseIntersectionAnimations";

const RealEstate = () => {
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
      <section className="real-estate">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <h1 className="animate-up">Real Estate App Development</h1>
              <p className="animate-left">
                No More Endless Scrolling - Find Your Perfect Home With Us!
              </p>
              <button
                className="health-ctn animate-left"
                onClick={() => (window.location.href = "/contactus")}
              >
                Get in Touch
              </button>
            </div>
            <div className="col-12 col-md-5">
              <div className="real-estate-banner">
                <Image
                  src={require("../../assets/images/solutions/Group (6).png")}
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
                  src={require("../../assets/images/solutions/About Img.png")}
                  alt="app-develpment"
                  className="animate-right"
                />
              </div>
            </div>
            <div className="col-12 col-md-12 col-xl-6">
              <h1 className="animate-up">
                Buy, Sell, Or Rent With A Tap - Our Real Estate App Has Got Your
                Back!
              </h1>
              <p className="animate-left">
                <b>
                  Our Motto Is Simple - We Build Apps That Make Your Life
                  Easier.
                </b>
                <br />
                <br />
                With the ever-increasing demand for real estate, it's becoming
                challenging to find the perfect property. That's exactly where
                our real estate app development services come in.{" "}
                <b>What does our app do?</b>
                <br />
                <br />
                Our apps simplify the process of <b>BUYING</b> or <b>SELLING</b>{" "}
                property and help you find the perfect home or commercial
                property in record time.{" "}
                <em>
                  From the design phase to the final product, we ensure our real
                  estate app development meets your expectations.
                </em>
                <br />
                <br />
                So, what are you waiting for? Get in touch with our real estate
                app developers today and let them help you find your dream
                property with our innovative product! Hire real estate app
                developer now!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="realestate-hiring-process">
        <div className="container">
          <div className="row ">
            <h1 className="animate-up">
              Revolutionize Your Property Search With Our App's Unbeatable
              Features!
            </h1>
            <p>
              {/* Leverage our long decade experience and expertise in transforming
              sites and apps into intuitive world where customers can acquire
              satisfaction and peace of mind while making a purchase. */}
            </p>
            <div className="col-12">
              <Slider {...settings}>
                <div className="realestate-process-box animate-right">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/custom 1.png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Customized Property Search</h3>
                  <p>
                    Our real estate apps offer customized property search
                    options that help you find the perfect property based on
                    your preferences.
                  </p>
                </div>
                <div className="realestate-process-box animate-right">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/website-design 1.png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Interactive Maps</h3>
                  <p>
                    Our real estate app development services feature interactive
                    maps that provide a bird's eye view of the property, making
                    it easier for you to understand the location and
                    surroundings.
                  </p>
                </div>
                <div className="realestate-process-box animate-left">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/profits 1.png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Property Comparison</h3>
                  <p>
                    Our real estate app development solutions provide property
                    comparison tools that help you make informed decisions by
                    comparing prices, features, and amenities.
                  </p>
                </div>
                <div className="realestate-process-box animate-left">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/web-traffic 1.png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Real-Time Updates</h3>
                  <p>
                    Our apps provide real-time updates on property listings,
                    ensuring that you are always up-to-date with the latest
                    listings.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="realestate-industry">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-xl-6">
              <h3 className="animate-up">
                Real Estate App Development Solutions
              </h3>
              <h1 className="animate-right">
                House Hunting Just Got A Whole Lot Easier With Our Real Estate
                Mobile App Development Company!
              </h1>
              <p className="animate-left">
                Our real estate apps are perfect for anyone who is looking to
                buy or sell real estate. With our apps, you can easily{" "}
                <em>
                  search for properties, view detailed property information,
                  schedule showings
                </em>
                , and much more. Whether you are a first-time homebuyer or a
                seasoned real estate investor, our real estate app development
                services are the perfect tool to help you achieve your goals.
                <br />
                <br />
                To say the least, our apps come packed with features that make
                buying and selling real estate a breeze! So why wait? Hire real
                estate app developer today and experience the future of real
                estate.
                <br />
                <br />
                <b>
                  It’s time to find your happy place with just a few clicks.
                </b>
              </p>
              {/* <button className="project-ideas">Have a Project In Mind?</button> */}
            </div>
            <div className="col-12 col-md-12 col-xl-6">
              <div className="industry-img">
                <Image
                  src={require("../../assets/images/solutions/Layer_1.png")}
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

export default RealEstate