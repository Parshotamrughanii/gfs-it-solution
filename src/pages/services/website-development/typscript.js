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
const TypeScriptWebDevelopment = () => {
  return (
    <div>
        <Navbar/>
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
        headingTitle="Lorem ipsum dolor sit amet consectetur"
        description="Our team is adept at leveraging the most updated tools and technologies."
        TechnologiesTypes={TechnologiesTypes}
      />
      <Locations />
      <Footer />
    </div>
  );
};

export default TypeScriptWebDevelopment;
