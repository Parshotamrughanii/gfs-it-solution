import React from "react";
import { Navbar } from "../../../../components/Navbar";
import AppDevelopmentBanner from "../../../../components/AppDevelopmentBanner";
import AppDevelopmentWhy from "../../../../components/AppDevelopmentWhy";
import AppDevelopmentService from "../../../../components/AppDevelopmentService";
import AppProductDevelopment from "../../../../components/AppProductDevelopment";
import AppDevelopmentTypes from "../../../../components/AppDevelopmentTypes";
import Locations from "../../../../components/Locations";
import Footer from "../../../../components/Footer";
import bannerImg from "../../../assets/images/resuable-components/website-bg.png";
import Head from "next/head";

const boxData = [
  {
    title: "Efficiency",
    description:
      "Efficiency is key when it comes to custom PHP web development services. We believe in writing clean, optimized code that is not only easy to maintain but also lightning-fast. With the use of the latest technologies and frameworks, our developers ensure our PHP ecommerce store development services enable your website to run smoothly and efficiently.",
  },
  {
    title: "Scalability",
    description:
      "Scalability is another essential attribute of custom PHP web development services. We understand that as your business grows, your website or web application should be able to grow with it. Hence we offer PHP ecommerce store development services with scalability in mind, so you can rest assured that your digital solution can handle any amount of traffic. ",
  },
  {
    title: "Security",
    description:
      "Security is paramount when it comes to any digital solution, and PHP development is no exception. Our custom PHP web development services provider follows industry best practices and uses the latest security measures to ensure that your website or web application is always protected from potential threats.",
  },
  {
    title: "Flexibility",
    description:
      "Flexibility is a critical attribute of PHP development. We understand that every business has unique needs and requirements, thus offering custom PHP development services to cater to your specific requirements.",
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
const PhpDevelopmentServices = () => {
  return (
    <div>
      <Head>
        <title>Professional PHP Development Services | PHP Web Development</title>
        <meta name="description" content="Looking for PHP web development services? Our team specializes in custom php e-commerce store development to enhance your business." />
      </Head>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="php-banner"
        title="PHP Web Development Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description="Unleash The Power Of The Web With Custom PHP Development Services."
      />
      <AppDevelopmentWhy
        img="php-mid"
        subTitle="PHP App"
        title="Power Up Your Web Game With PHP - The Language That Brings Your Ideas To Life!"
        description={
          <span>
            Looking for ultimate PHP web development services? Look no further
            than <b>GFS IT Solutions</b>! We are the maestros of programming,
            the wizards of PHP, and the ultimate masters of web development.
            With our cutting-edge expertise in programming, we will bring your
            ideas to life and deliver customized web solutions that will blow
            your mind. Say goodbye to mediocrity and hello to excellence – when
            you choose our custom PHP development services, you choose success!
            <br />
            <br />
            Outsource PHP web development services now to leave your customers
            in the dust.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="What Our Professional PHP Development Services Entail?"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="PHP App"
        title="Professional PHP Development Services"
        description={
          <span>
            We don't just <b>WRITE</b> code; we <b>CREATE</b> digital
            experiences that are both functional and visually stunning!
            <br />
            <br />
            Our team of PHP developers has a wide range of skills and expertise,{" "}
            <em>
              from conducting the backend infrastructure to crafting the
              frontend user experience.
            </em>
            <br />
            <br />
            Contact us today to experience the magic of PHP development
            services!
          </span>
        }
        img="php-bottom"
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

export default PhpDevelopmentServices;
