import Head from "next/head";
import React from "react";
import Slider from "react-slick";

const AppDevelopmentService = ({ headingTitle, data ,slidesToShow}) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow:slidesToShow ||4,
    slidesToScroll:1,
    swipeToSlide: true,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
        },
      },
    ],
  };
  return (
    <div>
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
      <section className="app-development-service">
        <div className="container">
          <div className="row">
            <div className="col-12 animate-down">
              <h1>{headingTitle}</h1>
            </div>
            <Slider {...settings}>
              {data.map((item) => {
                return (
                  <div className="col-12 col-md-3">
                    <div className="main-development-service-box">
                      <h3 className="animate-right">{item.title}</h3>
                      <p className="animate-down">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopmentService;
