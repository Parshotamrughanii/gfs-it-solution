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
    title: "Holistic Brand Development",
    description:
      "Our brand strategy services embrace a holistic approach to ensure that every aspect of your brand aligns harmoniously. We dive deep into understanding your business, target audience, and market dynamics. We aim to build a cohesive brand identity that leaves a lasting impression.",
  },
  {
    title: "Differentiation and Market Positioning",
    description:
      "Our brand strategy services focus on differentiating your brand and carving a unique position in the market. We conduct thorough market research, analyze consumer insights, and identify opportunities for distinctiveness. ",
  },
  {
    title: "Consistency and Coherence",
    description:
      "Our brand strategy services emphasize the importance of maintaining a coherent brand presence across all touch points. We provide guidelines and frameworks to ensure consistent messaging, visual identity, and brand voice. ",
  },
  {
    title: "Strategic Growth and Adaptability",
    description:
      "We assist you in crafting a roadmap for your brand's future, identifying growth opportunities and potential challenges. Our agile approach allows your brand to evolve and adapt to changing market dynamics while staying true to its core values.",
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
const BrandStrategy = () => {
  return (
    <div>
      <Navbar />
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="brand-strategy1"
        title="Brand Strategy Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            <b>Crafting Your Path to Brand Brilliance</b>
          </span>
        }
      />
      <AppDevelopmentWhy
        img="brand-strategy2"
        subTitle="Brand Strategy Services"
        title="Brand Strategy Services That Transform You From Nowhere To Everywhere!"
        description={
          <span>
            At <b>GFS IT Solutions</b>, our brand strategy services are designed
            to ignite the essence of your brand, aligning it with your business
            goals and forging a unique identity that leaves your customers in
            the dust.
            <br />
            <br />
            Let us be your trusted compass as we navigate the vast landscape of
            brand strategy together.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="You Get A Lot In Just A Few!"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="Brand Strategy Services"
        title="Ignite Your Brand's Potential: Unleash the Power of Strategic Brilliance"
        description={
          <span>
            Partnering with <b>GFS IT Solutions</b> for your brand strategy
            needs means embarking on a transformative journey where strategic
            thinking, creativity, and human touch converge. Together, we'll
            shape a brand that inspires, resonates, and leaves an indelible mark
            in the hearts of your customers.
            <br />
            <br />
            Get in touch with us to embrace the power of our brand strategy
            services and watch your brand soar to new heights.
          </span>
        }
        img="brand-strategy3"
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

export default BrandStrategy;
