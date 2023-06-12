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
import Head from "next/head";
const boxData = [
  {
    title: "Creativity",
    description:
      "We believe that creativity is the key to standing out from the crowd. Our team of social media marketing services providers uses their creativity to create campaigns that are unique and tailored to your brand.",
  },
  {
    title: "Results",
    description:
      "We believe that creativity is the key to standing out from the crowd. Our team of social media marketing services providers uses their creativity to create campaigns that are unique and tailored to your brand.",
  },
  {
    title: "Results",
    description:
      "Our social media ad management campaigns are designed to deliver results, whether it's increased engagement, traffic, or sales. ",
  },
  {
    title: "Expertise",
    description:
      "Our team of social media management services providers are experts in their field and are constantly expanding their knowledge to stay at the forefront of the industry.",
  },
  {
    title: "Attention to Detail",
    description:
      "We believe that in social media marketing services, little things make a big difference, and we pay close attention to every detail to ensure that your campaign is flawless.",
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
const SocialMediaMarketing = () => {
  return (
    <div>
     <Head>
      <title>Affordable Social Media Marketing Services</title>
      <meta name="description" content="Drive online success with social media ad management & promotion services offered by organic social media marketing company. Hire our agency today." />
     </Head>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="socialmedia1"
        title="Social Media Marketing Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description="Laser-target Visibility, Quality Leads, Quantifiable ROI, and Impressive Conversion Rates - Some Words That Best Describe The Result Of Our Affordable Social Media Marketing Services!"
      />
      <AppDevelopmentWhy
        img="socialmedia2"
        subTitle="Social Media Management Services"
        title="From Likes To Sales: This Is What Our Social Media Management Services Do For You!"
        description={
          <span>
            At our social media advertising agency, we believe that low cost
            social media marketing is more than just a set of techniques or
            strategies. It's an art form that requires creativity, skill, and
            passion. Our team of expert social media marketers works tirelessly
            to create social media ad management campaigns that are not only
            effective but also aesthetically pleasing, bringing your brand to
            <b> LIFE</b> in the digital world.
            <br />
            <br />
            If you are on the lookout for affordable social media marketing for
            small business, look no further. <b>GFS IT Solutions</b> is the best
            place to confide in for advertising needs.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="Here's Why You Should Choose Our Social Media Marketing Company"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="Affordable Social Media Marketing Services"
        title="Turning Clicks Into Customers:  Social Media Platforms Marketing Services"
        description={
          <span>
            The cornerstone of our organic social media marketing services
            covers everything that you need to make your brand go VIRAL!
            <br />
            <br />
            <b>Social Media Strategy:</b> Our social media marketing agency
            creates a customized social media strategy that aligns with your
            business goals and objectives.
            <br />
            <b>Content Creation:</b> We create visually stunning content that
            captures your audience's attention and tells your brand's story.
            <br />
            <b>Social Media Promotion Services:</b> Let our social media
            promotion service be the sunshine that brightens your brand's
            digital presence. With our expert touch, we'll make your social
            media accounts sing like a chorus of birds in the morning dew.
            <br />
            <b>Social Media Advertising:</b> We create targeted social media
            advertising campaigns that deliver results.
            <br />
            <b>Social Media Management:</b> We manage your social media
            accounts, ensuring your brand's voice is consistent and engaging.
            <br />
            <br />
            If you are on the quest for a social media marketing agency near me,
            your search for the perfect ends at <b>GFS IT Solutions</b>. Call us
            right away to make your brand the talk of the town, and that too at
            the drop of a hat.
          </span>
        }
        img="socialmedia3"
      />
      <RelatedServices data={relatedServiceData} />
      <Locations />
      <Footer />
    </div>
  );
};

export default SocialMediaMarketing;
