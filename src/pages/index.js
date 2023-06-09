import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "components/Navbar";
import Slider from "react-slick";
import Footer from "components/Footer";
import Recognization from "../../components/Recognization";
import Locations from "../../components/Locations";
import UseIntersectionAnimations from "../../components/UseIntersectionAnimations";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
   UseIntersectionAnimations()
  const welcomeDiv = useRef(null);
  const weText = useRef(null);
  const areText = useRef(null);
  const gfsLogo = useRef(null);
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
      <title>GFS IT Solutions | App Development | NFT Creator | Digital Marketing Company</title>
      <meta name="description" content="At GFS IT Solutions, we provide world-class software development services that are customized to the specific requirements of startups, SMBs, & enterprise-size businesses." />
      
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
      
      <section id="main_banner">
        <div ref={welcomeDiv} id="animated-box"></div>
        <h1 id="weText" ref={weText} className="splash-text">
          We
        </h1>
        <h1 id="areText" ref={areText} className="splash-text">
          Are
        </h1>
        <Image
          id="gfs-logo"
          ref={gfsLogo}
          src={require("../assets/images/logo.png")}
          alt="GFS IT Solutions Logo"
          className="splash-text"
        />

        <div id="hero-text">
          <h4>── Welcome To GFS ──</h4>
          <h1>it solutions</h1>
        </div>
      </section>
      <section className="banner2">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <div className="banner-title">
                <h1 className="animate-left">
                  Who
                  <br /> we
                  <br /> are?
                </h1>
              </div>

              <br />

              <p className="animate-right">
                We are a bunch of tech-savvy enthusiasts and CREATIVES who turn
                every digital challenge into a marketing opportunity.
              </p>
            </div>
            <div className="col-md-6">
              <Image
                src={require("../assets/images/banner2.png")}
                className="img-fluid animate-up"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section id="main_banner3">
        <div className="banner3">
          <div className="container">
            <div className="row why-work-with-us">
              <div className="col-md-5">
                <Image
                  src={require("../assets/images/why-work-with-us.png")}
                  alt="why work with us"
                  className="animate-up"
                />

                <br />

                <p className="animate-right">
                  Because we master the craft of creativity, technology, and
                  innovation to put forward digitally-enabled solutions and
                  impeccable GFS software development.
                </p>
              </div>
              <div className="col-md-7">
                <h1 className="animate-left">
                  WHY WORK WITH GFS IT SOLUTIONS?
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="banner4">
          <div className="container">
            <div className="main-box-div">
              <div className="we-do  animate-up">
                <h1>
                  We <br />
                  Create
                  <br /> Digital
                  <br /> Wonders!
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="be-better">
        <div className="banner5 pt-5 text-center">
          <div className="container pt-3">
            <h1 className="text-left animate-left">
              Industry-honed Marketing For Laser-target Visibility!
            </h1>
          </div>
        </div>
      </section>
      <section id="we-have-done" className="banner6">
        <div className="container">
          <h1 className="animate-up">
            We Help Marketing Opportunities Knock at Your Doorstep By:
          </h1>

          <br />
          <br />
          <br />

          <div className="digital-computing animate-right">
            <div className="p-3 digit">1</div>
            <div className="p-3">
              <h4>Game Development</h4>
              <p className="mr-4">
                Our developers create next-gen games that not only function
                extraordinarily but also create an immersive and unforgettable
                experience! We also perfect custom software development
                processes to add a touch of personalization to the product.
              </p>
            </div>
          </div>

          <div className=" digital-computing animate-right">
            <div className="p-3 digit">2</div>
            <div className="p-3">
              <h4>App Development</h4>
              <p className="mr-4">
                Our application developers portray your brand vision into the
                app, making it highly engaging, converting and aesthetically
                pleasing. You can now do business with our custom app
                development expertise like never before!
              </p>
            </div>
          </div>

          <div className="digital-computing animate-right">
            <div className="p-3 digit">3</div>
            <div className="p-3">
              <h4>Blockchain Development</h4>
              <p className="mr-4">
                We have blockchain developers who make turnkey solutions helpful
                for your businesses to navigate the highly competitive
                landscape. Our blockchain development company helps your assets
                to be unclaimable and immutable!
              </p>
            </div>
          </div>
        </div>
      </section>
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
   <Recognization/>
   <Locations/>
      <Footer/>
    </>
  );
}

{
  /* <main className={`${styles.main} ${inter.className}`}>
<div className={styles.description}>
  <p>
    Get started by editing&nbsp;
    <code className={styles.code}>src/pages/index.js</code>
  </p>
  <div>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      By{' '}
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className={styles.vercelLogo}
        width={100}
        height={24}
        priority
      />
    </a>
  </div>
</div>

<div className={styles.center}>
  <Image
    className={styles.logo}
    src="/next.svg"
    alt="Next.js Logo"
    width={180}
    height={37}
    priority
  />
</div>

<div className={styles.grid}>
  <a
    href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>
      Docs <span>-&gt;</span>
    </h2>
    <p>
      Find in-depth information about Next.js features and&nbsp;API.
    </p>
  </a>

  <a
    href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>
      Learn <span>-&gt;</span>
    </h2>
    <p>
      Learn about Next.js in an interactive course with&nbsp;quizzes!
    </p>
  </a>

  <a
    href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>
      Templates <span>-&gt;</span>
    </h2>
    <p>
      Discover and deploy boilerplate example Next.js&nbsp;projects.
    </p>
  </a>

  <a
    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    className={styles.card}
    target="_blank"
    rel="noopener noreferrer"
  >
    <h2>
      Deploy <span>-&gt;</span>
    </h2>
    <p>
      Instantly deploy your Next.js site to a shareable URL
      with&nbsp;Vercel.
    </p>
  </a>
</div>
</main>
<div className="container">
<div className="row">
<div className="col-6">ssss</div>
<div className="col-6">ssss</div>
</div>
</div> */
}
