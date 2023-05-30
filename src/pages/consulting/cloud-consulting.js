import React from 'react'

import bgs from "../../assets/images/consulting/cloud.png";
import testingBg from "../../assets/images/consulting/cloud-testing.png";
import Technologies from '../../../components/Technologies';
import ServiceSectionSlider from '../../../components/ServiceSectionSlider';
import Footer from '../../../components/Footer';
import { Navbar } from '../../../components/Navbar';
import TurnKey from '../../../components/TurnKey';
import HireUs from '../../../components/HireUs';
import OperationalPage from '../../../components/OperationalPage';
import Image from 'next/image';
import UseIntersectionAnimations from '../../../components/UseIntersectionAnimations';
const CloudConsulting = () => {
    UseIntersectionAnimations()
  return (
    <div>
        <Navbar/>
        <div className="cloud-app-Banner">
      <div className="container">
        <div className="row align-items-center cloud-app-top-banner ">
          <div className="col-12 col-md-6">
            <div className="cloud-app-banner-box">
              <h1 className="cloud-app-mobile-heading animate-up">
                Cloud Consulting Services
              </h1>
              <p className="cloud-app-mobile-sub-heading my-4 animate-left">
                Take Your Business To New Heights With Our Cloud Migration
                Consulting - Because The Sky's The Limit!
              </p>
              <button className="cloud-app-get-in-touch animate-right" onClick={()=>window.location.href=("/contactus")}>Get in Touch</button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="cloud-app-banner-img">
              <Image
                src={require("../../assets/images/consulting/inspiration-colour-design-service 1 (2).png")}
                className="img-fluid animate-left"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
      <TurnKey
        ParentDivColor="#9E1F63"
        ChildDivColor="rgba(139, 24, 86, 0.74)"
        leftImg="male"
        title="Helping You Navigate The Complexities Of Cloud"
        description={
          <span>
            <b>Migration, Optimization, And Management</b>
            <br />
            Experience the unparalleled scalability, flexibility, and
            cost-efficiency of the cloud as our cloud consultant guides you
            toward digital transformation success. Our cloud consulting services
            are designed to help you leverage the power of cloud computing to
            improve your business performance.
            <br />
            <br />
            Whether you need to migrate your applications to the cloud, optimize
            your infrastructure, or implement cloud-based solutions, GFS cloud
            computing consultants can help you every step of the way. With our
            cloud consultant, you can reduce costs, improve scalability, and
            increase agility!
          </span>
        }
      />
      <HireUs bgColor="#ec2389" bgImage={testingBg} />
      <OperationalPage
        bgImage={bgs}
        mainClass="cloud-app-OperationalCost"
        subTitle="Mobile App Consulting"
        title="Our Cloud Computing Consulting Services Are Like A Silver Lining For Your Business!"
        description={
          <span>
            Are you tired of your data being stuck in the dusty old hardware in
            your office closet?
            <br />
            Do you long for the freedom and flexibility of the cloud? Look no
            further, because our cloud migration consulting has got you covered.<br/>
            Our cloud migration consulting will take your business to new
            heights. With our expert guidance, you'll be soaring through the
            clouds in no time.
            <br /> But wait, there's more! We don't just offer standard cloud
            strategy consulting services. We offer cloud security consulting
            solutions as well.
            <br /> So don't wait any longer. Let us take your business to cloud
            nine with our hybrid cloud consulting services.
          </span>
        }
      />
      <Technologies />
      <ServiceSectionSlider />
      <Footer />
   
    </div>
  );
};

export default CloudConsulting;