import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from 'next/router';


const AppDevelopmentTypes = ({
  headingTitle,
  description,
  TechnologiesTypes,
}) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
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
  const router = useRouter();
  const currentPath = router.asPath;
  console.log('currentPath', currentPath)
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
      <section className="app-development-types">
        <div className="container">
          <h1 className="animate-down">{headingTitle}</h1>
          <p className="animate-left">{description}</p>
          <div className="row">
            <Slider {...settings}>
              {TechnologiesTypes.map((item) => (
                <>
                  <div className="">
                    <div className={currentPath===item.path?"main-types-box active":"main-types-box"} onClick={item.onClick}>
                      <div className="types-icon">
                        <Image
                          src={require(`../src/assets//images/resuable-components/${item.icon}.png`)}
                          alt="app-develpment"
                        />
                      </div>
                      <div className="types-content">
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopmentTypes;
