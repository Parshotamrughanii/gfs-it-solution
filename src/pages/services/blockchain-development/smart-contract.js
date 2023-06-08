import React from "react";
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
    title: "Impeccable Security",
    description:
      "We take security seriously, embedding stringent measures within our blockchain smart contract development services to safeguard your valuable assets. It's like having a digital vault with unbreakable locks, keeping your transactions secure and your data protected.",
  },
  {
    title: "Seamless Integration",
    description:
      "Our smart contracts seamlessly integrate with existing systems and blockchain platforms, ensuring a smooth transition and compatibility with your infrastructure.",
  },
  {
    title: "Scalability At Its Core",
    description:
      "As your business grows, our smart contracts grow with you. We architect smart contract application development that accommodates increasing transaction volumes and evolving business needs. ",
  },
  {
    title: "Transparent and Auditable",
    description:
      "We believe in transparency and accountability in our blockchain smart contract development services. Our smart contracts are designed to be transparent, allowing stakeholders to verify and audit transactions with ease.",
  },
];
const TechnologiesTypes = [
  {
    icon: "Wallet",
    title: "Crypto Wallet Development",
    path:"/services/blockchain-development/wallet",
    description:
      "Safeguard your digital assets with a secure and user-friendly wallet tailored to your needs.",
    onClick: () =>
      (window.location.href = `/services/blockchain-development/wallet`),
  },
  {
    icon: "Private Blockchain",
    title: "Private Blockchain Development",
    path:"/services/blockchain-development/private-blockchain",

    description:
      "Experience enhanced privacy and control with a customized private blockchain solution.",
    onClick: () =>
      (window.location.href = `/services/blockchain-development/private-blockchain`),
  },
  {
    icon: "Exchange",
    title: "Exchange Development",
    path:"/services/blockchain-development/exchange",
    description:
      "Empower seamless cryptocurrency trading experiences with our cutting-edge exchange platform.",
    onClick: () =>
      (window.location.href = `/services/blockchain-development/exchange`),
  },
  {
    icon: "NFT Marketplace",
    title: "NFT Marketplace Development",
    path:"/services/blockchain-development/nft-marketplace",

    description:
      "Dive into the world of digital collectibles and create a thriving marketplace for unique NFTs.",
    onClick: () =>
      (window.location.href = `/services/blockchain-development/nft-marketplace`),
  },
  {
    icon: "Ethereum",
    title: "Ethereum Development",
    path:"/services/blockchain-development/ethereum",
    description:
      "Harness the power of Ethereum to build decentralized applications that redefine possibilities.",
    onClick: () =>
      (window.location.href = `/services/blockchain-development/ethereum`),
  },
  {
    icon: "Hyperledger",
    title: "Hyperledger Development",
    path:"/services/blockchain-development/hyperledger",
    description:
      "Leverage the robustness of Hyperledger technology for building enterprise-grade blockchain solutions.",
    onClick: () =>
      (window.location.href = `/services/blockchain-development/hyperledger`),
  },
  {
    icon: "Smart Contract",
    title: "Smart Contract Development",
    path:"/services/blockchain-development/smart-contract",
    description:
      "Automate transactions and agreements with intelligent, self-executing smart contracts.",
    onClick: () =>
      (window.location.href = `/services/blockchain-development/smart-contract`),
  },
];
const SmartContract = () => {
  return (
    <div>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="smartcontract1"
        title="Smart Contract Development Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            As a leading DeFi smart contract development company, we specialize
            in providing innovative and secure smart contract solutions.
          </span>
        }
      />
      <AppDevelopmentWhy
        img="smartcontract2"
        subTitle="Smart Contract Development Services"
        title="Smartly Navigating Your Journey To An Immutable Future!"
        description={
          <span>
            At <b>GFS IT Solutions</b>, we don't just write lines of code; we
            sculpt masterpieces with the stroke of our keyboards. Our team of
            smart contract development consultants, armed with a deep
            understanding of blockchain and a flair for innovation, is here to
            empower your business through smart contracts.
            <br />
            <br />
            With meticulous attention to detail and a sprinkle of creativity in
            NFT smart contract development, we breathe life into your ideas,
            transforming them into digital contracts that revolutionize how you
            do business.
            <br />
            <br />
            Our expert smart contract development consultants are here to guide
            you on your journey towards decentralized finance, ensuring seamless
            integration and unlocking the full potential of blockchain
            technology. Trust us to transform your ideas into reality.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="What You Will Find In Our Smart Contract Development Services?"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="Angular Development Services"
        title="Let's Revolutionize The World Together!"
        description={
          <span>
            In the fast-paced world of business, efficiency is the name of the
            game. Our smart contract development company offers a gateway to
            streamlined operations and cost savings. By automating processes and
            removing intermediaries, we eliminate the risk of human error and
            unnecessary expenses.
            <br />
            <br />
            Our smart contract development services are designed with
            flexibility in mind. Whether you need a simple agreement, a complex
            decentralized application or need NFT smart contract development,
            our expert developers tailor smart contracts that align perfectly
            with your specific needs.
          </span>
        }
        img="smartcontract3"
      />
   <AppDevelopmentTypes
        headingTitle="Experience Cutting-Edge Blockchain Services Tailored to Your Needs"
        description="Embrace the future of technology with our comprehensive suite of blockchain services, revolutionizing industries and opening new doors of opportunity."
        TechnologiesTypes={TechnologiesTypes}
      />
      <Locations />
      <Footer />
    </div>
  );
};

export default SmartContract;
