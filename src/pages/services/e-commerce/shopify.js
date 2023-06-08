import React from "react";
import bannerImg from "../../../assets/images/inner-pages/mobile-app/EBackground.png";
import AppDevelopmentBanner from "../../../../components/AppDevelopmentBanner";
import { Navbar } from "../../../../components/Navbar";
import AppDevelopmentWhy from "../../../../components/AppDevelopmentWhy";
import AppDevelopmentService from "../../../../components/AppDevelopmentService";
import AppProductDevelopment from "../../../../components/AppProductDevelopment";
import AppDevelopmentTypes from "../../../../components/AppDevelopmentTypes";
import Location from "../../../../components/Locations";
import Footer from "../../../../components/Footer";
const boxData = [
  {
    title: "Seamless Shopify Store Development Services",
    description: "Watch your vision come to life as we craft captivating, conversion-focused Shopify stores. Our Shopify store development experts meticulously design and develops your online presence, ensuring a seamless user experience that leaves a lasting impression.",
  },
  {
    title: "Customization at Your Fingertips",
    description: "Stand out from the crowd with our tailor-made Shopify development services. We understand that every business is unique, which is why we offer extensive customization options that align with your brand identity and resonate with your target audience.",
  },
  {
    title: "Powerful Integrations",
    description: "Maximize the potential of your Shopify store with our array of powerful integrations. From payment gateways to marketing automation tools, our Shopify ecommerce development seamlessly connects the dots, enabling you to streamline operations and drive growth. Hire expert Shopify developer today to get all these benefits!",
  },
  {
    title: "Ongoing Support and Growth",
    description: "We don't just build and leave; we are your partners in success. With our dedicated support and continuous optimization strategies, we ensure that your Shopify store evolves and flourishes, adapting to the ever-changing e-commerce landscape. Hire dedicated Shopify developer to keep your Shopify store up and running!",
  },
  {
    title: "Shopify Website Development Services",
    description: "With our expertise in Shopify web development services, we craft digital masterpieces that captivate and convert. Our team of Shopify web development services artisans will meticulously handcraft your Shopify website, ensuring that every pixel, line of code, and interaction is flawlessly executed. ",
  },
  {
    title: "Shopify Custom App Development",
    description: "We delve into the realm of Shopify custom app development to elevate your store to new heights. Whether you need a custom app to streamline inventory management or enhance customer engagement, our Shopify app development services got you covered.",
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
const Shopify = () => {
  return (
    <div>
      <Navbar />
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="shopify1"
        title="Shopify Website Development Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            Are you in need of a helping hand to navigate the intricacies of
            Shopify? Look no further than our Shopify website development
            company!
            <br />
            <br />
            When you hire dedicated Shopify developer, you are not just getting
            a technical whiz; you're gaining a valuable partner on your digital
            journey. From crafting captivating visuals to optimizing your
            website's performance, our Shopify website development company got
            you covered.
          </span>
        }
      />
      <AppDevelopmentWhy
        img="shopify2"
        subTitle="Shopify Development Services"
        title="From Vision to Virtual Shelves - Unleash the Power of Our Shopify Development Services!"
        description={
          <span>
            Speaking of expertise, our team consists of seasoned professionals
            who eat, sleep, and breathe all things Shopify.
            <br />
            <br />
            So, why settle for less when you can partner with the best? Let our
            Shopify developer support services be the cornerstone of your
            e-commerce success story.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="Your Shopify Success Story Begins Here - Let's Write It Together With GFS IT Solutions!"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="Shopify Development Services"
        title="Shopify Store Development Services: Your Pathway To Ecommerce Success Starts Here!"
        description={
          <span>
            When it comes to Shopify development services, hire Shopify web
            developer who prides himself on being a cut above the rest.
            <br />
            <br />
            Remember, Rome wasn't built in a day, and neither is a remarkable
            online store. Together, we'll create a digital masterpiece that will
            turn heads, drive sales, and elevate your business to new heights.
            <br />
            <br />
            So, what are you waiting for? Hire expert Shopify developer today
            and harness the full potential of this powerful ecommerce platform!
          </span>
        }
        img="shopify3"
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

export default Shopify;
