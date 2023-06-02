import React from "react";
import bgs from "../../assets/images/consulting/design-oper.png";
import bannerImg from "../../assets/images/consulting/design-hire-bg.png";
import Technologies from "../../../components/Technologies";
import ServiceSectionSlider from "../../../components/ServiceSectionSlider";
import Footer from "../../../components/Footer";
import OperationalPage from "../../../components/OperationalPage";
import HireUs from "../../../components/HireUs";
import TurnKey from "../../../components/TurnKey";
import { Navbar } from "../../../components/Navbar";
import Image from "next/image";
import UseIntersectionAnimations from "../../../components/UseIntersectionAnimations";
import Head from "next/head";

const DesignConsulting = () => {
    UseIntersectionAnimations()
  return (
    <div>
      <Head>
        <title>UI UX Product Design & Brand Design Consultancy Services</title>
        <meta name="description" content="Craft captivating user experiences & stunning brand designs with our top-notch UI/UX product design consultant services." />
      </Head>
     <Navbar/>
     <div className="design-app-Banner">
     <div className="container">
        <div className="row align-items-center design-app-top-banner ">
            <div className="col-12 col-md-6">
              <div className="design-app-banner-box">
              <h1 className='design-app-mobile-heading animate-up'>Design Consulting Services</h1>
                <p className='design-app-mobile-sub-heading my-4 animate-left'>Design Dreams, Delivered By the Top-Notch Design Consultant!</p>
                <button className="design-app-get-in-touch animate-right" onClick={()=>window.location.href=("/contactus")}>Get in Touch</button>
              </div>
            </div>
            <div className="col-12 col-md-6">
               <div className="design-app-banner-img">
               <Image src={require('../../assets/images/consulting/inspiration-colour-design-service 1.png')} className='img-fluid animate-left' alt="" />
               </div>
            </div>
        </div>
      </div>
    </div>
      <TurnKey
        ParentDivColor="#1A120B"
        ChildDivColor="rgba(26, 18, 11, 0.5)"
        leftImg="design-turn"
        title="Software Design Consulting For Visually Stunning UI/UX Solutions"
        description={
          <span>
            We believe that design is not just about looks, but also about
            <b>functionality, usability</b>, and <b>user experience</b>. Our
            product design consultancy services are focused on creating
            engaging, user-friendly, and aesthetically pleasing designs that
            reflect your brand identity and values.
            <br />
            <br />
            Our design consultant is here to help you achieve your goals and
            take your business to the next level with creative solutions that
            are anything but ordinary.
          </span>
        }
      />
      <HireUs bgColor="#dda447" bgImage={bannerImg} />
      <OperationalPage
      mainClass="design-app-OperationalCost"
        bgImage={bgs}
        subTitle="Design Consulting"
        title="Brand Design Consultancy Firm Where Creativity And Strategy Collide!"
        description={
          <span>
            Our UI UX design consultancy takes a user-centric approach to
            creating digital experiences that are both beautiful and functional.
            As a software design consultancy agency, we bring a deep
            understanding of the technical side of things to every project we
            tackle. Last but not least, our graphic design consultant can help
            bring your ideas to life with stunning visuals that tell your story
            in a way that resonates with your audience. <br />
            <br />
            From <em>logos to brochures to social media graphics</em>, our
            product design consultant knows how to make an impact with the
            design that pops!
          </span>
        }
      />
      <Technologies />
      <ServiceSectionSlider />
      <Footer />
    </div>
  );
};

export default DesignConsulting;
