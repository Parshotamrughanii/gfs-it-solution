import React from "react";
import bannerImg from "../../../assets/images/resuable-components/uiux-inner-bg.png";
import AppDevelopmentBanner from "../../../../components/AppDevelopmentBanner";
import AppDevelopmentWhy from "../../../../components/AppDevelopmentWhy";
import AppDevelopmentService from "../../../../components/AppDevelopmentService";
import AppProductDevelopment from "../../../../components/AppProductDevelopment";
import AppDevelopmentTypes from "../../../../components/AppDevelopmentTypes";
import Locations from "../../../../components/Locations";
import Footer from "../../../../components/Footer";
import { Navbar } from "../../../../components/Navbar";
import RelatedServices from "../../../../components/RelatedServices";
import Head from "next/head";

const boxData = [
  {
    title: "User-Centric Design",
    description: "We put your users at the forefront of our web product design process. By deeply understanding their needs, preferences, and pain points, our UX product designer crafts products that resonate with them on a profound level. ",
  },
  {
    title: "Iterative Prototyping",
    description: "We believe in the power of iteration. Through rapid prototyping and user testing, we refine our product design services until they achieve perfection. It's like sculpting a masterpiece, chiseling away at imperfections and honing every detail until it becomes a thing of beauty.",
  },
  {
    title: "Attention to Detail",
    description: "Our product design expert leaves no stone unturned when it comes to the finer details of your product. From the texture of the materials to the placement of every button, we obsess over the minutiae that elevate your product from good to exceptional. ",
  },
  {
    title: "Timeless Aesthetics",
    description: "Trends may come and go, but timeless design endures. In our digital product design services, we strive to create products that stand the test of time, transcending fleeting fads and becoming timeless icons. ",
  },
];
const relatedServiceData = [
  {
    id: 1,
    icon: "Brand Strategy",
    title: "Brand Strategy",
      line1: "Cross-platform framework",
      line2: "Pre-built components",  
      line3: "Powerful command line interface",
      line4: "Cordova plugins",
    path: "/services/uiux-designing/brand-strategy",
  },
  {
    id: 2,
    icon: "Design Testing",
    title: "Design Testing",
    line1: "Single code-base Framework",
      line2: "It’s all Widget Feature",
      line3: "Open-Source",
      line4: "High Community Support",
    path: "/services/uiux-designing/design-testing",
  },
  {
    id: 3,
    icon: "Product Design",
    title: "Product Design",
    line1: "Higher Productivity",
    line2: "Java Supported",
    line3: "Consistent and Supportive",
    line4: "Google Supported",
    path: "/services/uiux-designing/product-design",
  },
  {
    id: 4,
    icon: "UX Research",
    title: "UX Research",
    line1: "Highly secure",
    line2: "Scalable",
    line3: "intuitive user interface",
    line4: "customer Base Analytics",
    path: "/services/uiux-designing/ux-research",
  },
  {
    id: 5,
    icon: "ui animation",
    title: "UI & Animation",
    line1: "Open-source platform",
    line2: "Customization",
    line3: "Feature0enrich apps",
    line4: "Great user experience",
    path: "/services/uiux-designing/ui-animation",
  },
  
];
const ProductDesign = () => {
  return (
    <div>
     <Head>
      <title>Hire Digital Product Design & Development Services</title>
      <meta name="description" content="Ignite innovation with our transformative digital product design services. Hire UX product designers for concept design to bring your vision to reality." />
     </Head>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="productdesign"
        title="Digital Product Design Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            At our company, we specialize in connecting you with the top-notch
            UX product designer who can bring your vision to life!
          </span>
        }
      />
      <AppDevelopmentWhy
        img="product-design2"
        subTitle="Digital Product Design Services"
        title="Conceptualizing And Executing Innovative Designs!"
        description={
          <span>
            Our product design services are infused with a relentless pursuit of
            innovative solutions that set you apart from the crowd. We don't
            just see ourselves as designers; we see ourselves as your partners
            on this creative voyage of product design and development services.
            <br />
            <br />
            So, whether you're a startup with a disruptive idea or an
            established company looking to reinvent your product line, join our
            product concept design team on this creative expedition.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="Hire Product Designer To Avail A Slew Of Benefits"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="Digital Product Design Services"
        title="Hire Product Designer To Create Captivating Experiences For Your Users!"
        description={
          <span>
            At <b>GFS IT Solutions</b>, we don't just design products; our
            product design expert creates experiences that leave an indelible
            mark on the world. Our team of passionate designers, fueled by a
            desire for perfection, pours their hearts and soul into every
            project. With a keen eye for detail and a touch of artistic flair,
            our digital product designer transforms your ideas into tangible
            works of art.
            <br />
            <br />
            So, if you're ready to take your digital products to new heights,
            hire product designer now!
          </span>
        }
        img="product-design3"
      />
   <RelatedServices data={relatedServiceData} />
      <Locations />
      <Footer />
    </div>
  );
};

export default ProductDesign;
