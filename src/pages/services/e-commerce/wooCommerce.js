import React from "react";
import AppDevelopmentBanner from "../../../../components/AppDevelopmentBanner";
import { Navbar } from "../../../../components/Navbar";
import AppDevelopmentWhy from "../../../../components/AppDevelopmentWhy";
import AppDevelopmentService from "../../../../components/AppDevelopmentService";
import AppProductDevelopment from "../../../../components/AppProductDevelopment";
import AppDevelopmentTypes from "../../../../components/AppDevelopmentTypes";
import Location from "../../../../components/Locations";
import Footer from "../../../../components/Footer";
import bannerImg from "../../../assets/images/inner-pages/mobile-app/EBackground.png";

const boxData = [
  {
    title:"title",
    description:"content"
  },
  {
    title:"title",
    description:"content"
  },
  {
    title:"title",
    description:"content"
  },
  {
    title:"title",
    description:"content"
  },
]
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
const WooCommerce = () => {
  return (
    <div>
        <Navbar/>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="woocommerce1"
        title="woo-
        commerce"
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
        img="woocommerce2"
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
            devices.<br/><br/>
            <b>So, what are you waiting for? </b> <br/>
            <br/>
            Get in touch with us. Our expert consultant will work closely with
            you to identify the best solutions that align with your business
            goals!
          </span>
        }
        img="woocommerce3"
      />
      <AppDevelopmentTypes
        headingTitle="Lorem ipsum dolor sit amet consectetur"
        description="Our team is adept at leveraging the most updated tools and technologies."
        TechnologiesTypes={TechnologiesTypes}
      />
      <Location />
      <Footer />
    </div>
  );
};

export default WooCommerce;
