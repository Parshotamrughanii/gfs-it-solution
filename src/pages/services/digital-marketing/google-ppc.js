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


const boxData = [
  {
    title: "PPC Competitor Analysis",
    description:
      "We understand that competition in the digital space is fierce. Hence, we offer PPC Competitive Analysis to help you stay ahead of the game. Our PPC marketing consultants will analyze your competitors' strategies and create a custom PPC campaign to beat the competition.",
  },
  {
    title: "Ecommerce PPC Services",
    description: (
      <span>
        <b>GFS IT Solutions </b> also specializes in Ecommerce PPC Services.
        Whether you are just starting out or looking to expand your online
        business, we can help you drive more <b>TRAFFIC</b> and increase your
        <b> CONVERSIONS</b>. Our PPC services agency offers a wide range of
        services that are tailored to your specific needs."
      </span>
    ),
  },
  {
    title: "Display Ads Management Services",
    description:
      "As a leading Pay Per Click marketing agency, we understand the importance of Display Ads Management Services. Our team of experts create compelling display ads that will get your business noticed. With our Pay Per Click services, you can rest assured that you're getting the best possible results for your advertising budget.",
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
const GooglePpc = () => {
  return (
    <div>
        <Navbar/>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="googleppc1"
        title="PPC Campaign Management Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={<span>Ads That Count, Clicks That Convert!</span>}
      />
      <AppDevelopmentWhy
        img="googleppc2"
        subTitle="PPC Campaign Management Services"
        title="Drive TRAFFIC, CONVERT Customers: Unleash The Power Of PPC With Our PPC Services Agency!"
        description={
          <span>
            Don't leave your PPC campaign to chance. Partner with our expert PPC
            services agency today and watch your business thrive. Contact us to
            schedule a consultation with our PPC consultant and learn how our
            PPC consultancy can help take your business to the next level.
            <br />
            <br />
            As experienced PPC consultants, we know that effective PPC
            management is more than just setting up a campaign and letting it
            run. It requires constant monitoring and optimization to ensure your
            ads are reaching the right audience at the right time. That's where
            our PPC management firm comes in. We provide ongoing support in
            Google adwords management services to ensure your campaigns are
            always performing at their best.
            <br />
            <br />
            Contact our PPC consultant today to learn more about our services
            and how we can help you achieve your goals.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="Why Choose GFS IT Solutions When You Have So Many?"
        data={boxData}
        slidesToShow={3}
      />

      <AppProductDevelopment
        subTitle="Adwords Management Services"
        title="PPC Campaign Management Services - Get The Best Possible Results For Your Advertising Efforts!"
        description={
          <span>
            Our Google AdWords Management Services are designed to help you
            maximize your ROI. With our PPC Marketing Consultants, you can rest
            assured that your campaigns are in good hands. <b>GFS IT Solutions</b> will
            work closely with you to ensure that your campaigns are optimized
            for success.
            <br />
            <br />
            Our PPC marketing services include everything from <em>Keyword Research
            and Ad Copywriting to Conversion Rate Optimization and Landing Page
            Design</em>.
            <br />
            <br />
            At our PPC management firm, we are committed to helping your
            business succeed. As a leading PPC marketing services agency, we
            know that every click counts. So, what are you waiting for? Give us
            a call, and let us help you spend your hard-earned money sensibly.
          </span>
        }
        img="googleppc3"
      />
      <RelatedServices data={relatedServiceData} />
      <Locations />
      <Footer />
    </div>
  );
};

export default GooglePpc;
