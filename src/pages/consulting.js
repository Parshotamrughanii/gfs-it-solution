/* eslint-disable */
import React from 'react'
import { Navbar } from '../../components/Navbar'
import Footer from '../../components/Footer'
import Image from 'next/image'
import LearnMoreButton from '../../components/LearnMoreButton'
import ServiceSectionSlider from '../../components/ServiceSectionSlider'
import UseIntersectionAnimations from '../../components/UseIntersectionAnimations'
import Head from 'next/head'

const consulting = () => {
  UseIntersectionAnimations()
  return (
    <>
    <Head>
      <title>GFS IT Solutions</title>
      </Head>
    <Navbar/>
    <div className="consulting-serviceBanner">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col">
            <div className="consulting-service-box">
              <h1 className="animate-up">Consulting</h1>
              <p className="animate-right">
                <b>GFS IT Solutions</b>, offering top-notch IT consulting services that
                act as a lighthouse to shine a light on areas for improvement,
                and help you navigate through the rough waters of business.
                <em>Whether you are looking to improve your operations, streamline
                your processes, or optimize your resources</em>, our IT business
                consulting services are here to help.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="consulting-ServiceSection1">
      <div className="container">
        <div className="row ServiceSection1-box">
          <div className="col-md-6 col-xl-8 text-left">
            <Image
              src={require("../assets/images/consulting/app-development (1) 1 (1).png")}
              className="top-img animate-up"
              alt=""
            />
            <h1 className="animate-left">Mobile App Consulting</h1>
            <p className="animate-right">
              In a world where mobile is king, a well-crafted and robust mobile
              app is the crown jewel of any business. Our mobile app consulting
              services offer you the keys to creating an app that{" "}
              <em>
                dazzles users, elevates your brand, and unlocks revenue growth
              </em>
              . <b>Let&apos;s craft your app&apos;s success story today!</b>
            </p>
            <LearnMoreButton
            onClick={() => (window.location.href = "/consulting/mobile-app")}
            title='Learn more'
            />
          </div>
          <div className="col-md-6 col-xl-4 ">
            <div className="development-img">
              <Image
                src={require("../assets/images/consulting/mobile-app 1 (1).png")}
                className="right-img animate-right"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="middle-col">
          <div className="row ServiceSection1-box">
            <div className="col-md-6 col-xl-8 text-left">
              <Image
                src={require("../assets/images/consulting/coding 1 (1).png")}
                className="top-img animate-up"
                alt=""
              />
              <h1 className="animate-right">Web App Consulting</h1>
              <p className="animate-left">
                Your web app is your digital storefront; it must make a lasting
                impression. Our web app consulting services help you craft web
                apps that are responsive, user-friendly, and perform like a
                well-oiled machine.{" "}
                <b>
                  Maintain a fortress-like web application with our digital
                  consulting services now!
                </b>
              </p>
              <LearnMoreButton
            onClick={() => (window.location.href = "/consulting/web-app")}
            title='Learn more'
            />
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="development-img">
                <Image
                  src={require("../assets/images/consulting/web-programming 1 (1).png")}
                  className="right-img animate-up"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row ServiceSection1-box">
          <div className="col-md-6 col-xl-8 text-left">
            <Image
              src={require("../assets/images/consulting/eternity 1 (1).png")}
              className="top-img animate-up"
              alt=""
            />
            <h1 className="animate-right">DevOps Consulting</h1>
            <p className="animate-left">
              With our expert guidance, you can navigate the twists and turns of
              the DevOps journey and accelerate your software delivery pipeline.
             <b> Let us help you steer towards innovation and efficiency with our
              DevOps expert consulting services.</b>
            </p>
            <LearnMoreButton
            onClick={() => (window.location.href = "/consulting/devop-app")}
            title='Learn more'
            />
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="development-img">
              <Image
                src={require("../assets/images/consulting/devops 1.png")}
                className="right-img animate-up"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="consulting-ServiceSection2">
      <div className="container">
        <div className="row ServiceSection2-box">
          <div className="col-md-6 col-xl-8 text-left">
            <Image
              src={require("../assets/images/consulting/graphic-design 1 (1).png")}
              className="top-img animate-up"
              alt=""
            />
            <h1 className="animate-right">Design Consulting</h1>
            <p className="animate-left">
              Your brand's visual identity is crucial to your success; it must
              be consistent across all channels. Our design consulting services
              help you create a strong, recognizable brand that resonates with
              your customers. It&apos;s time to design your success with us.
              Experience design consulting like nowhere else!
            </p>
            <LearnMoreButton
              onClick={() =>
                (window.location.href = "/consulting/design-consulting")
              }
              title="Learn more"
            />
          </div>
          <div className="col-md-6 col-xl-4 ">
            <div className="development-img animate-left">
              <Image
                src={require("../assets/images/consulting/web-design (1) 1 (1).png")}
                className="right-img"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="middle-col">
          <div className="row ServiceSection2-box">
            <div className="col-md-6 col-xl-8 text-left">
              <Image
                src={require("../assets/images/consulting/search 1 (1).png")}
                className="top-img animate-up"
                alt=""
              />
              <h1 className="animate-right">Testing Consulting</h1>
              <p className="animate-left">
                With our software testing consulting services, businesses can
                climb the mountain of quality assurance, reaching the summit of
                bug-free software while reducing costs and time-to-market.
                <b>
                  Let us be your partner in the quest for software excellence!
                </b>
              </p>

              <LearnMoreButton
                onClick={() =>
                  (window.location.href = "/consulting/testing-consulting")
                }
                title="Learn more"
              />
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="development-img animate-left">
                <Image
                  src={require("../assets/images/consulting/Mask group.png")}
                  className="right-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row ServiceSection2-box">
          <div className="col-md-6 col-xl-8 text-left">
            <Image
              src={require("../assets/images/consulting/cloud-service 1 (1).png")}
              className="top-im animate-up"
              alt=""
            />
            <h1 className="animate-right">Cloud Consulting</h1>
            <p className="animate-left">
              Our cloud migration consulting services help you navigate the
              cloudscape to identify the best cloud solutions for your business
              needs, <em>whether it&apos;s a public, private, or hybrid cloud</em>.
              <b>
                Streamline your operations and optimize your cloud
                infrastructure with our professional consulting services!
              </b>
            </p>
            <LearnMoreButton
              onClick={() =>
                (window.location.href = "/consulting/cloud-consulting")
              }
              title="Learn more"
            />
          </div>
          <div className="col-md-6 col-xl-4">
            <div className="development-img animate-up">
              <Image
                src={require("../assets/images/consulting/Mask group (1).png")}
                className="right-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <ServiceSectionSlider />
<Footer/>
    </>
  )
}
export default consulting