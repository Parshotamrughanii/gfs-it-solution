import React from "react";
import bannerImg from "../../../assets/images/resuable-components/uiux-inner-bg.png";
import AppDevelopmentBanner from "../../../../components/AppDevelopmentBanner";
import { Navbar } from "../../../../components/Navbar";
import AppDevelopmentWhy from "../../../../components/AppDevelopmentWhy";
import AppDevelopmentService from "../../../../components/AppDevelopmentService";
import AppProductDevelopment from "../../../../components/AppProductDevelopment";
import AppDevelopmentTypes from "../../../../components/AppDevelopmentTypes";
import Locations from "../../../../components/Locations";
import Footer from "../../../../components/Footer";

const boxData = [
  {
    title: "User-Centric Approach",
    description:
      "We delve deep into their needs, desires, and pain points, ensuring that your digital solutions resonate with their expectations. With the precision of a master navigator, we gather user feedback, conduct interviews, and employ ethnographic research techniques to understand the intricacies of their experiences.",
  },
  {
    title: "Data-Driven Decision-Making",
    description:
      "Harnessing the power of data is an integral part of our UX research services. We meticulously collect and analyze user data, transforming raw information into actionable insights. We, armed with an analytical prowess, uncover patterns, identifies trends, and pinpoints areas for improvement. This allows us to make informed decisions that drive user satisfaction and business growth.",
  },
  {
    title: "Seamless User Journey",
    description:
      "Creating a seamless user journey is paramount in the digital realm, and our UX research services excel in this aspect. We meticulously map out the user flow, identifying pain points, friction, and opportunities for optimization. ",
  },
  {
    title: "Empathy-Infused Design",
    description:
      "We put ourselves in the shoes of your users, understanding their motivations, emotions, and goals. This allows us to design experiences that resonate on a deeper level, forging an emotional connection between your brand and your audience. ",
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
const UXResearch = () => {
  return (
    <div>
      <Navbar />
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="ux-reseach1"
        title="UX Research Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            <b>Unveiling the Path to User Delight</b>
          </span>
        }
      />
      <AppDevelopmentWhy
        img="ux-reseach2"
        subTitle="UX Research Services"
        title="Decoding User Experience: Navigating the Depths of User Insights"
        description={
          <span>
            By choosing <b>GFS IT Solutions</b> for your UX research needs, you
            embark on a transformative journey where user-centricity and
            data-driven decision-making converge. Let our expert researchers be
            your trusted guides as we navigate the intricacies of user behavior,
            unveiling the path to enhanced user satisfaction and business
            success.
            <br />
            <br />
            Embrace the power of UX research and watch your digital experiences
            soar to new heights. Together, we'll chart a course that leads to
            unrivaled user engagement and unraveled business opportunities.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="From Insights to Innovation: Revolutionize Your Digital Experiences"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="UX Research Services"
        title="In the Mind of Your Users: The Power of UX Research"
        description={
          <span>
            At <b>GFS IT Solutions</b>, our UX research services are designed to
            uncover invaluable insights that will revolutionize your digital
            presence. Join us as we navigate the depths of human behavior, and
            let the magic of UX research guide your path to success.
          </span>
        }
        img="ux-reseach3"
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

export default UXResearch;
