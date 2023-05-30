/* eslint-disable */
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
    title: "Faster Development Times",
    description:
      "Laravel is designed to make web development faster and more efficient. It has a variety of features that automate common tasks, which means that the Laravel development company can spend more time working on the core functionality of the web application.",
  },
  {
    title: "Increased Security",
    description:
      "Laravel is designed with security in mind. It has a variety of built-in security features, such as protection against SQL injection and cross-site scripting (XSS) attacks. This means you can be confident that your web application is secure and your data is protected.",
  },
  {
    title: "Increased Scalability",
    description:
      "Laravel is designed to be scalable, which means that it can handle a large number of users and data. This scalability makes it an ideal framework for building web applications that need to handle a high volume of traffic.",
  },
  {
    title: "Responsive Design",
    description:
      "Laravel has built-in functionality for creating responsive web applications that look great on any device. This means that your web application will look great on desktops, laptops, tablets, and smartphones.",
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
const LaravelDevelopment = () => {
  return (
    <div>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="laravel-banner"
        title="Laravel Development Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description="Custom Laravel Development: A Symphony of Innovation and Creativity

        "
      />
      <AppDevelopmentWhy
        img="laravel-mid"
        subTitle="Laravel Development Services"
        title="Why Laravel Is The Future Of Web Development?"
        description={
          <span>
            One thing that sets custom Laravel development apart from other PHP
            frameworks is its elegant syntax. It's easy to read, write, and
            maintain, which makes it an ideal framework for building web
            applications. This elegant syntax also makes it easy for the Laravel
            framework development company to learn and use, which leads to
            faster Laravel eCommerce development times and more efficient code.
            <br />
            <br />
            Laravel is designed to be modular, which means that it's easy to add
            new functionality to your web application without affecting the
            existing code. This modularity also makes it easy to scale your
            application as your needs change.
            <br />
            <br />
            However, Laravel web development services are not everyone’s cup of
            tea. However, for <b>GFS IT Solutions</b>, it is just a piece of
            cake!
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="Why Do You Need To Invest In Laravel Web Development Services?"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="Laravel Development Services"
        title="Laravel Development Services: Paving the Way for Digital Transformation!"
        description={
          <span>
            Welcome to the world of Laravel web development in USA, where the
            power of PHP and the elegance of syntax converge to create web
            applications that are <b>FAST, ROBUST</b>, and <b>SCALABLE</b>. At
            our best Laravel development company, we specialize in Laravel
            Development and have a team of experienced developers who are
            experts in this framework. <b>What will you get here?</b>
            <br />
            <br />
            
              <b>
                <em>• Laravel Web Development</em> <br/>
                <em>• Laravel E-commerce Development</em> <br/>
                <em>• Laravel Customization</em> <br/>
                <em>• Laravel API Development</em> <br/>
                <em>• And More!</em> <br/><br/>
              </b>
          
            So, what are you waiting for? Kick-start on the journey to getting a
            seamless web experience!
          </span>
        }
        img="laravel-bottom"
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

export default LaravelDevelopment;
