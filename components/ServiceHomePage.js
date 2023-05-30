/* eslint-disable */
import React from "react";
import Slider from "react-slick";
import Locations from "./Locations";
import 'animate.css';


import Footer from "./Footer";
import Image from "next/image";
import Style from '../src/styles/HomePageServices.module.css'
import Head from "next/head";
import { Navbar } from "./Navbar";
import useIntersectionAnimations from "./UseIntersectionAnimations";

// import img from '../src/assets/images/inner-pages/mobile-app/bg.png'
// import Technologies from "../../consulting/Technologies";
const ServiceHomePage = ({
  bgImage,
  bgColor,
  imgSliderBackgroundColor,
  mainBoxSliderBgColor,
  bannerImage,
  bannerTitle,
  bannerDescritption,
  appDevelopBanner,
  appDevelopSubHeading,
  appDevelopHeading,
  appDevelopDescription,
  ideasHeading,
  ideasDescription,
  data,
  tabHeading,
  tabList,
  //table box
  title1,
  description1,
  image1,

  title2,
  description2,
  image2,

  title3,
  description3,
  image3,

  title4,
  description4,
  image4,

  title5,
  description5,
  image5,

  title6,
  description6,
  image6,

  title7,
  description7,
  image7,
  // second slider tabs
  secondTabsData,
  needsHeading,
  needsDecscription1,
  needsDecscription2,
  needsDecscription3,
  needsDecscription4,
  needsDecscription5,
  needsDecscription6,
  needsDecscription7,
  needsSubHeading,
  CTN,
}) => {
  useIntersectionAnimations()

  //technologies scection slider
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${bgImage})`,
  }
  const imageUrl = "../src/assets/images/inner-pages/mobile-app/bg.png";
  return (
    <div>
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
      <Navbar/>
      <div
        style={{ background: bgImage }}
        className="mobile-app-development"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-xl-6">
              <div className="mobile-app-left-col animate-right">
                <h1>{bannerTitle}</h1>
                {bannerDescritption}
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-6">
              <div className="mobile-app-banner animate-left">
                <Image
                  src={require(`../src/assets/images/inner-pages/mobile-app/${bannerImage}.png`)}
                  alt="app-develpment"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* We Understand your Needs Section */}
      <div className="your-needs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-12 col-xl-6">
              <div className="needs-img animate-up">
                <Image
                  src={require(`../src/assets/images/inner-pages/mobile-app/${appDevelopBanner}.png`)}
                  alt="app-develpment"
                />
              </div>
            </div>
            <div className="col-12 col-md-12 col-xl-6">
              <div className="needs-content animate-right">
                <h3>{appDevelopSubHeading}</h3>
                <h1>{appDevelopHeading}</h1>
                <p>{appDevelopDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: bgColor }} className="technologies-section">
        <div className="container">
          <div className="row">
            <h1 className="animate-up">{ideasHeading}</h1>
            <p className="animate-right">{ideasDescription}</p>
            <div className="col-12">
              <Slider {...settings}>
                {data.map((item) => {
                  return (
                    <>
                      <div
                        style={{
                          background: mainBoxSliderBgColor,
                          cursor: "pointer",
                        }}
                        onClick={item.onClicks}
                        className="main-boxs"
                      >
                        <div
                          style={{ background: imgSliderBackgroundColor }}
                          className="img-slider animate-down"
                        >
                          <Image
                            src={require(`../src/assets/images/inner-pages/mobile-app/${item.icon}.png`)}
                            className=""
                            alt=""
                          />
                        </div>
                        <h3>{item.title}</h3>
                        <div className="list animate-up">
                          <ul className="">
                            <li>{item.line1}</li>
                            <li>{item.line2}</li>
                            <li>{item.line3}</li>
                            <li>{item.line4}</li>
                          </ul>
                        </div>
                        <div className="read-more">
                          <h6 className="" onClick={item.onClicks}>
                            Read More ➜
                          </h6>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <div className="empowering-section">
        <div className="container">
          <h1 className="empowering-heading animate-up">{tabHeading}</h1>

          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            {tabList.map((item, index) => {
              return (
                <>
                  <li class="nav-item " role="presentation" key={index}>
                    <button
                      class={
                        index === 0
                          ? "nav-link active animate-right"
                          : "nav-link animate-left"
                      }
                      id={item.id}
                      data-bs-toggle="pill"
                      data-bs-target={item.dataBsTarget}
                      type="button"
                      role="tab"
                      aria-controls={item.ariaControls}
                      aria-selected="false"
                    >
                      {item.name}
                    </button>
                  </li>
                </>
              );
            })}
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="empowering-box">
                    <h3 className="animate-left">{title1}</h3>
                    <p className="animate-left">{description1}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="empowering-img animate-right">
                    <Image
                      src={require(`../src/assets/images/inner-pages/mobile-app/${image1}.png`)}
                      className=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="empowering-box">
                    <h3>{title2}</h3>
                    <p>{description2}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="empowering-img">
                    <Image
                      src={require(`../src/assets/images/inner-pages/mobile-app/${image2}.png`)}
                      className=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="empowering-box">
                    <h3>{title3}</h3>
                    <p>{description3}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="empowering-img">
                    <Image
                      src={require(`../src/assets/images/inner-pages/mobile-app/${image3}.png`)}
                      className=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-logistics"
              role="tabpanel"
              aria-labelledby="pills-logistics-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="empowering-box">
                    <h3>{title4}</h3>
                    <p>{description4}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="empowering-img">
                    <Image
                      src={require(`../src/assets/images/inner-pages/mobile-app/${image4}.png`)}
                      className=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-manufacturing"
              role="tabpanel"
              aria-labelledby="pills-manufacturing-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="empowering-box">
                    <h3>{title5}</h3>
                    <p>{description5}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="empowering-img">
                    <Image
                      src={require(`../src/assets/images/inner-pages/mobile-app/${image5}.png`)}
                      className=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-healthcare"
              role="tabpanel"
              aria-labelledby="pills-healthcare-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="empowering-box">
                    <h3>{title6}</h3>
                    <p>{description6}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="empowering-img">
                    <Image
                      src={require(`../src/assets/images/inner-pages/mobile-app/${image6}.png`)}
                      className=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="pills-banking"
              role="tabpanel"
              aria-labelledby="pills-banking-tab"
              tabindex="0"
            >
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="empowering-box">
                    <h3>{title7}</h3>
                    <p>{description7}</p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="empowering-img">
                    <Image
                      src={require(`../src/assets/images/inner-pages/mobile-app/${image7}.png`)}
                      className=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: bgColor }} className="needs-section">
        <div className="container">
          <div className="row">
            <h1 className="animate-right">{needsHeading}</h1>
            <div className="needs-tabs">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                {secondTabsData.map((item, index) => {
                  return (
                    <>
                      <li class="nav-item animate-up" role="presentation">
                        <button
                          class={index === 0 ? "nav-link active" : "nav-link"}
                          id={item.id}
                          data-bs-toggle="pill"
                          data-bs-target={item.dataBsTarget}
                          type="button"
                          role="tab"
                          aria-controls={item.ariaControls}
                          aria-selected="true"
                        >
                          {item.name}
                        </button>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-customer"
                role="tabpanel"
                aria-labelledby="pills-customer-tab"
                tabindex="0"
              >
                <div className="row">
                  <div className="col-12">
                    <div className="needs-content-tab">
                      <div className="needs-box animate-left">
                        <p>{needsDecscription1}</p>
                        {CTN ? (
                          CTN
                        ) : (
                          <>
                            <button
                              onClick={() =>
                                (window.location.href = "/contactus")
                              }
                            >
                              Get in Touch
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade "
                id="pills-marketing"
                role="tabpanel"
                aria-labelledby="pills-marketing-tab"
                tabindex="0"
              >
                <div className="needs-content-tab">
                  <div className="needs-box">
                    <p>{needsDecscription2}</p>
                    {CTN ? (
                      CTN
                    ) : (
                      <>
                        <button
                          onClick={() => (window.location.href = "/contactus")}
                        >
                          Get in Touch
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="pills-efficiency"
                role="tabpanel"
                aria-labelledby="pills-efficiency-tab"
                tabindex="0"
              >
                <div className="needs-content-tab">
                  <div className="needs-box">
                    <p>{needsDecscription3}</p>
                    {CTN ? (
                      CTN
                    ) : (
                      <>
                        <button
                          onClick={() => (window.location.href = "/contactus")}
                        >
                          Get in Touch
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-competitive"
                role="tabpanel"
                aria-labelledby="pills-competitive-tab"
                tabindex="0"
              >
                <div className="needs-content-tab">
                  <div className="needs-box">
                    <p>{needsDecscription4}</p>
                    {CTN ? (
                      CTN
                    ) : (
                      <>
                        <button
                          onClick={() => (window.location.href = "/contactus")}
                        >
                          Get in Touch
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-hybrid"
                role="tabpanel"
                aria-labelledby="pills-hybrid-tab"
                tabindex="0"
              >
                <div className="needs-content-tab">
                  <div className="needs-box">
                    <p>{needsDecscription5}</p>
                    {CTN ? (
                      CTN
                    ) : (
                      <>
                        <button
                          onClick={() => (window.location.href = "/contactus")}
                        >
                          Get in Touch
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade "
                id="pills-custom"
                role="tabpanel"
                aria-labelledby="pills-custom-tab"
                tabindex="0"
              >
                <div className="needs-content-tab">
                  <div className="needs-box">
                    <p>{needsDecscription6}</p>
                    {CTN ? (
                      CTN
                    ) : (
                      <>
                        <button
                          onClick={() => (window.location.href = "/contactus")}
                        >
                          Get in Touch
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="pills-metaverse"
                role="tabpanel"
                aria-labelledby="pills-metaverse-tab"
                tabindex="0"
              >
                <div className="needs-content-tab">
                  <div className="needs-box">
                    <p>{needsDecscription7}</p>
                    {CTN ? (
                      CTN
                    ) : (
                      <>
                        <button
                          onClick={() => (window.location.href = "/contactus")}
                        >
                          Get in Touch
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="needs-sub-heading">
              <div className="row align-items-center">
                <div className="col-12 col-md-9 animate-right">
                  <p>{needsSubHeading}</p>
                </div>
                <div className="col-12 col-md-3">
                  {CTN ? (
                    CTN
                  ) : (
                    <>
                      <button
                        onClick={() => (window.location.href = "/contactus")}
                      >
                        Get in Touch
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Technologies/> */}
      <Locations />
      <Footer />
    </div>
  );
};

export default ServiceHomePage;
