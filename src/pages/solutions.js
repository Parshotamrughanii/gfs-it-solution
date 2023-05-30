/* eslint-disable */
import React from 'react'
import { Navbar } from '../../components/Navbar'
import Image from 'next/image'
import LearnMoreButton from '../../components/LearnMoreButton'
import ServiceSectionSlider from '../../components/ServiceSectionSlider'
import Footer from '../../components/Footer'
import UseIntersectionAnimations from '../../components/UseIntersectionAnimations'


const solutions = () => {
  UseIntersectionAnimations()

  return (
    <>
    <Navbar/>
       <div className="Solution-ServiceBanner">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col">
            <div className="solution-service-box">
              <h1 className="animate-up">Solutions</h1>
              <p className="animate-right">
                Sick of outdated software? Want a high-end product to smooth out
                business operations? Stressed about migrating data? Fret not. We
                have a list of services as a business-oriented solution for you.
                Let us prescribe a modern digital fix that'll cure what ails
                you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="solution-ServiceSection1">
      <div className="container">
        <div className="row ServiceSection1-box">
          <div className="col-md-6 col-xl-8 text-left">
            <Image
              src={require("../assets/images/solutions/banner1/app-development (1) 1.png")}
              className="top-img animate-up animate-up"
              alt=""
            />
            <h1 className="animate-right">Health Care App Development</h1>
            <p className="animate-left">
              <b>GFS IT Solutions</b> strives to enhance healthcare outcomes
              through technology, innovation, and creativity. Our healthcare app
              development utilizes advanced mobile technologies, including{" "}
              <em>AI, machine learning, and blockchain</em>, to produce creative
              solutions that lower expenses and enrich care provision. We
              provide comprehensive assistance in healthcare mobile app
              solutions, <em>from concept to completion and beyond</em>, to aid
              healthcare entities in navigating the intricate healthcare
              industry.{" "}
              <b> Partner with GFS IT Solutions to stay ahead of the game!</b>
            </p>
           
            <LearnMoreButton
            onClick={() => (window.location.href = "/solutions/health-care")}
            title='Learn more'
            />
          </div>

          <div className="col-md-6 col-xl-4 ">
            <div className="development-img">
              <Image
                src={require("../assets/images/solutions/banner1/mobile-app 1.png")}
                className="right-img animate-up animate-right"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="middle-col">
          <div className="row ServiceSection1-box">
            <div className="col-md-6 col-xl-8 text-left">
              <Image
                src={require("../assets/images/solutions/banner1/coding 1.png")}
                className="top-img animate-up"
                alt=""
              />
              <h1 className="animate-right">On-Demand App Development</h1>
              <p className="animate-left">
                <b>GFS IT Solutions</b> provides you with the magic wand to
                conjure up your own on-demand business empire. Our expert team
                of wizards creates on-demand apps that fit your unique needs
                like a perfectly crafted spell. We weave together technology and
                innovation to create a magical user experience that leaves your
                customers enchanted.{" "}
                <b>
                  So, let us help you make your entrepreneurial dreams come true
                  with our on-demand app solutions.
                </b>
              </p>
            
              <LearnMoreButton
            onClick={() => (window.location.href = "/solutions/one-demand-app")}
            title='Learn more'
            />
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="development-img">
                <Image
                  src={require("../assets/images/solutions/banner1/web-programming 1.png")}
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
              src={require("../assets/images/solutions/banner1/eternity 1.png")}
              className="top-img animate-up"
              alt=""
            />
            <h1 className="animate-right">SaaS Development Services</h1>
            <p className="animate-left">
             <b > GFS IT Solutions</b> crafts digital castles in the cloud with its SaaS
              Development services. Our expert engineers conjure software
              solutions that float effortlessly on the horizon, ready to
              transform your business. <em>From conceptualizing your vision to
              designing, developing, and deploying your product</em>, we cover the
              entire spectrum. With our seamless integration of cutting-edge
              technologies, we build platforms that offer an unparalleled user
              experience. <b>Elevate your business to new heights with our SaaS
              solutions.</b>
            </p>
            <LearnMoreButton
            onClick={() => (window.location.href = "/solutions/development-services")}
            title='Learn more'
            />
       
          </div>

          <div className="col-md-6 col-xl-4">
            <div className="development-img ">
              <Image
                src={require("../assets/images/solutions/banner1/devops 1.png")}
                className="right-img animate-up"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="solution-ServiceSection2">
      <div className="container">
        <div className="row ServiceSection2-box">
          <div className="col-md-6 col-xl-8 text-left">
            <Image
              src={require("../assets/images/solutions/banner1/graphic-design 1.png")}
              className="top-img animate-up"
              alt=""
            />
            <h1 className="animate-right">Real Estate App Development</h1>
            <p className="animate-left">
              We build your dream home in the digital world with our Real Estate
              App solutions. Our team of skilled architects and engineers
              designs a blueprint that reflects your unique requirements and
              turns it into a fully functional app that simplifies the buying
              and selling process. We ensure that the foundation is strong, the
              layout is perfect, and every corner is designed with precision.
              <b>
                Trust us to build an app that not only meets but exceeds your
                expectations, just like your dream home.
              </b>
            </p>
            <LearnMoreButton
            onClick={() => (window.location.href = "/solutions/real-estate")}
            title='Learn more'
            />
      
          </div>

          <div className="col-md-6 col-xl-4 ">
            <div className="development-img ">
              <Image
                src={require("../assets/images/solutions/banner1/web-design (1) 1.png")}
                className="right-img animate-up"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="middle-col">
          <div className="row ServiceSection2-box">
            <div className="col-md-6 col-xl-8 text-left">
              <Image
                src={require("../assets/images/solutions/banner1/search 1.png")}
                className="top-img animate-up"
                alt=""
              />
              <h1 className="animate-right">Integration & Migration Solutions</h1>
              <p className="animate-left">
                We act like a bridge that connects two separate worlds,
                seamlessly integrating and migrating data, systems, and
                processes. With our Integration & Migration services, we create
                a path for you to move forward, free from the constraints of
                technology gaps and outdated systems. Our team ensures that your
                data flows smoothly, without disruption or delay.{" "}
                <b>
                  Trust us to provide a reliable, sturdy connection for your
                  business to thrive in the modern world!
                </b>
              </p>

              <LearnMoreButton
            onClick={() => (window.location.href = "/solutions/migration-solutions")}
            title='Learn more'
            />
         
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="development-img">
                <Image
                  src={require("../assets/images/solutions/banner1/web-design (1) 2.png")}
                  className="right-img animate-up"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row ServiceSection2-box">
          <div className="col-md-6 col-xl-8 text-left">
            <Image
              src={require("../assets/images/solutions/banner1/cloud-service 1.png")}
              className="top-img animate-up"
              alt=""
            />
            <h1 className="animate-right">Maintenance & Support Services</h1>
            <p className="animate-left">
              Our maintenance & support services are the lifeboats that keep
              your business afloat. Just as a skilled captain navigates through
              rough waters, our team of experts helps steer your business away
              from potential disasters. We are always ready to come to the
              rescue in case of any technical issues or glitches to keep your
              systems up-to-date and well-maintained. <b>Trust us to keep your
              digital world spinning smoothly, day and night!</b>
            </p>
         
            <LearnMoreButton
            onClick={() => (window.location.href = "/solutions/maintenance-support")}
            title='Learn more'
            />
   
          </div>

          <div className="col-md-6 col-xl-4">
            <div className="development-img">
              <Image
                src={require("../assets/images/solutions/banner1/web-design (1) 3.png")}
                className="right-img animate-up"
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

export default solutions