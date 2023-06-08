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
    title: "BigCommerce Integration Services",
    description:
      "One of the standout characteristics of our BigCommerce services is the seamless integration and customization options we offer. We understand that your brand identity is as unique as a fingerprint, which is why we provide tailor-made solutions that reflect your vision and values. ",
  },
  {
    title: "Unrivaled Performance and Scalability",
    description:
      "A distinguishing feature of our BigCommerce store development services is our unmatched performance and scalability. We build robust and future-proof solutions that can handle heavy traffic, ensuring a smooth shopping experience for your customers, even during peak seasons. ",
  },
  {
    title: "Conversion-Driven Strategies",
    description:
      "When you choose our BigCommerce services, you unlock a world of conversion-driven strategies that maximize your online success. Our BigCommerce development experts employ cutting-edge techniques, such as optimizing product pages, implementing persuasive call-to-actions, and streamlining the checkout process, to transform your visitors into loyal customers.",
  },
  {
    title: "BigCommerce Development Support",
    description:
      "Our team of BigCommerce aficionados is here to provide top-notch support and guidance, holding your hand every step. GFS IT Solutions be your trusty co-pilot, navigating the complexities of BigCommerce development to ensure your online store soars to new heights.",
  },
  {
    title: "BigCommerce Search Engine Optimization",
    description:
      "Unlock the secret to conquering the digital realm with our BigCommerce SEO expertise. We will sprinkle the magic of optimization on your website, ensuring it stands out like a shining star in the vast galaxy of search engine results. Watch as your rankings shoot to the moon and your organic traffic skyrockets.",
  },
  {
    title: "BigCommerce Design and Development",
    description:
      "With our BigCommerce design and development prowess, we craft visually stunning and user-friendly websites that are as inviting as a cozy café. Let our BigCommerce design and development agency be your artistic collaborators, transforming your ideas into a virtual masterpiece that captivates your visitors.",
  },
  {
    title: "BigCommerce App Development",
    description:
      "Expand the capabilities of your BigCommerce store with our bespoke app development solutions. Our talented developers conjure up apps that enhance functionality, streamline processes, and boost customer engagement. ",
  },
  {
    title: "BigCommerce Web Development Services",
    description:
      "Your online store is our canvas, and we wield the brush of web development to create a masterpiece. With our BigCommerce web development services, we sculpt websites as dynamic as a chameleon, adapting to your business needs and ensuring seamless user experiences. ",
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
const BigCommerce = () => {
  return (
    <div>
      <Navbar />
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="bigcommerce1"
        title="BigCommerce Development Services "
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            BigCommerce Consultant Agency: Powering Your E-commerce Empire with
            Unstoppable Force
          </span>
        }
      />
      <AppDevelopmentWhy
        img="bigcommerce2"
        subTitle="BigCommerce Development Services "
        title="Building Your Digital Empire!"
        description={
          <span>
            Our BigCommerce services empower you to build a digital empire that
            stands tall amidst the competition. Say goodbye to cookie-cutter
            templates and hello to a unique and captivating shopping experience.
            <br />
            <br />
            Prepare to dazzle your visitors with an intuitive interface and
            captivating visuals.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="What Do We Bring To The Table?"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="BigCommerce Development Services "
        title="Leading BigCommerce Design And Development Agency For Businesses Like Yours!"
        description={
          <span>
            In the dynamic world of e-commerce, BigCommerce services from GFS IT
            Solutions stand as a beacon of excellence. With seamless
            integration, customization options, unrivaled performance, and
            conversion-driven strategies, our BigCommerce development services
            are your business's secret weapon to conquer the online realm.
            <br />
            <br />
            We are not just another agency; we are your BigCommerce development
            services providers. With a touch of artistry and a dash of technical
            expertise, our BigCommerce web design company crafts.
            <br />
            Let us be the catalyst for your e-commerce triumph.
          </span>
        }
        img="bigcommerce3"
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

export default BigCommerce;
