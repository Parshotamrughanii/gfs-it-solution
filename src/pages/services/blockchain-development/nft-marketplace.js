import React from "react";
import { Navbar } from "../../../../components/Navbar";
import AppDevelopmentBanner from "../../../../components/AppDevelopmentBanner";
import AppDevelopmentWhy from "../../../../components/AppDevelopmentWhy";
import AppDevelopmentService from "../../../../components/AppDevelopmentService";
import AppProductDevelopment from "../../../../components/AppProductDevelopment";
import AppDevelopmentTypes from "../../../../components/AppDevelopmentTypes";
import Location from "../../../../components/Locations";
import Footer from "../../../../components/Footer";
import bannerImg from "../../../assets/images/inner-pages/mobile-app/bg-game.png";
const boxData = [
  {
    title: "Seamless NFT Marketplace Design and Development",
    description:
      "Our NFT marketplace design and development prowess is second to none. We craft immersive and visually stunning platforms that bring your NFT art to life. It's like having a gallery where your digital creations dance and captivate the audience, leaving them in awe.",
  },
  {
    title: "Custom NFT Marketplace",
    description:
      "We understand that every artist, collector, or entrepreneur has unique aspirations. That's why we offer customizable NFT art marketplace development, allowing you to leave an indelible mark on motivated NFT buyers. ",
  },
  {
    title: "End-to-End Support",
    description:
      "We're not just here to develop your NFT marketplace and bid you farewell. From ideation to launch and beyond, we'll be your trusted companions, ensuring your success in this ever-evolving digital realm.",
  },
];
const TechnologiesTypes = [
  {
    icon: "Wallet",
    title: "Wallet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    onClick: () =>
      (window.location.href = `/services/blockchain-development/wallet`),
  },
  {
    icon: "Private Blockchain",
    title: "Private Blockchain",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    onClick: () =>
      (window.location.href = `/services/blockchain-development/private-blockchain`),
  },
  {
    icon: "Exchange",
    title: "Exchange",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    onClick: () =>
      (window.location.href = `/services/blockchain-development/exchange`),
  },
  {
    icon: "NFT Marketplace",
    title: "NFT Marketplace",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    onClick: () =>
      (window.location.href = `/services/blockchain-development/nft-marketplace`),
  },
  {
    icon: "Ethereum",
    title: "Ethereum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    onClick: () =>
      (window.location.href = `/services/blockchain-development/ethereum`),
  },
  {
    icon: "Hyperledger",
    title: "Hyperledger",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    onClick: () =>
      (window.location.href = `/services/blockchain-development/hyperledger`),
  },
  {
    icon: "Smart Contract",
    title: "Smart Contract",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
    onClick: () =>
      (window.location.href = `/services/blockchain-development/smart-contract`),
  },
];
const NFTMarketplace = () => {
  return (
    <div>
      <Navbar />
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="nft1"
        title="NFT Marketplace Development Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            Our NFT development company is not just another company in the
            crowd; we are the artisans of this digital revolution, shaping the
            future of NFTs!
          </span>
        }
      />
      <AppDevelopmentWhy
        img="nft2"
        subTitle="NFT Marketplace Development Services"
        title="NFT Marketplace Development - Unlocking The True Value Of Your Digital Creations!"
        description={
          <span>
            But what exactly is an NFT marketplace, you may wonder? Imagine it
            as a bustling bazaar where artists, collectors, and buffs gather to
            showcase, buy, and sell their unique digital masterpieces. Our white
            label NFT marketplace solutions are like a blank canvas, allowing
            you to create a vibrant marketplace tailored to your vision.
            <br />
            <br />
            At GFS IT Solutions, we understand that NFTs are not just digital
            assets but windows to a universe of untapped potential. If you want
            to enter that, call us right away!
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="What’s Included In Our NFT Marketplace Development Services?"
        data={boxData}
        slidesToShow={3}
      />

      <AppProductDevelopment
        subTitle="NFT Marketplace Development Services"
        title="NFT Marketplace Development Services Redefining The Very Fabric Of Digital Art!"
        description={
          <span>
            If you want to embark on a journey into the mesmerizing realm of
            NFTs, you've come to the right NFT marketplace development company!
            <br />
            So, whether you're an artist yearning to showcase your creations, a
            collector searching for that elusive gem, or an entrepreneur seeking
            to revolutionize the NFT landscape, join our NFT marketplace
            development company on this exhilarating journey.
          </span>
        }
        img="nft3"
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

export default NFTMarketplace;
