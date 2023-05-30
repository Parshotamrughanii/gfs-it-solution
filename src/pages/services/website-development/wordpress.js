import React from "react";
import { Navbar } from "../../../../components/Navbar";
import AppDevelopmentBanner from "../../../../components/AppDevelopmentBanner";
import AppDevelopmentWhy from "../../../../components/AppDevelopmentWhy";
import AppDevelopmentService from "../../../../components/AppDevelopmentService";
import AppProductDevelopment from "../../../../components/AppProductDevelopment";
import AppDevelopmentTypes from "../../../../components/AppDevelopmentTypes";
import Location from "../../../../components/Locations";
import Footer from "../../../../components/Footer";
import bannerImg from "../../../assets/images/resuable-components/website-bg.png";

const boxData = [
  {
    title: "All Tools At One Place",
    description: (
      <span>
        WordPress is like a magical toolbox, filled with all the tools you need
        to create the perfect website.{" "}
        <em>
          From customizable templates to plugins that add extra functionality
        </em>
        , our WordPress website development company knows everything to make
        your website unique and visually stunning.
      </span>
    ),
  },
  {
    title: "Scalability",
    description:
      "Our WordPress development company builds a website that's as sturdy as a castle. WordPress is constantly updating and improving, meaning your website needs to be always up-to-date and secure. Our custom WordPress development services providers perform regular backups so you can be confident that your website will always be safe and secure.",
  },
  {
    title: "Customization",
    description:
      "Whether you want to add a blog to your website or create an e-commerce store, WordPress is the perfect platform to unleash your creative vision. With endless customization options, our WordPress web development service entails creating a website that truly represents your brand and unique style. ",
  },
  {
    title: "We Manage It Like A Pro",
    description: (
      <span>
        WordPress is like a well-oiled machine, making it easy for you to manage
        your website. With a user-friendly interface and intuitive navigation,
        managing your website has never been easier.{" "}
        <em>From adding new content to updating your site's design</em>, our
        custom WordPress development services cover all!
      </span>
    ),
  },
];
const TechnologiesTypes = [
  {
    icon: "asp",
    title: "ASP.NET",
    onClick: ()=>{window.location.href=('/services/website-development/asp-net')},
    description:
      "Unleash the power of the web with our ASP.NET services built to electrify your online presence!",
  },
  {
    icon: "typescript",
    title: "TypeScript Development",
    onClick: ()=>{window.location.href=('/services/website-development/typscript')},
    description:
      "Transform your website into a stunning masterpiece with our TypeScript development services that will make your code sing!",
  },
  {
    icon: "python",
    title: "Python Development",
    onClick: ()=>{window.location.href=('/services/website-development/python')},
    description:
      "Embrace the future of technology with our Python development services that will make your website the talk of the town!",
  },
  {
    icon: "angular",
    title: "Angular Development ",
    onClick: ()=>{window.location.href=('/services/website-development/angular')},
    description:
      "Revolutionize your website with our Angular development services that will make your online presence a force to be reckoned with!",
  },
  {
    icon: "Group 1342",
    title: "PHP Development ",
    onClick: ()=>{window.location.href=('/services/website-development/php')},
    description:
      "Get ready to take the digital world by storm with our PHP development services crafted to perfection!",
  },
  {
    icon: "Vector (5)",
    title: "Laravel Development  ",
    onClick: ()=>{window.location.href=('/services/website-development/laravel')},
    description:
      "Elevate your website to new heights with our Laravel development services that will make it soar like an eagle!",
  },
  {
    icon: "wordpress 1",
    title: "WordPress Development",
    onClick: ()=>{window.location.href=('/services/website-development/wordpress')},
    description:
      "Unlock your website's true potential with our WordPress development services that will make your online presence shine like a diamond!",
  },


];
const WordpressDevelopment = () => {
  return (
    <div>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="wordpress-banner"
        title="WordPress Website Development Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description="From Drab To Fab - Custom WordPress Development At Your Service!"
      />
      <AppDevelopmentWhy
        img="wordpress-mid"
        subTitle="WordPress App"
        title="WordPress Development Company In USA"
        description={
          <span>
            We are not your average WordPress website development services. We
            like to think of ourselves as a team of eccentric geniuses who
            thrive on challenges and love to push the boundaries of what's
            possible. <em>From website design to plugin development</em>, our
            WordPress development company has got the skills and expertise to
            create a website that will make you stand out in the online world.
            <br />
            <br />
            We're obsessed with the details; we won't rest until your website is
            perfect. Contact us today for WordPress web development service and
            let's get started with creating the website of your dreams!
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="Why Should One Think About WordPress Outsourcing Service From Us?"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="WordPress App"
        title="Let's Turn Your Website Into A Masterpiece With WordPress Development Services!"
        description={
          <span>
            If you want your brand to be displayed as the best and want your
            services to get attention at the earliest, buy our WordPress
            developer services.
            <br />
            <br />
            Whether you are a small business owner or a creative professional,
            our WordPress CMS development services will help you create a
            stunning website that truly represents you. Don't wait any longer -
            start your WordPress development journey today by hiring{" "}
            <b>GFS IT Solutions</b>!
          </span>
        }
        img="wordpress-bottom"
      />
       <AppDevelopmentTypes
        headingTitle="Our Web Development Services As A Whole"
        description="Our development maestros define the future of your digital success."
        TechnologiesTypes={TechnologiesTypes} 
      />
      <Location />
      <Footer />
    </div>
  );
};

export default WordpressDevelopment;
