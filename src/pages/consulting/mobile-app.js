/* eslint-disable */
import Image from 'next/image'
import React from 'react'
import { Navbar } from '../../../components/Navbar'
import OperationalPage from '../../../components/OperationalPage'
import useIntersectionAnimations from '../../../components/UseIntersectionAnimations'
import TurnKey from '../../../components/TurnKey'
import bg from "../../assets/images/consulting/Rectangle 10.png";
import HireUs from '../../../components/HireUs'
import bgs from "../../assets/images/consulting/mob-img.png";
import Technologies from '../../../components/Technologies'
import ServiceSectionSlider from '../../../components/ServiceSectionSlider'
import Footer from '../../../components/Footer'

const MobileAppDevelopment = () => {
    useIntersectionAnimations()
  return (
    <>
    <Navbar/>
         <div className="Banner">
      <div className="container">
        <div className="row align-items-center top-banner ">
          <div className="col-12 col-md-6">
            <div className="banner-box">
              <h1 className="mobile-heading animate-down">Mobile App Consulting Services</h1>
              <p className="mobile-sub-heading my-4 animate-right">
                At <b>GFS IT Solutions</b>, we offer a range of mobile app
                consulting services that can help you take your mobile app idea
                from concept to reality. We know that creating a successful
                mobile app requires more than just a great idea - it requires
                expertise in mobile technology, design, and marketing. That's
                where our app consulting comes in.
                <br />
                <br />
                <b className="animate-left">Don't Wing It; Consult With The Experts!</b>
              </p>
              <button
                className="get-in-touch animate-left"
                onClick={() => (window.location.href = "/contactus")}
              >
                Get in Touch
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="banner-img">
              <Image
                src={require("../../assets/images/consulting/banner-right-img.png")}
                className="img-fluid animate-down"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <TurnKey
        ParentDivColor="#FF6014"
        ChildDivColor="rgba(255, 96, 20, 0.5)"
        leftImg="tern-key"
        title=" GET YOUR APP GAME ON WITH OUR EXPERT CONSULTING SERVICES!"
        description={
          <span>
            Have an idea for a mobile app but are not sure where to start? Our
            mobile app development consultant can help you get started by
            providing you with a comprehensive plan that includes DESIGN,
            <b> DEVELOPMENT, TESTING</b>, and <b>DEPLOYMENT</b>. Our enterprise
            app development consulting services can help you create secure,
            scalable, and user-friendly enterprise applications to streamline
            your business processes and boost your productivity. More so, our
            app integration consultancy helps you integrate your mobile app with
            your existing business systems, such as CRM, ERP, and other systems,
            to ensure seamless communication and data transfer.
            <br />
            <br />
            Whether you're looking for a consultant for a specific project or on
            a long-term basis, hire mobile app consultant from{" "}
            <b>GFS IT Solutions </b>
            now!
          </span>
        }
      />
      <HireUs bgColor="#435668" bgImage={bg} />
      <OperationalPage
        bgImage={bgs}
        mainClass="mobile-app-OperationalCost"
        subTitle="App Consulting Services"
        title="GET YOUR APP IDEA OFF THE GROUND!"
        description={
          <span>
            Creating a mobile app can be a daunting task, but you don't have to
            do it alone. With our mobile app consulting expertise, you can have
            the confidence and support you need to create a successful mobile
            app. <br />
            <br />
            With new technologies and trends emerging every day, it's important
            to stay ahead of the curve. Our mobile app design consultant can
            help you stay up-to-date with the latest developments in the mobile
            app industry and ensure that your app is always at the forefront of
            innovation!
          </span>
        }
      />
      <Technologies/>
      <ServiceSectionSlider/>
      <Footer/>
    </>
  )
}

export default MobileAppDevelopment