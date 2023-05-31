import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Locations from "../../../components/Locations";
import Footer from "../../../components/Footer";
import { Navbar } from "../../../components/Navbar";
import Head from "next/head";
import UseIntersectionAnimations from "../../../components/UseIntersectionAnimations";

const OneDemandApp = () => {
    UseIntersectionAnimations()
  //technologies scection slider
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 4,
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
      <section className="solution-health-care">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <h1 className="animate-up">
                On Demand App Development Solutions
              </h1>
              <p className="animate-left">
                On Demand Service App - On-Demand, On-Point, On Fire
              </p>
              <button
                className="health-ctn animate-right"
                onClick={() => (window.location.href = "/contactus")}
              >
                Get in Touch
              </button>
            </div>
            <div className="col-12 col-md-5">
              <div className="solution-health-care-banner">
                <Image
                  src={require("../../assets/images/solutions/Group (3).png")}
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
                  src={require("../../assets/images/solutions/Group (4).png")}
                  alt="app-develpment"
                  className="animate-right"
                />
              </div>
            </div>
            <div className="col-12 col-md-12 col-xl-6">
              <h1 className="animate-up">
                Get What You Want, When You Want It - On Demand!
              </h1>
              <p className="animate-left">
                <b>GFS IT Solutions </b> understands that time is money, which
                is why our experts offer on-demand app development. You don't
                have to wait for weeks or even months to get your app developed.
                With us on your side, you can get your app up and running in no
                time, without compromising on quality!
                <br />
                <br />
                Get in touch with us today for your on-demand app development
                needs, and let's get the ball rolled on your next big thing!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-hiring-process">
        <div className="container">
          <div className="row ">
            <h1 className="animate-up">
              How Our On Demand Service App May Benefit You.{" "}
            </h1>
            <p>
              {/* Leverage our long decade experience and expertise in transforming
              sites and apps into intuitive world where customers can acquire
              satisfaction and peace of mind while making a purchase. */}
            </p>
            <div className="col-12">
              <Slider {...settings}>
                <div className="one-demand-process-box animate-right">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/custom 1.png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Lightning-Fast Delivery</h3>
                  <p>
                    With our custom on demand app development solutions, you can
                    offer lightning-fast delivery to your customers.{" "}
                    <em>Whether you're delivering products or services</em>, our
                    platform ensures that your customers get what they need,
                    when they need it.
                  </p>
                </div>
                <div className="one-demand-process-box animate-right">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/website-design 1.png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Customizable Options</h3>
                  <p>
                    We understand that every business is unique. Our on demand
                    app development solutions offer customizable options to suit
                    your needs. Whether you want to offer different delivery
                    options, pricing models, or service types, why go anywhere
                    when we are here?
                  </p>
                </div>
                <div className="one-demand-process-box animate-left">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/web-traffic 1.png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Analytics And Reporting</h3>
                  <p>
                    Want to know how your business is performing? Our platform
                    offers detailed analytics and reporting tools to help you{" "}
                    <em>
                      understand your customers' behavior, track your
                      performance, and make data-driven decisions
                    </em>
                    .
                  </p>
                </div>
                <div className="one-demand-process-box animate-left">
                  <div className="img-process-slider">
                    <Image
                      src={require("../../assets/images/solutions/profits 1.png")}
                      className=""
                      alt=""
                    />
                  </div>
                  <h3>Multi-platform Approach</h3>
                  <p>
                    From ideation to the designing, and development, we ensure a
                    secure and successful app development cycle.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="one-demand-industry">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-xl-6">
              <h3 className="animate-up">On-Demand App</h3>
              <h1 className="animate-right">
                Why Choose Us For On Demand App Solutions?
              </h1>
              <p className="animate-left">
                Because when you hire us for an on demand service app, you get
                ample chance to meet marketing gurus and talented developers who
                love and breathe technology.
                <br />
                <br />
                Our team for on demand services solutions is made up of experts
                in various programming languages, so we can build your app on
                any platform you desire.{" "}
                <em>Whether you need an app for iOS, Android, or both</em>, we
                are the right partner to collaborate with. We use the latest
                technologies and frameworks to ensure your app is{" "}
                <b>fast, reliable</b>, and <b>secure</b>.
                <br />
                <br />
                We pride ourselves on our quick turnaround time. Need more to
                build confidence in us? Just strike up a conversation with us,
                and let us help you build on demand services solutions for your
                unique business!
              </p>
              <button
                className="project-ideas "
                onClick={() => (window.location.href = "/contactus")}
              >
                Have a Project In Mind?
              </button>
            </div>
            <div className="col-12 col-md-12 col-xl-6">
              <div className="industry-img">
                <Image
                  src={require("../../assets/images/solutions/Group (5).png")}
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
export default OneDemandApp;
