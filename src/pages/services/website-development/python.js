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
    title: "Python Web Development Services",
    description:
      "Our team of expert developers can create customized web applications using the Django and Flask frameworks. We are the ideal solution when it comes to Python custom development. ",
  },
  {
    title: "Machine Learning ",
    description:
      "We offer custom machine-learning solutions using popular libraries like TensorFlow and PyTorch. Hire remote Python developers to get your customized AI experience!",
  },
  {
    title: "Data Analysis",
    description:
      "Our team can provide data analysis solutions using the popular pandas and NumPy libraries.",
  },
  {
    title: "Custom Solutions",
    description:
      "We offer customized solutions using Python's core framework as well as its various libraries and modules. ",
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
const PythonWebDevelopmentServices = () => {
  return (
    <div>
        <Navbar/>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="python-banner"
        title="Python Development Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description="Unleash the Power of Python and Ignite Your Digital World!"
      />
      <AppDevelopmentWhy
        img="python-mid"
        subTitle="Android App"
        title="Python Web Development Services: The Way To Your SUCCESS!"
        description={
          <span>
            Python is not just a language; it's a way of life. With its
            easy-to-learn syntax and robust framework, Python is becoming the
            go-to language for developers across the globe.
            <br />
            <br />
            Python's versatility makes it an ideal choice for various projects,
            <em> from web development to data analytics and beyond</em>. Whether
            you're looking to build a web application, create a machine learning
            model or analyze data, outsource Python development services now.
            <br />
            <br />
            Our Python developers are skilled in multiple frameworks, including
            <b> Django, Flask</b>, and <b>Pyramid</b>, among others. With our
            Python development services, you can transform your business into a
            lean, mean, Python-powered machine. So, what are you waiting for?
            Hire Python developers, and let's get started today!
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="What Our Services Entail in Python Development"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="Outsource Python Development Services"
        title="Hire Python Developers"
        description={
          <span>
            At our Python software development services company, we believe in
            delivering excellence with every project we undertake. Our team of
            skilled developers, equipped with years of experience, have helped
            us establish a reputation as a leading provider of Python-based
            solutions. From Python custom development to building AI
            applications, our affordable Python development services have got
            you covered.
            <br />
            <br />
            Hire Python web developers who understand your requirements and
            deliver quality solutions within the agreed timeline. And when we
            say that, we mean <b>GFS IT Solutions</b>.
            <br />
            <br />
            Our Python web development services team uses the latest tools and
            techniques and follows an agile development approach to ensure your
            project is developed to the highest standards.
          </span>
        }
        img="python-bottom"
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

export default PythonWebDevelopmentServices;
