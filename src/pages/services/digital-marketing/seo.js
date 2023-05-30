import React from "react";
import bannerImg from "../../../assets/images/inner-pages/mobile-app/digital-marketing-bg.png";
import { Navbar } from "../../../../components/Navbar";
import AppDevelopmentBanner from "../../../../components/AppDevelopmentBanner";
import AppDevelopmentWhy from "../../../../components/AppDevelopmentWhy";
import AppDevelopmentService from "../../../../components/AppDevelopmentService";
import AppProductDevelopment from "../../../../components/AppProductDevelopment";
import RelatedServices from "../../../../components/RelatedServices";
import Locations from "../../../../components/Locations";
import Footer from "../../../../components/Footer";
const boxdata = [
  {
    title: "Affordable Local Search Engine Optimization Services",
    description:
      "Our local SEO services are designed to help small businesses improve their visibility in their local market and attract more customers.",
  },
  {
    title: "On Page SEO Services",
    description: (
      <>
        <span>
          Our On page SEO services ensure that your website is optimized for the
          search engines, including{" "}
          <em>keyword research, Meta tags, and content optimization</em>."
        </span>
      </>
    ),
  },
  {
    title: "Keyword Research Service",
    description:
      "Our keyword research services help you identify the best keywords to target for your business, increasing your chances of ranking higher in search results.",
  },
  {
    title: "Affordable SEO Audit Services",
    description:
      "Our affordable SEO audit services provide a comprehensive analysis of your website's SEO performance, identifying areas for improvement and making recommendations for optimization.",
  },
  {
    title: "Free SEO Consultation Services",
    description:
      "We offer free SEO consultation services to help you understand your website's current SEO status and provide advice on how to improve it.",
  },
  {
    title: "GMB Optimization Service",
    description:
      "Our Google My Business optimization service helps you maximize your local search visibility by optimizing your GMB profile.",
  },
  {
    title: "Nationwide SEO Service",
    description:
      "Our nationwide SEO service is designed to help businesses of all shapes and sizes improve their online visibility and reach a national audience.",
  },
  {
    title: "App Store Optimization Service",
    description:
      "Our app store optimization service helps your mobile app rank higher in the app store search results, increasing your visibility and downloads.",
  },
  {
    title: "Content Optimization Service",
    description: (
      <span>
        Our content optimization service ensures that your website's content is
        optimized for the search engines, including
        <em> keyword research and optimization and content structure</em>.
      </span>
    ),
  },
];
const relatedServiceData = [
  {
    id: 1,
    icon: "googleppc",
    title: "Google PPC",
    line1: "Improved Customer Retention",
    line2: "Enhanced Sales",
    line3: "Higher Profitability",
    line4: "Brand Loyalty",
    path: "/services/digital-marketing/google-ppc",
  },
  {
    id: 2,
    icon: "seo",
    title: "SEO",
    line1: "Improved Customer Retention",
    line2: "Enhanced Sales",
    line3: "Higher Profitability",
    line4: "Brand Loyalty",
    path: "/services/digital-marketing/seo",
  },
  {
    id: 3,
    icon: "email-marketing",
    title: "E-mail Marketing",
    line1: "Improved Customer Retention",
    line2: "Enhanced Sales",
    line3: "Higher Profitability",
    line4: "Brand Loyalty",
    path: "/services/digital-marketing/email-marketing",
  },
  {
    id: 4,
    icon: "mobile-marketing",
    title: "Mobile Marketing",
    line1: "Improved Customer Retention",
    line2: "Enhanced Sales",
    line3: "Higher Profitability",
    line4: "Brand Loyalty",
    path: "/services/digital-marketing/mobile-marketing",
  },
  {
    id: 5,
    icon: "content-marketing",
    title: "Content Marketing",
    line1: "Improved Customer Retention",
    line2: "Enhanced Sales",
    line3: "Higher Profitability",
    line4: "Brand Loyalty",
    path: "/services/digital-marketing/content-marketing",
  },
  {
    id: 6,
    icon: "marketing-analytics",
    title: "Marketing Analytics",
    line1: "Improved Customer Retention",
    line2: "Enhanced Sales",
    line3: "Higher Profitability",
    line4: "Brand Loyalty",
    path: "/services/digital-marketing/marketing-analytics",
  },
  {
    id: 7,
    icon: "affiliate-marketing",
    title: "Affiliate Marketing",
    line1: "Improved Customer Retention",
    line2: "Enhanced Sales",
    line3: "Higher Profitability",
    line4: "Brand Loyalty",
    path: "/services/digital-marketing/affiliate-marketing",
  },
];
const Seo = () => {
  return (
    <div>
        <Navbar/>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="seo1"
        title="Affordable Search Engine Ranking"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            Don’t Let Your Competition Outrank You; Let Us Rank You Higher On
            SERPs and Make You Google’s Favorite Pick!
          </span>
        }
      />
      <AppDevelopmentWhy
        img="seo2"
        subTitle="Seo"
        title="Hire SEO Expert Services To Dominate Search Engine Rankings!"
        description={
          <span>
            Are you looking for a reliable and affordable search engine
            optimization services agency to help you rank higher in search
            engine results pages (SERPs)? Look no further! Our team of SEO
            experts is here to help you improve your online visibility and grow
            your business.
            <br />
            <br />
            Our On-page and expert Off page SEO services are designed to help
            you dominate search engine rankings and drive traffic to your
            website like a stampede. With our expert team and personalized
            strategies, we'll take your website to the top of the SERPs and make
            your business a force to be reckoned with!
            <br />
            <br />
            <b> Experience the Power of SEO Done Right with Us Now!</b>
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="From Keyword Research to Link Building, We Have Got You Covered "
        data={boxdata}
      />

      <AppProductDevelopment
        subTitle="Seo"
        title="Don't Settle for Mediocre SEO – Partner with the Best and Watch Your Business Thrive"
        description={
          <span>
            Our affordable SEO audit services provider offers a detailed report
            of your website's SEO performance to help you get ahead of your
            competition. We don't just give you the report and leave you to
            figure it out; we work with you to implement the changes and monitor
            the progress.
            <br />
            <br />
            Our approach to SEO is not just about getting more clicks or higher
            rankings; it's about making a lasting impact on your business. Not
            to mention, when it comes to Google optimization services, we know
            the ins and outs of how the search engine algorithm works.
            <br />
            <br />
            At <b>GFS IT Solutions</b>, we don't just talk the talk; we walk the walk.
            So, what are you waiting for? Get the best Google optimization
            services now, and let us help you take the first step towards
            success. After all, a journey of a thousand miles begins with a
            single step, and we're here to take that first step with you.
          </span>
        }
        img="seo3"
      />
      <RelatedServices data={relatedServiceData} />
      <Locations />
      <Footer />
    </div>
  );
};

export default Seo;
