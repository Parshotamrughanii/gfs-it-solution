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
    title: "Tailored Solutions for Your Business Needs",
    description:
      "At GFS IT Solutions, we understand that every business is unique, and that's why we offer custom WooCommerce development services. We take the time to listen to your requirements, analyze your target audience, and develop tailored solutions that align perfectly with your brand identity. ",
  },
  {
    title: "Custom WooCommerce Development Services",
    description:
      "Our WooCommerce developers are adept at utilizing the power of WooCommerce to its fullest potential, creating a robust and scalable online store that can handle your business growth. Their expertise will ensure that your WooCommerce website development is seamless, efficient, and visually appealing.",
  },
  {
    title: "WooCommerce Custom Plugin Development Expertise",
    description:
      "Our skilled WooCommerce plugin developer can create custom plugins that enhance the capabilities of your store, providing a seamless user experience and empowering you with unique features to stay ahead in the competitive market.",
  },
  {
    title: "WooCommerce Website Design",
    description:
      "When it comes to WooCommerce website design, we don't believe in cookie-cutter templates. We believe your brand deserves a one-of-a-kind digital presence that reflects your personality and resonates with your target audience. ",
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
const WooCommerce = () => {
  return (
    <div>
      <Navbar />
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="woocommerce1"
        title="WooCommerce Development Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            <b>
              We Go Beyond Aesthetics and Prioritize Conversion Optimization!
            </b>
          </span>
        }
      />
      <AppDevelopmentWhy
        img="woocommerce2"
        subTitle="WooCommerce Development Services"
        title="Custom WooCommerce Development Services To Make Your Online Store Function Flawlessly!"
        description={
          <span>
            As a leading WooCommerce development company, we offer expert
            WooCommerce development services that go beyond the ordinary. Our
            team of experienced developers possesses in-depth knowledge and
            technical expertise to create a seamless and engaging shopping
            experience for your customers. From custom plugin development to
            WooCommerce website design, we are here to turn your vision into
            reality.
            <br />
            <br />
            Let your website become a visual symphony that tells your unique
            story and enchants your audience. Contact <b>
              GFS IT Solutions
            </b>{" "}
            today and embark on a transformative design journey that sets you
            apart from the crowd.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="Hire WooCommerce Developers to Cash in On the Ecommerce Basket Full Of Fruits"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="WooCommerce Development Services"
        title="Ecommerce Solutions to Set Your Business Apart From the Competition!"
        description={
          <span>
            At <b>GFS IT Solutions</b>, our WooCommerce web developers are more
            than just a development firm; our WooCommerce development company is
            your strategic partner in achieving e-commerce success. Our
            commitment to excellence, personalized solutions, and skilled
            professionals sets us apart.
            <br />
            <br />
            Experience the transformative power of our WooCommerce development
            services and witness your online store thrive like never before.
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
