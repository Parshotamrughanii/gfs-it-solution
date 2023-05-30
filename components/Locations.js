import Image from "next/image";
import React from "react";
import Slider from "react-slick";
function Locations() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    arrows: false,
    responsive: [
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

  return (
    <>
      <div className="Locations">
        <Slider {...settings}>
          <section>
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="container">
                    <h1 className="text-center mb-5">Our Locations</h1>
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h5 className="mb-0">United Kingdom</h5>
                        <small>London</small>
                        <p className="mb-0 mt-4">
                          52-53 Saunders House, W53TA, London
                        </p>
                        <p className="mb-0">+44-7448-211531</p>
                        <p>contact.uk@gfsitsolutions.com</p>
                      </div>
                      <div className="col-md-6 text-center">
                        <div className="location-img">
                          <Image
                            src={require("../src/assets/images/london-bridge 2.png")}
                            className="location-image"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="container">
                    <h1 className="text-center mb-5">Our Locations</h1>
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h5 className="mb-0">United Arab Emirates</h5>
                        <small>Dubai</small>
                        <p className="mb-0 mt-4">
                          2107 Regal Tower Business Bay, Dubai
                        </p>
                        <p className="mb-0">+971-552-656-958</p>
                        <p>contact.uae@gfsitsolutions.com</p>
                      </div>
                      <div className="col-md-6 text-center">
                        <div className="location-img">
                          <Image
                            src={require("../src/assets/images/dubai 2.png")}
                            className="location-image"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="container">
                    <h1 className="text-center mb-5">Our Locations</h1>
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h5 className="mb-0">South Africa</h5>
                        <small>Johannesburg</small>
                        <p className="mb-0 mt-4">
                          28 Fricker Street, Illovo, Sandton Johannesburg, South
                          Africa
                        </p>
                        <p className="mb-0">+27-786-005-786</p>
                        <p>contact.southafrica@gfsitsolutions.com</p>
                      </div>
                      <div className="col-md-6 text-center">
                        <div className="location-img">
                          <Image
                            src={require("../src/assets/images/johannesburg 1.png")}
                            className="location-image"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="container">
                    <h1 className="text-center mb-5">Our Locations</h1>
                    <div className="row align-items-center">
                      <div className="col-md-6">
                        <h5 className="mb-0">Pakistan</h5>
                        <small>Karachi</small>
                        <p className="mb-0 mt-4">
                          House No D-98/2 Clifton Block 4, Karachi, Sindh,
                          Pakistan
                        </p>
                        <p className="mb-0">+92-301-115-5760</p>
                        <p>contact.pakistan@gfsitsolutions.com</p>
                      </div>
                      <div className="col-md-6 text-center">
                        <div className="location-img">
                          <Image
                            src={require("../src/assets/images/resting-place 1.png")}
                            className="location-image"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Slider>
      </div>
    </>
  );
}

export default Locations;