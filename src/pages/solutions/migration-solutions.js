import Head from "next/head";
import React from "react";
import Slider from "react-slick";
import Locations from "../../../components/Locations";
import Footer from "../../../components/Footer";
import Image from "next/image";
import { Navbar } from "../../../components/Navbar";
import UseIntersectionAnimations from "../../../components/UseIntersectionAnimations";

const MigrationSolutions = () => {
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
      <title>Enterprise Software Data Integration & Migration Services</title>
      <meta name="description" content="Seamlessly unite and migrate your data with our expert services. Unlock the power of efficient application integration and migration solutions." />
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
      <section className="intigration">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-7">
              <h1 className="animate-up">
                Integration And Migration Solutions
              </h1>
              <p className="animate-right">
                Don't Just Integrate, Do It Seamlessly - With Our Data
                Integration Solutions, Anything Is Possible!
              </p>
              <button
                className="health-ctn animate-left"
                onClick={() => (window.location.href = "/contactus")}
              >
                Get in Touch
              </button>
            </div>
            <div className="col-12 col-md-5">
              <div className="intigration-banner">
                <Image
                  src={require("../../assets/images/solutions/Illustration.png")}
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
                  src={require("../../assets/images/solutions/Frame (1).png")}
                  alt="app-develpment"
                  className="animate-right"
                />
              </div>
            </div>
            <div className="col-12 col-md-12 col-xl-6">
              <h1 className="animate-up">
                Seamless Software Integration Solutions, Effortless Migration -
                Welcome To The Future Of Business With GFS IT Solutions!
              </h1>
              <p className="animate-left">
                <b>GFS IT Solutions</b> doesn't believe in the words{" "}
                <b>'complicated'</b> or <b>'impossible'</b> when it comes to our
                Integration and migration solutions. Our team of experts is
                wizards in data migration and integration, and we've got the
                magic wand to make it happen!
                <br />
                <br />
                At our core, we believe in making your business run as smoothly
                as possible. We leave no stone unturned when it comes to
                integrating all of your systems, and migrating everything to the
                cloud, making your business faster, stronger, and better than
                ever before.
                <br />
                <br />
                With our integration and migration solutions, you can say
                goodbye to integration headaches and migration challenges and
                focus on what really matters - growing your business!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="intigration-hiring-process">
        <div className="container">
          <div className="row ">
            <h1 className="animate-up">
              What Do Our Services Embrace? Have A Look!
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
                  <h3>Increased Efficiency</h3>
                  <p>
                    Our data migration service streamlines your systems and
                    processes, making them more efficient and effective.
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
                  <h3>Cost-Effective</h3>
                  <p>
                    Our migration and data integration services are
                    cost-effective, saving you money in the long term.
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
                  <h3>Time-Saving</h3>
                  <p>
                    Our application integration solutions save you time by
                    automating processes, allowing you to focus on growing your
                    business.
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
                  <h3>Improved Customer Experience</h3>
                  <p>
                    Our solutions improve the customer experience by providing
                    seamless and hassle-free interactions.
                  </p>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <section className="intigration-industry">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-xl-6">
              <h3 className="animate-up">Data Integration Services</h3>
              <h1 className="animate-right">
                Efficiency, Security, And Scalability - Our Integration And
                Migration Solutions Have Got It All!
              </h1>
              <p className="animate-left">
                Our migration and data integration solutions are perfect for
                businesses that want to{" "}
                <em>
                  streamline their operations, reduce costs, and improve
                  efficiency
                </em>
                . With our solutions, you can easily{" "}
                <em>
                  integrate different systems, migrate data to new platforms
                </em>
                , and much more. Whether you are a small startup or a large
                enterprise, our data and API integration services are the
                perfect tool to help you achieve your goals.
                <br />
                <br />
                <b>
                  Time To Streamline Your Systems By Hiring GFS IT Solutions
                  Now!
                </b>
              </p>
              <button
                className="intigration-project-ideas"
                onClick={() => (window.location.href = "/contactus")}
              >
                Have a Project In Mind?
              </button>
            </div>
            <div className="col-12 col-md-12 col-xl-6">
              <div className="industry-img">
                <Image
                  src={require("../../assets/images/solutions/SAAS_ILLUSTRATION.png")}
                  className=""
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

export default MigrationSolutions;
