import React from "react";
import bannerImg from "../../../assets/images/resuable-components/website-bg.png";
import { Navbar } from "../../../../components/Navbar";
import AppDevelopmentBanner from "../../../../components/AppDevelopmentBanner";
import AppDevelopmentWhy from "../../../../components/AppDevelopmentWhy";
import AppDevelopmentService from "../../../../components/AppDevelopmentService";
import AppProductDevelopment from "../../../../components/AppProductDevelopment";
import AppDevelopmentTypes from "../../../../components/AppDevelopmentTypes";
import Locations from "../../../../components/Locations";
import Footer from "../../../../components/Footer";
import Head from "next/head";

const boxData = [
  {
    title: "Customized Solutions",
    description:
      "We offer fully customized Typescript development services tailored to your unique business needs. Our team of experts will work with you to understand your requirements and develop a solution that meets your specific goals.",
  },
  {
    title: "High-Quality Code",
    description:
      "We believe in delivering high-quality code that is both efficient and effective. Our developers use industry best practices and follow strict coding standards to ensure your project is completed on time and within budget.",
  },
  {
    title: "Ongoing Support",
    description:
      "Our services don't end with project completion. We provide ongoing support and maintenance to ensure that your solution continues to meet your business needs and stays up-to-date with the latest technologies.",
  },
  {
    title: "Everything Is Possible For Us!",
    description:
      "From gamifying the development process to creating interactive user interfaces, our team is always up for a challenge and ready to push the boundaries of what's possible with TypeScript.",
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
const TypeScriptWebDevelopment = () => {
  return (
    <div>
     <Head>
      <title>Hire TypeScript Developer | Typescript Full Stack Developer</title>
      <meta name="description" content="Looking to hire TypeScript developers? Our typescript full stack developers bring expertise in TypeScript development, ensuring the success of your projects." />
     </Head>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="ts-banner"
        title="TypeScript Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description="Development That Helps Your Brand Steal The Limelight!"
      />
      <AppDevelopmentWhy
        img="ts-mid"
        subTitle="Android App"
        title="Why Should You Go For TypeScript Development?"
        description={
          <span>
            <b>Safer and More Secure Code </b>
            <br />
            Typescript is a superset of JavaScript that adds static typing to
            the language. This means that TypeScript developers can catch errors
            at compile-time rather than run-time, resulting in safer and more
            secure code.
            <br />
            <br />
            <b>Better Scalability</b>
            <br />
            Typescript is designed with scalability in mind. Its strong type
            system and object-oriented features allow the TypeScript full stack
            developer to write maintainable and scalable code that can grow with
            your business.
            <br />
            <br />
            <b>Improved Productivity</b>
            <br />
            Hire TypeScript developer to write cleaner and more organized code.
            This way you can enter the market earlier since TypeScript, less
            time and effort is required for debugging and maintenance. This
            results in faster development cycles and improved productivity.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="Hire Typescript Developer To Enjoy The Best Development Experience"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="Typescript Services"
        title="Hire Our TypeScript Full Stack Developer Who Knows All The Tricks Of The Trade!"
        description={
          <span>
            If you're looking for a way to make your software development
            projects faster, more reliable, and more enjoyable, TypeScript is
            the way to go. With its innovative features and enhanced
            functionality, TypeScript is taking the programming world by storm,
            and our TypeScript developer for hire is here to help you take
            advantage of it.
            <br />
            <br />
            Whether you need to build a new software application from scratch or
            want to optimize your existing codebase, hire TypeScript developer
            to make it happen!
          </span>
        }
        img="ts-bottom"
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

export default TypeScriptWebDevelopment;
