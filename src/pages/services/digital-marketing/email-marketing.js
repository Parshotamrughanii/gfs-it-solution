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
    title: "Business Email Marketing",
    description:
      "Our team of experts specializes in creating personalized and engaging business email campaigns that will connect you with your target audience and drive results. Time to build a loyal customer base and grow your business like never before!",
  },
  {
    title: "Targeted Email Marketing Services",
    description: (
      <span>
        At <b>GFS IT Solutions</b>, we know that one size doesn't fit all when
        it comes to email marketing. That's why we offer targeted email
        marketing campaign services that help you reach the right people with
        the right message.
      </span>
    ),
  },
  {
    title: "B2B Email Marketing",
    description:
      "When it comes to B2B Email Marketing, you need a partner who understands your business and your target audience. That's where our B2B email marketing agency comes in. With our advanced targeting capabilities and data-driven approach, we'll help you connect with your desired audience and drive conversions.",
  },
  {
    title: "Direct Email Marketing",
    description: (
      <span>
        At <b>GFS IT Solutions</b>, we know that effective marketing requires a
        direct approach. That's why we offer direct email marketing services
        that help you connect with your audience in a more personal and
        meaningful way.
        <b>
          Customized Campaigns That Speak Directly To Your Audience And Generate
          Leads!
        </b>
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
const EmailMarketing = () => {
  return (
    <div>
      <Navbar />
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="emailmarketing1"
        title="Email Marketing Campaign Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            With our email marketing campaign services, you will be able to:
            <>
              <span> Build a strong email list of engaged subscribers</span>
              <br />
              <br />
              <span>
                Create personalized campaigns that resonate with your audience
              </span>
              <br />
              <br />
              <span> Increase CTR</span> <br />
              <br />
              <span> Drive more TRAFFIC to your website</span> <br />
              <br />
              <span>
                Nurture leads and <b>CONVERT</b> them into <b>CUSTOMERS</b>
              </span>
              <br />
              <br />
            </>
          </span>
        }
      />
      <AppDevelopmentWhy
        img="emailmarketing2"
        subTitle="Business Email Marketing"
        title="Connect With Your Audience On A Personal Level Via Our Email Marketing Campaign Services!"
        description={
          <span>
            Our email marketing agency believes in the power of effective
            communication. And what better way to communicate than through
            emails? Our direct email marketing service
            <em>
              s help businesses like yours reach out to their target audience,
              increase brand awareness, and drive conversions.
            </em>
            <br />
            <br />
            Email marketing is like a fine-tuned instrument, and our email
            marketing service provider knows how to play it just right. Our B2B
            email marketing agency will help you craft compelling emails that
            capture your audience's attention and keep them engaged from
            <b>start </b>
            to <b>finish</b>. We aim to help you create a genuine connection
            with your customers, one email at a time!
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="Email Campaign Management Services Designed To Help You Build Rapport"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="Email Marketing Company In USA"
        title="Email Marketing Service Provider Helping You Reach Your Customers Where They Are - In Their INBOX!"
        description={
          <span>
            We understand that every business is unique, which is why we offer
            customized business email marketing solutions that fit your specific
            needs.
            <br />
            <br />
            Whether you're looking to launch a new product or service, promote a
            sale, or simply stay in touch with your subscribers, our email
            marketing agency will help you achieve your goals.
            <br />
            <br />
            Our email marketing for agencies includes crafting the perfect
            subject line to designing eye-catching templates and personalized
            content. So, what are you waiting for?
            <br />
            <br />
            <b>
              Get in touch with us to create emails that stand out in the inbox!
            </b>
          </span>
        }
        img="emailmarketing3"
      />
      <RelatedServices data={relatedServiceData} />
      <Locations />
      <Footer />
    </div>
  );
};

export default EmailMarketing;
