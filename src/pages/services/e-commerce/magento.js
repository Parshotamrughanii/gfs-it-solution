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
import RelatedServices from "../../../../components/RelatedServices";
import Head from "next/head";
const boxData = [
  {
    title: "Seamless Storefront Wizardry",
    description:
      "Our Magento ecommerce developers conjure visually stunning storefronts that enchant your customers from the moment they land on your website. With captivating designs, intuitive navigation, and immersive user experiences, our Magento website developer creates a virtual shopping realm that keeps customers spellbound.",
  },
  {
    title: "Magento Customization Services at Your Fingertips",
    description:
      "Our team of Magento wizards possesses the ability to weave together the threads of your vision, creating a customized online store that perfectly reflects your brand's unique identity. Like masterful artists, we bring your imagination to life.",
  },
  {
    title: "Magneto Consultancy",
    description:
      "Our team of Magneto consultant possesses a wealth of knowledge and experience, equipping you with the insights and strategies necessary for success. Like skilled navigators, GFS IT Solutions steer you towards the right course, ensuring your online presence aligns with your goals.",
  },
  {
    title: "Magento Website Development Services",
    description:
      "When it comes to Magento website development services, we are the artisans who bring your vision to life. Our craftsmen meticulously weave code and design, creating visually stunning and highly functional websites.",
  },
];
const relatedServiceData = [
  {
    id: 1,
    icon: "Shopify",
    title: "Shopify",
    line1: "Customized Theme",
    line2: "Community Support",
    line3: "Flexibility",
    line4: "Enhanced Security",
    path: "/services/e-commerce/shopify",
  },
  {
    id: 2,
    icon: "Magento",
    title: "Magento",
    line1: "Easy Integration",
      line2: "Customizable UI",
      line3: "Multi-language Support",
      line4: "Multi-currency Support",
      path: "/services/e-commerce/magento",
  },
  {
    id: 3,
    icon: "BigCommerce",
    title: "BigCommerce",
    line1: "SEO-friendly platform",
      line2: "Built-in marketing tools",
      line3: "Powerful API capabilities",
      line4: "Scalability",
      path: "/services/e-commerce/bigCommerce",
  },
  {
    id: 4,
    icon: "WooCommerce",
    title: "WooCommerce",
    line1: "Multi-currency Support",
    line2: "Easy Configuration",
    line3: "Built-in features & Plugins",
    line4: "Intuitive Interface",
    path: "/services/e-commerce/wooCommerce",
  },

  
];
const Magento = () => {
  return (
    <div>
    <Head>
      <title>Magento Website Development & Customization Services</title>
      <meta name="description" content="Power your online business with our Magento website development services. Scalable, feature-rich, and visually stunning solutions for e-commerce success" />
    </Head>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="magento1"
        title="Magento Website Development Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            From seamless user experiences to optimized performance, we ensure
            your Magento store stands out in the digital landscape.
          </span>
        }
      />
      <AppDevelopmentWhy
        img="magento2"
        subTitle="Magento Website Development Services"
        title="Leveraging the Power of Magento to Propel Your Business Forward!"
        description={
          <span>
            Our Magento development agency performs alchemy on your Magento
            store, optimizing it for speed, responsiveness, and flawless
            functionality. With our magical touch, we transform your store into
            high-performing Magento solutions that leave customers in awe.
            <br />
            As a dedicated Magento development services provider, we understand
            that your online store is more than just a digital shopfront. It's a
            portal to a world of possibilities where you can showcase your
            products and tell your brand story. With our expertise, our Magento
            ecommerce development company transforms your vision into reality,
            adding a touch of magic that makes your store truly stand out.
          </span>
        }
      />
      <AppDevelopmentService headingTitle="What You Will Get ?" data={boxData} />

      <AppProductDevelopment
        subTitle="Magento Website Development Services"
        title="Weaving Digital Enchantment To Bring Your E-Commerce Dreams To Life!"
        description={
          <span>
            With our Magento 2 development services, we take e-commerce to new
            heights, leveraging the latest advancements in technology and
            design. Our Magento ecommerce developers combine technical prowess
            with creative finesse to craft seamless, user-friendly websites that
            resonate with your customers. From enchanting visuals to intuitive
            navigation, our Magento ecommerce development company ensures every
            aspect of your Magento store enchants visitors and converts them
            into loyal customers.
            <br />
            <br />
            So, if you're seeking a trusted partner on your journey to
            e-commerce greatness, look no further. Our Magento development
            services will elevate your online store to new heights.
          </span>
        }
        img="magento3"
      />
    <RelatedServices data={relatedServiceData} />
      <Location />
      <Footer />
    </div>
  );
};

export default Magento;
