import React from "react";
import bannerImg from "../../../assets/images/resuable-components/uiux-inner-bg.png";
import AppDevelopmentBanner from "../../../../components/AppDevelopmentBanner";
import AppDevelopmentWhy from "../../../../components/AppDevelopmentWhy";
import AppProductDevelopment from "../../../../components/AppProductDevelopment";
import AppDevelopmentTypes from "../../../../components/AppDevelopmentTypes";
import Locations from "../../../../components/Locations";
import Footer from "../../../../components/Footer";
import AppDevelopmentService from "../../../../components/AppDevelopmentService";
import { Navbar } from "../../../../components/Navbar";
const boxData = [
  {
    title: "Unleash Your Creative Vision",
    description:
      "Whether you have a concept that needs to be brought to life or a story that needs to be told, our talented animators will transform your ideas into captivating visuals. ",
  },
  {
    title: "Unmatched Quality and Precision",
    description:
      "With attention to detail and a keen eye for aesthetics, we ensure that every frame is a masterpiece in its own right. Our animators blend technical expertise with artistic flair, resulting in visually stunning and emotionally engaging animations.",
  },
  {
    title: "Seamless Integration of 2D and 3D",
    description:
      "Whether you seek the charm and simplicity of 2D or the depth and realism of 3D, we have the skills to bring your vision to life. Our versatile animators harness the power of both mediums, ensuring that your animation resonates with your target audience.",
  },
  {
    title: "Tailored Solutions for Every Industry",
    description:
      "Our animation services cater to various industries, from entertainment and advertising to education and e-learning. With our personalized approach, we tailor our animation services to meet your specific needs, ensuring that your message is effectively conveyed and your audience is captivated.",
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
const UiAnimation = () => {
  return (
    <div>
      <Navbar />
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="ui-animation1"
        title="Animation Services That Know No Limits!"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            Our team of talented animators dares to dream big, pushing the
            boundaries of what's possible.
          </span>
        }
      />
      <AppDevelopmentWhy
        img="ui-animation1"
        subTitle="Animation Services"
        title="Immerse Yourself in the World of Animation with GFS IT Solutions."
        description={
          <span>
            Our animation services go beyond pixels and polygons; they breathe
            life into your ideas and transport your audience into extraordinary
            realms. With unmatched quality, seamless integration of 2D and 3D,
            and tailored solutions for every industry, we are the storytellers
            who will bring your vision to life.
            <br />
            <br />
            Step into animation with us and embark on a journey where
            imagination knows no limits!
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="Animations That Are a Feast for the Eyes"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="Animation Services"
        title="Captivating Animation that Speaks Volumes!"
        description={
          <span>
            At <b>GFS IT Solutions</b>, we are the storytellers who will make
            your visions dance across the screen.
            <br />
            <br />
            Like skilled puppeteers, we breathe life into characters, making
            them leap off the screen and into the hearts of your audience. We'll
            transform your wildest ideas into animated realities that leave
            viewers spellbound.
            <br />
            <br />
            From the subtlest facial expressions to the grandest landscapes, we
            infuse each frame with the utmost precision, creating visually
            stunning and emotionally resonant animations. Get in touch to get
            the best animations ever!
          </span>
        }
        img="ui-animation3"
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

export default UiAnimation;
