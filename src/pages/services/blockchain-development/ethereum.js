import React from "react";
import { Navbar } from "../../../../components/Navbar";
import AppDevelopmentBanner from "../../../../components/AppDevelopmentBanner";
import AppDevelopmentWhy from "../../../../components/AppDevelopmentWhy";
import AppDevelopmentService from "../../../../components/AppDevelopmentService";
import AppProductDevelopment from "../../../../components/AppProductDevelopment";
import AppDevelopmentTypes from "../../../../components/AppDevelopmentTypes";
import Locations from "../../../../components/Locations";
import Footer from "../../../../components/Footer";
import bannerImg from "../../../assets/images/inner-pages/mobile-app/bg-game.png";
const boxData = [
  {
    title:"title",
    description:"content"
  },
  {
    title:"title",
    description:"content"
  },
  {
    title:"title",
    description:"content"
  },
  {
    title:"title",
    description:"content"
  },
]
const TechnologiesTypes = [
  {
    icon: "Wallet",
    title: "Wallet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    onClick: ()=>window.location.href=(`/services/blockchain-development/wallet`)
  },
  {
    icon: "Private Blockchain",
    title: "Private Blockchain",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
      onClick: ()=>window.location.href=(`/services/blockchain-development/private-blockchain`)
  },
  {
    icon: "Exchange",
    title: "Exchange",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
      onClick: ()=>window.location.href=(`/services/blockchain-development/exchange`)
  },
  {
    icon: "NFT Marketplace",
    title: "NFT Marketplace",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
      onClick: ()=>window.location.href=(`/services/blockchain-development/nft-marketplace`)
  },
  {
    icon: "Ethereum",
    title: "Ethereum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
      onClick: ()=>window.location.href=(`/services/blockchain-development/ethereum`)
  },
  {
    icon: "Hyperledger",
    title: "Hyperledger",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
      onClick: ()=>window.location.href=(`/services/blockchain-development/hyperledger`)
  },
  {
    icon: "Smart Contract",
    title: "Smart Contract",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
      onClick: ()=>window.location.href=(`/services/blockchain-development/smart-contract`)
  },
];
const Ethereum = () => {
  return (
    <div>
        <Navbar/>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="ethereum1"
        title="Ethereum Development Services"
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
        img="ethereum2"
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
        img="ethereum3"
      />
      <AppDevelopmentTypes
        headingTitle="Lorem ipsum dolor sit amet consectetur"
        description="Our team is adept at leveraging the most updated tools and technologies."
        TechnologiesTypes={TechnologiesTypes}
      />
      <Locations />
      <Footer />
    </div>
  );
};

export default Ethereum;
