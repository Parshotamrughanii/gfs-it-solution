import React from "react";
import { Navbar } from "../../../../components/Navbar";
import AppDevelopmentBanner from "../../../../components/AppDevelopmentBanner";
import AppDevelopmentWhy from "../../../../components/AppDevelopmentWhy";
import AppDevelopmentService from "../../../../components/AppDevelopmentService";
import AppProductDevelopment from "../../../../components/AppProductDevelopment";
import RelatedServices from "../../../../components/RelatedServices";
import Locations from "../../../../components/Locations";
import Footer from "../../../../components/Footer";
import bannerImg from "../../../assets/images/inner-pages/mobile-app/digital-marketing-bg.png";

const boxData = [
  {
    title: "",
    description:""
  },
];
const relatedServiceData = [
  {
    id: 1,
    icon: "googleppc",
    title: "Google PPC",
    line1: "Cost-effective",
    line2: "Track able",
    line3: "Instant Traffic",
    line4: "More Leads",
    path: "/services/digital-marketing/google-ppc",
  },
  {
    id: 2,
    icon: "seo",
    title: "SEO",
    line1: "Link Analysis",
    line2: "URL optimization",
    line3: "Brand Awareness",
    line4: "Track able",
    path: "/services/digital-marketing/seo",
  },
  {
    id: 3,
    icon: "email-marketing",
    title: "E-mail Marketing",
    line1: "More revenue",
    line2: "Increase organic traffic",
    line3: "Cost-effective",
    line4: "Higher Credibility",
    path: "/services/digital-marketing/email-marketing",
  },
  {
    id: 4,
    icon: "mobile-marketing",
    title: "Mobile Marketing",
    line1: "Target Global audience",
    line2: "Higher Profitability",
    line3: "Customer Analytics",
    line4: "Reduced Costs",
    path: "/services/digital-marketing/mobile-marketing",
  },
  {
    id: 5,
    icon: "content-marketing",
    title: "Content Marketing",
    line1: "Customer Persona",
    line2: "SEO Optimization",
    line3: "More Impressions",
    line4: "Increased Revenues",
    path: "/services/digital-marketing/content-marketing",
  },

  {
    id: 6,
    icon: "affiliate-marketing",
    title: "Affiliate Marketing",
    line1: "Effective Tracking",
    line2: "Affiliate Marketplace",
    line3: "Highly Secure",
    line4: "Cost-effective",
    path: "/services/digital-marketing/affiliate-marketing",
  },
];
const MarketingAnalytics = () => {
  return (
    <div>
        <Navbar/>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="marketinganalytics1"
        title="Marketing Analytics"
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
        img="marketinganalytics2"
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
            devices.
            <br />
            <br />
            <b>So, what are you waiting for? </b> <br />
            <br />
            Get in touch with us. Our expert consultant will work closely with
            you to identify the best solutions that align with your business
            goals!
          </span>
        }
        img="marketinganalytics3"
      />
      <RelatedServices data={relatedServiceData} />
      <Locations />
      <Footer />
    </div>
  );
};

export default MarketingAnalytics;
