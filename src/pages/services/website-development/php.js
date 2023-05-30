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
    title: "ASP .NET",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
  },
  {
    icon: "typescript",
    title: "TypeScript                      ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
  },
  {
    icon: "python",
    title: "Python",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
  },
  {
    icon: "angular",
    title: "Angular",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
  },
];
const PhpDevelopmentServices = () => {
  return (
    <div>
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
        headingTitle="Lorem ipsum dolor sit amet consectetur"
        description="Our team is adept at leveraging the most updated tools and technologies."
        TechnologiesTypes={TechnologiesTypes}
      />
      <Locations />
      <Footer />
    </div>
  );
};

export default PhpDevelopmentServices;
