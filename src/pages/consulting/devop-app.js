    import React from 'react'
import { Navbar } from '../../../components/Navbar';
import Image from 'next/image';
import TurnKey from '../../../components/TurnKey';
import HireUs from '../../../components/HireUs';
import OperationalPage from '../../../components/OperationalPage';
import bg from "../../assets/images/consulting/devop-operational.png";
import Footer from '../../../components/Footer';
import ServiceSectionSlider from '../../../components/ServiceSectionSlider';
import Technologies from '../../../components/Technologies';
import UseIntersectionAnimations from '../../../components/UseIntersectionAnimations';
import Head from 'next/head';
    const DevopConsultingServices = () => {
        UseIntersectionAnimations()
        return (
          <div>
            <Head>
              <title>Professional DevOps Consultancy Services Company</title>
              <meta name="description" content="Experience the epitome of customized web application dev excellence. Our expert consulting team delivers tailored solutions to elevate your online presence." />
            </Head>
            <Navbar/>
            <div className="devop-app-Banner">
     <div className="container">
        <div className="row align-items-center devop-app-top-banner ">
            <div className="col-12 col-md-6">
              <div className="devop-app-banner-box">
              <h1 className='devop-app-mobile-heading animate-up'>DevOps Consulting Services</h1>
                <p className='devop-app-mobile-sub-heading my-4 animate-left'>Release the Kraken of Efficiency with our DevOps Expert Consulting!</p>
                <button className="devop-app-get-in-touch animate-right" onClick={()=>window.location.href=("/contactus")}>Get in Touch</button>
              </div>
            </div>
            <div className="col-12 col-md-6">
               <div className="devop-app-banner-img">
               <Image  src={require('../../assets/images/consulting/devops-counsluting 1.png')} className='img-fluid animate-left' alt="" />
               </div>
            </div>
        </div>
      </div>
    </div>
            <TurnKey
              ParentDivColor="#357DED"
              ChildDivColor="rgba(53, 125, 237, 0.5)"
              leftImg="tern-key"
              title=" DevOps Consulting That Helps You Embrace The Future Of Software
               Development!"
              description={
                <span>
                  Our DevOps consulting services are designed to help you improve your
                  software delivery pipeline, automate your processes, and optimize
                  your infrastructure. From <b>DEVELOPMENT</b> to <b>DEPLOYMENT</b>,
                  our DevOps consultants work closely with you to ensure seamless
                  integration, enhanced collaboration, and faster time-to-market.
                  <br />
                  <br />
                  With our DevOps consultancy, you can streamline your operations,
                  reduce costs, and accelerate your business growth, that too with
                  ease and at a fraction of the cost!
                </span>
              }
            />
            <HireUs 
            
          bgColor='#143D68'
            />
            <OperationalPage
              bgImage={bg}
              mainClass="devop-app-OperationalCost"
              subTitle="DevOps Consulting Services"
              title="Release the Kraken of Efficiency with our DevOps Expert Consulting!"
              description={
                <span>
                  Our DevOps professional services help businesses of all sizes and
                  industries streamline their operations and achieve their goals.{" "}
                  <b>GFS IT Solutions</b>, the top-tier DevOps consulting company,
                  works closely with your team to identify areas for improvement and
                  implement solutions tailored to your unique needs and goals
                  <br />
                  Our DevOps expert consulting ensures your systems are always
                  up-to-date and functioning at peak performance. So if you're looking
                  for DevOps professional services you can trust to deliver
                  top-quality results, look no further than us. We're here to help you
                  achieve your goals and succeed in today's fast-paced and
                  ever-changing business landscape!
                </span>
              }
            />
            <Technologies />
            <ServiceSectionSlider />
            <Footer />
          </div>
        );
      };
      
      export default DevopConsultingServices;