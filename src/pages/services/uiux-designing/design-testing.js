import React from "react";

import bannerImg from "../../../assets/images/resuable-components/uiux-inner-bg.png";
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
    title: "Rigorous Usability Testing Services",
    description:
      "We subject your designs to rigorous usability testing services, simulating real-world scenarios and gathering invaluable feedback from actual users. It's like putting your design through its paces, ensuring that it not only looks great but also functions flawlessly.",
  },
  {
    title: "Comprehensive Compatibility Testing",
    description:
      "Your design should shine across different devices, browsers, and platforms. Our design testing services encompass comprehensive compatibility testing, ensuring your creations adapt seamlessly to various environments. ",
  },
  {
    title: "Objective Evaluation and Insights",
    description:
      "Our team of experts provides objective evaluations and insightful feedback on your design. We offer a fresh perspective, identifying strengths, weaknesses, and areas for improvement. It's like having a trusted advisor by your side, guiding you towards design excellence.",
  },
  {
    title: "Iterative Improvement Process",
    description:
      "We believe in the power of iteration in UI UX testing. Through continuous testing and improvement cycles, we help you refine your design, making it better with each iteration. It's like a sculptor chiseling away at imperfections, gradually revealing the masterpiece within.",
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
const DesignTesting = () => {
  return (
    <div>
      <Navbar />
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="design-testing1"
        title="Design Testing Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            Welcome to the realm of interface testing, where creativity meets
            scrutiny and innovation is put to the ultimate test!
          </span>
        }
      />
      <AppDevelopmentWhy
        img="design-testing2"
        subTitle="Design Testing Services"
        title="We Navigate The Ever-Evolving Landscape Of Digital Design!"
        description={
          <span>
            At <b>GFS IT Solutions</b>, we are not your ordinary design testing
            services provider. We are the gatekeepers of excellence, the
            guardians of impeccable user interface testing. Our team of
            passionate experts, armed with a keen eye and a passion for
            perfection, are here to put your creations through the wringer.
            <br />
            <br />
            When it comes to mobile user interface testing, our experienced
            testers put themselves in the shoes of your users, examining every
            aspect of the interface to ensure seamless navigation and
            interaction. In our user interface testing for mobile applications
            services, we leave no pixel untested, guaranteeing that your mobile
            application performs flawlessly on various devices and screen sizes.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="Our UI UX Testing Services Offer You A Myriad Of Benefits"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="Design Testing Services"
        title="Going Above And Beyond To Mobile User Interface Testing!"
        description={
          <span>
            Design is not just about aesthetics; it's about delivering an
            unparalleled user experience. Our user interface testing services
            delve deep into the psyche of your users, deciphering their needs,
            wants, and desires. Our UI UX testing providers leave no stone
            unturned in our quest to uncover the hidden gems and eliminate any
            stumbling blocks hindering user satisfaction.
            <br />
            <br />
            In our mobile user experience testing, our goal is to understand
            your users' journey from the moment they launch your app to the
            final action they take. We scrutinize every touchpoint, evaluating
            the responsiveness, intuitiveness, and overall satisfaction with
            user interface testing for mobile applications.
          </span>
        }
        img="design-testing3"
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

export default DesignTesting;
