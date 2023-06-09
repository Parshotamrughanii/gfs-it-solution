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
    title: "SEO Content Marketing Services",
    description: (
      <span>
        Whether you need
        <em>blog posts, social media content, email marketing campaigns</em>, or
        any other type of content, we help you achieve your objectives. Our team
        of writers and content creators are skilled in crafting engaging and
        informative content that strikes a chord with your audience.
      </span>
    ),
  },
  {
    title: "Content Promotion Services",
    description: (
      <span>
        We believe that online content marketing solutions are crucial for
        businesses to stay competitive in today's digital age.
        <b>GFS IT Solutions </b>
        offer a range of services that help you
        <b>Create, Distribute, And Promote</b>
        your content online. Our online content marketing services ensure your
        content reaches your target audience and generates leads.
      </span>
    ),
  },
  {
    title: "Content Strategy Services",
    description: (
      <span>
        Our content marketing strategy services are designed to help you create
        a roadmap for success. We will work with you to
        <em>
          identify your goals, target audience, and the best channels to reach
          them
        </em>
        .
      </span>
    ),
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
const ContentMarketing = () => {
  return (
    <div>
        <Navbar/>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="contentmarketing1"
        title="Content Marketing Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description="Winning Content Strategy Services Designed For You!"
      />
      <AppDevelopmentWhy
        img="contentmarketing2"
        subTitle="Hire Content Marketer"
        title="Online Content Marketing Services to Help You Break the Digital Noise!"
        description={
          <span>
            At <b>GFS IT Solutions</b>, we believe content is the heart of any
            successful digital marketing campaign. Our team of content marketing
            experts, including creative writers, editors, and content
            strategists, are here to help you create and implement a winning
            content marketing strategy.
            <br />
            <br />
            Our content marketing service provider understands that creating
            high-quality content can be daunting. That's why we're here to help
            with our content marketing services. Let <b>
              GFS IT Solutions
            </b>
            take care of your content marketing needs so you can focus on
            running your business.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="Hire Content Marketer to Avail the Best from Professionals"
        data={boxData}
        slidesToShow={3}
      />

      <AppProductDevelopment
        subTitle="Hire Content Marketer"
        title="Online Content Marketing Services Designed To Let Your Brand Speak Volumes!"
        description={
          <span>
            Our content marketing service provider offers:
            <br />
            <br />
            <b>Content Strategy</b>
            <br />
            We'll help you develop a content strategy that aligns with your
            business goals and objectives.
            <br />
            <br />
            <b>Blog Writing</b>
            <br />
            Our team of experienced writers will create high-quality blog posts
            that engage your audience and drive traffic to your website.
            <br />
            <br />
            <b>Social Media Content</b>
            <br />
            We'll create social media content that reflects your brand's voice
            and connects with your audience.
            <br />
            <br />
            <b>Email Newsletters</b>
            <br />
            Our team can help you craft email newsletters that deliver valuable
            content and keep your subscribers engaged.
            <br />
            <br />
            <b>Video Content</b>
            <br />
            We can help you create compelling video content that showcases your
            brand and tells your story.
            <br />
            <br />
            And whatnot!
            <br />
            <br />
            Strike up a conversation with our advertising gurus and get the best
            content marketing strategy services available nowhere but here!
          </span>
        }
        img="contentmarketing3"
      />
      <RelatedServices data={relatedServiceData} />
      <Locations />
      <Footer />
    </div>
  );
};

export default ContentMarketing;
