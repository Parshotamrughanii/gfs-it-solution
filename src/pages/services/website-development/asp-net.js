import React from "react";

import bannerImg from "../../../assets/images/resuable-components/website-bg.png";
import AppDevelopmentBanner from "../../../../components/AppDevelopmentBanner";
import { Navbar } from "../../../../components/Navbar";
import AppDevelopmentWhy from "../../../../components/AppDevelopmentWhy";
import AppDevelopmentService from "../../../../components/AppDevelopmentService";
import AppProductDevelopment from "../../../../components/AppProductDevelopment";
import AppDevelopmentTypes from "../../../../components/AppDevelopmentTypes";
import Locations from "../../../../components/Locations";
import Footer from "../../../../components/Footer";
import Head from "next/head";
// import "./AspNet.css";

const boxData = [
  {
    title: "ASP NET MVC Web Development",
    description:
      "Our ASP NET MVC web development services aim to deliver interactive and engaging web applications that provide an exceptional UX. We use the latest technologies and best practices of ASP.NET development to create web applications that meet your specific business needs.",
  },
  {
    title: ".NET Framework Development",
    description:
      "Our .NET framework development services include Custom .NET Framework Development, ASP.NET Web Development, .NET Maintenance and Support and Migration Services. ",
  },
  {
    title: ".NET Core Development",
    description:
      "With our .NET core development expertise, you can get your hands on the custom-built solutions that help you achieve your business objectives and marketing goals.",
  },
  {
    title: "Windows Form Development",
    description:
      "With our Windows form development, you get rich and engaging desktop applications that run seamlessly on the Windows platform.",
  },
];
const TechnologiesTypes = [
  {
    icon: "asp",
    title: "ASP.NET",
    onClick: ()=>{window.location.href=('/services/website-development/asp-net')},
    description:
      "Unleash the power of the web with our ASP.NET services built to electrify your online presence!",
  },
  {
    icon: "typescript",
    title: "TypeScript Development",
    onClick: ()=>{window.location.href=('/services/website-development/typscript')},
    description:
      "Transform your website into a stunning masterpiece with our TypeScript development services that will make your code sing!",
  },
  {
    icon: "python",
    title: "Python Development",
    onClick: ()=>{window.location.href=('/services/website-development/python')},
    description:
      "Embrace the future of technology with our Python development services that will make your website the talk of the town!",
  },
  {
    icon: "angular",
    title: "Angular Development ",
    onClick: ()=>{window.location.href=('/services/website-development/angular')},
    description:
      "Revolutionize your website with our Angular development services that will make your online presence a force to be reckoned with!",
  },
  {
    icon: "Group 1342",
    title: "PHP Development ",
    onClick: ()=>{window.location.href=('/services/website-development/php')},
    description:
      "Get ready to take the digital world by storm with our PHP development services crafted to perfection!",
  },
  {
    icon: "Vector (5)",
    title: "Laravel Development  ",
    onClick: ()=>{window.location.href=('/services/website-development/laravel')},
    description:
      "Elevate your website to new heights with our Laravel development services that will make it soar like an eagle!",
  },
  {
    icon: "wordpress 1",
    title: "WordPress Development",
    onClick: ()=>{window.location.href=('/services/website-development/wordpress')},
    description:
      "Unlock your website's true potential with our WordPress development services that will make your online presence shine like a diamond!",
  },


];
const AspNet = () => {
  return (
    <div>
   <Head>
    <title>MVC Web & ASP.NET Core Development Company in USA</title>
    <meta name="description" content="Empower your success with a top asp.net core development company. Unlock the potential of custom asp.net mvc web development services." />
   </Head>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="asp-banner"
        title="ASP.NET Web Development Company"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description="Empower Your Business with The Cutting-Edge ASP.NET Development Service"
      />
      <section className="whatis-asp">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Welcome to our ASP NET Web Development Company!</h1>
              <p>
                We are proud to be a leading ASP NET core development company,
                helping businesses develop customized solutions using the latest
                technologies and frameworks.
                <br />
                <br />
                Our ASP.NET development services cover everything from ASP.NET
                website development to enterprise-level solutions. Our team has
                extensive experience working with
                <b>ASP.NET, ASP.NET Core, MVC,</b>
                and <b>Web API technologies</b>.
                <br />
                <br />
                <em>
                  Whether you need custom development, integration, or
                  maintenance services
                </em>
                , our ASP.NET development service has got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AppDevelopmentWhy
        img="asp-mid"
        subTitle="ASP.NET App"
        title="Welcome to the Future of Web Development with Our ASP.NET Services"
        description={
          <span>
            At <b>GFS IT Solutions</b>, we are the masters of ASP.NET
            development, paving the way for your business to take the world by
            storm. Our team of experts has a wealth of experience in creating
            solutions that are not just functional but awe-inspiring. Our
            ASP.NET services offer unparalleled scalability, security, and
            efficiency, taking your business to the next level. Not only that,
            but you will also find the ultimate flexibility, customization and
            functionality in our services!
            <br />
            <br />
            So, why wait? Give us a call and let our developers define the
            success of your venture through seamless taps!
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="What You Will Find In Our ASP.NET Development Service?"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="ASP.NET Web Application Development"
        title="ASP.NET Development Service That Delivers Beyond Ordinary!"
        description={
          <span>
            Our ASP.NET web application development includes creating dynamic
            and interactive web experiences which run seamlessly across multiple
            devices and platforms. Our ASP.NET developers specialize in building
            enterprise-grade web applications. Our ASP .NET web development
            services are designed to provide
            <em>
              end-to-end solutions, from requirements gathering and design to
              development, testing, deployment, and maintenance
            </em>
            .
          </span>
        }
        img="asp-bottom"
      />
      <AppDevelopmentTypes
        headingTitle="Our Web Development Services As A Whole"
        description="Our development maestros define the future of your digital success."
        TechnologiesTypes={TechnologiesTypes} 
      />
      <Locations />
      <Footer />
    </div>
  );
};

export default AspNet;
