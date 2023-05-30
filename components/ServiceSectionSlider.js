
import Head from "next/head";
import Slider from "react-slick";


const ServiceSectionSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    swipeToSlide: true,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
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
      <div className="ServiceSection4">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div className="row justify-content-center">
                <div className="col-md-10">
                  <div className="full-slider">
                    <Slider {...settings}>
                      <div className="px-5">
                        <h1>
                          Testimonials <br /> From Satisfied Customers
                        </h1>
                        <p>
                          Working with <b>GFS IT Solutions</b> is like having a
                          personal navigator guiding you through the turbulent
                          waters of digital marketing. They steer you toward
                          success and help your business navigate any obstacles
                          that may arise. Highly recommended!
                        </p>
                        <small>
                          {" "}
                          <span>── John.k </span>
                        </small>
                      </div>
                      <div className="px-5">
                        <h1>
                          Testimonials <br /> From Satisfied Customers
                        </h1>
                        <p>
                          Partnering with <b>GFS IT Solutions</b> for website
                          development was the most fruitful decision I ever
                          made. Their expert team listened to my needs and
                          perfected the web portal development that is only not
                          visually stunning but also meets our functional
                          requirements.
                        </p>
                        <small>
                          {" "}
                          <span>── Timothy </span>
                        </small>
                      </div>
                      <div className="px-5">
                        <h1>
                          Testimonials <br /> From Satisfied Customers
                        </h1>
                        <p>
                          If there were any award for the best app development
                          services provider, I am certain that GFS IT Solutions
                          would have won it. Thanks to their unparalleled
                          expertise and support, our app has become a shining
                          star in the digital world, attracting new customers
                          and enhancing our brand.
                        </p>
                        <small>
                          {" "}
                          <span>── M. Mauldin </span>
                        </small>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceSectionSlider;