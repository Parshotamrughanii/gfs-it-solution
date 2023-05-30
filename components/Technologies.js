
/* eslint-disable */
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const Technologies = () => {
  var settings = {
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
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
         <Head>
       <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>

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
    <div className="technologies">
      <div className="container">
        <h3 className="technologies-heading animate-up">Technologies We Are Excellent At</h3>
        <p className="tecnologies-desc animate-down">
          Our team is adept at leveraging the most updated tools and
          technologies.
        </p>
        <div className="row ">
          <div className="col">
            <Slider {...settings}>
              <div>
                <div className="techno-box">
                  <Image
                    src={require("../src/assets/images/consulting/react.png")}
                    className="tech-img"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <div className="techno-box">
                  <Image
                    src={require("../src/assets/images/consulting/nestjs.png")}
                    className="tech-img"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <div className="techno-box">
                  <Image
                    src={require("../src/assets/images/consulting/python.png")}
                    className="tech-img"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <div className="techno-box">
                  <Image
                    src={require("../src/assets/images/consulting/flutter.png")}
                    className="tech-img"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <div className="techno-box">
                  <Image
                    src={require("../src/assets/images/consulting/angular.png")}
                    className="tech-img"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <div className="techno-box">
                  <Image
                    src={require("../src/assets/images/consulting/node.png")}
                    className="tech-img"
                    alt=""
                  />
                </div>
              </div>
              <div>
              <div className="techno-box">
                  <Image
                    src={require("../src/assets/images/consulting/php.png")}
                    className="tech-img"
                    alt=""
                  />
                </div>
              </div>
              
            </Slider>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Technologies;
