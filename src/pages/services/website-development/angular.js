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
    title: "We Are Flexible",
    description:
      "Just like a superhero, we are always ready to adapt to whatever challenges come our way. No project is too big or too small for our team of experts.",
  },
  {
    title: "We Are Reliable",
    description:
      "When you work with GFS IT Solutions, you can count on us to deliver high-quality Angular development services that meet your expectations and exceed them.",
  },
  {
    title: "We Are Communicative",
    description:
      "We believe that communication is key to a successful project, which is why our Angular consultant keeps you in the loop every step of the way.",
  },
  {
    title: "We Are Passionate",
    description:
      "We love what we do, and we are passionate about using Angular to help our clients create web applications that are both powerful and user-friendly.",
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
const AngularAplicationDevelopment = () => {
  return (
    <div>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="angular-banner"
        title="Angular Development Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            Are you looking to take your web applications to the next level?
            With Angular, you can create dynamic, responsive applications that
            are sure to <b>WOW</b> your users. And with our expert Angular
            development services, you can take full advantage of this powerful
            framework to build applications that are both functional and
            user-friendly.
            <br />
            <br />
            So whether you are a small business owner or a Fortune 500 company,
            <b> GFS IT Solutions</b> has the expertise and experience you need
            to take your web applications to the summit of success.
          </span>
        }
      />
      <AppDevelopmentWhy
        img="angular-mid"
        subTitle="Angular Development Services"
        title="What Our Angular Web Development Company Can Do For You?"
        description={
          <span>
            Our team of Angular JS development services are experts in their
            craft; they are the architects of the digital world, building
            websites that are not just visually stunning but also functionally
            rich.
            <br />
            <br />
            Our Angular web development company offers everything from{" "}
            <em>
              building custom web applications to providing maintenance and
              support for your existing websites.
            </em>{" "}
            We provide end-to-end solutions that include
            <em>
              {" "}
              UI/UX design, front-end and back-end development, API integration,
              and testing
            </em>
            .
            <br />
            <br />
            Whether you need powerful data binding, seamless integration with
            other technologies or just a little bit of Angular web application
            development magic, <b>GFS IT Solutions</b> has got you covered.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="Why Choose GFS IT Solutions When You Have So Many?"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="Angular Development Services"
        title="Time to Leave Your Customers in the Dust with Our Angular Development Services"
        description={
          <span>
            Are you tired of using outdated web applications that are slow and
            unresponsive? Look no further! Our Angular services are here to
            revolutionize your web experience. Our services include Angular 2+,
            AngularJS, and AngularJS migration. But the story doesn’t end here!
            <br />
            In today's world, mobile devices have become an essential part of
            our daily lives. Hence we offer angular mobile app development
            services, too, to ensure a seamless user experience on mobile
            devices.
            <br />
            <br />
            <b>So, what are you waiting for? </b> <br />
            <br />
            Get in touch with us. Our expert consultant will work closely with
            you to identify the best solutions that align with your business
            goals!
          </span>
        }
        img="angular-bottom"
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

export default AngularAplicationDevelopment;
