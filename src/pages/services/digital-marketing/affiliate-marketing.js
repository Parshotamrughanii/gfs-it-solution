import React from "react";
import { Navbar } from "../../../../components/Navbar";
import AppDevelopmentBanner from "../../../../components/AppDevelopmentBanner";
import AppDevelopmentWhy from "../../../../components/AppDevelopmentWhy";
import AppDevelopmentService from "../../../../components/AppDevelopmentService";
import AppProductDevelopment from "../../../../components/AppProductDevelopment";
import RelatedServices from "../../../../components/RelatedServices";
import Location from "../../../../components/Locations";
import Footer from "../../../../components/Footer";
import bannerImg from "../../../assets/images/inner-pages/mobile-app/digital-marketing-bg.png";

const boxData = [
  {
    title: "Exponential Reach ",
    description: (
      <>
        Unleash your brand's true potential by tapping into an extensive network
        of affiliate partners. By joining forces with influencers, bloggers, and
        content creators, <b>GFS IT Solutions</b> help your brand gain exposure
        to your loyal audience.
      </>
    ),
  },
  {
    title: "Boosted Sales ",
    description:
      "Through strategic partnerships, we help you tap into a vast pool of motivated affiliates who promote your products or services, driving high-quality traffic and increasing your chances of converting visitors into loyal customers. It's a win-win scenario that unlocks new revenue streams for your business and skyrockets your sales figures.",
  },
  {
    title: "Enhance Credibility and Trust",
    description:
      "By partnering with reputable affiliates, our affiliate marketing services provider helps you leverage their credibility and establish rapport with their audience. Their endorsement of your brand lends credibility, instills trust, and fosters a sense of reliability in the minds of your potential customers. ",
  },
  {
    title: "Cost-Effective Marketing",
    description:
      "Traditional marketing channels often come with high costs and uncertain ROI. However, affiliate marketing services USA offers a cost-effective alternative with measurable results. This targeted approach ensures that every marketing dollar spent delivers tangible outcomes, allowing you to optimize your budget and maximize ROI.",
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
const AffiliateMarketing = () => {
  return (
    <div>
      <Navbar />
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="affiliatemarketing1"
        title="Affiliate Marketing Service"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            Unlock Boundless Success With Affiliate Marketing Solutions - Where
            Partnerships Propel Profits!
          </span>
        }
      />
      <AppDevelopmentWhy
        img="affiliatemarketing2"
        subTitle="Online Consultation Affiliate Marketing Services"
        title="Affiliate Marketing Agency That Ignites Your Brand’s Fire!"
        description={
          <span>
            Welcome to <b>GFS IT Solutions</b>, where our affiliate marketing
            services provider believes in harnessing the extraordinary potential
            of affiliate marketing to fuel your business growth. With our
            innovative online affiliate marketing services, cutting-edge
            technology, and a passionate network of affiliate partners, we are
            ready to revolutionize your online presence.
            <br />
            <br />
            Get ready to embark on a captivating journey where success knows no
            bounds.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="How Our Affiliate Marketing Services Make A World Of Difference?"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="Online Consultation Affiliate Marketing Services"
        title="Affiliate Marketing Agency That Turns Opportunities Into Achievements"
        description={
          <span>
            At <b>GFS IT Solutions</b>, our affiliate marketing experts
            understand the immense power and potential of affiliate marketing.
            By embracing this dynamic strategy, we help you expand your reach,
            boost sales, enhance credibility, and achieve cost-effective
            marketing with measurable results.
            <br />
            <br />
            Join us today and embark on an exhilarating journey where your
            business thrives, powered by the extraordinary force of affiliate
            marketing services.
            <br />
            <br />
            Together, let's redefine success in the digital realm with online
            affiliate marketing services!
          </span>
        }
        img="affiliatemarketing3"
      />
      <RelatedServices data={relatedServiceData} />
      <Location />
      <Footer />
    </div>
  );
};

export default AffiliateMarketing;
