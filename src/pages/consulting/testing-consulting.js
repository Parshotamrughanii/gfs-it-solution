import React from 'react'
import bgs from "../../assets/images/consulting/group-img.png";
import testingBg from "../../assets/images/consulting/testing-bg.png";
import Technologies from '../../../components/Technologies';
import ServiceSectionSlider from '../../../components/ServiceSectionSlider';
import Footer from '../../../components/Footer';
import TurnKey from '../../../components/TurnKey';
import OperationalPage from '../../../components/OperationalPage';
import HireUs from '../../../components/HireUs';
import { Navbar } from '../../../components/Navbar';
import Image from 'next/image';
import UseIntersectionAnimations from '../../../components/UseIntersectionAnimations';

const TestingConsulting = () => {
    UseIntersectionAnimations()
  return (
    <div>
    <Navbar/>
    <div className="testing-app-Banner">
     <div className="container">
        <div className="row align-items-center testing-app-top-banner ">
            <div className="col-12 col-md-6">
              <div className="testing-app-banner-box">
              <h1 className='testing-app-mobile-heading animate-up'>Testing Consultancy Services</h1>
                <p className='testing-app-mobile-sub-heading my-4 animate-left'>Let's Test The Limits Of Your Software Quality Together!</p>
                <button className="testing-app-get-in-touch animate-right" onClick={()=>window.location.href=("/contactus")}>Get in Touch</button>
              </div>
            </div>
            <div className="col-12 col-md-6">
               <div className="testing-app-banner-img">
               <Image src={require('../../assets/images/consulting/inspiration-colour-design-service 1 (1).png')} className='img-fluid animate-left' alt="" />
               </div>
            </div>
        </div>
      </div>
    </div>
      <TurnKey
        ParentDivColor="#1A120B"
        ChildDivColor="rgba(26, 18, 11, 0.5)"
        leftImg="female"
        title="Bulletproof Your Software With Our Foolproof Testing Consultancy!"
        description={
          <span>
            QA consulting services help you uncover hidden vulnerabilities,
            validate features, and ensure the flawless performance of your
            applications. With our expert software testing consulting, you will
            deliver reliable, high-quality software that stands the test of
            time. We use a variety of testing methods, including <b>MANUAL</b>{" "}
            and
            <b>AUTOMATED</b> testing, to identify any bugs or issues that may
            arise.
            <br />
            <br />
            <b>
              Have our QA consultants on your side to ensure your software is
              free from defects and meets the needs of your users!
            </b>
          </span>
        }
      />
      <HireUs bgColor="#1C4873" bgImage={testingBg} />
      <OperationalPage
        bgImage={bgs}
        mainClass="testing-app-OperationalCost"
        subTitle="QA Consulting Services"
        title="Software Testing Consulting That Exterminates Bugs And Fortifies Your Software!"
        description={
          <span>
            Our software quality assurance consultant ensures a comprehensive
            assessment of your current testing processes to identify areas of
            improvement. The software quality testing consultant at <b>GFS IT
            Solutions</b> cashes in on the right tools, processes, and methodologies
            to achieve your quality goals.
            <br />
            <br />
            Our software quality assurance consultant guides on a range of
            testing activities, including <em>functional testing, performance
            testing, security testing</em>, and more. If you're looking for a
            software quality testing consultant, there cannot be a better place
            to confide in than <b>GFS IT Solutions</b>.
          </span>
        }
      />
      <Technologies />
            <ServiceSectionSlider />
            <Footer />
    
    </div>
  );
};

export default TestingConsulting;