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
        headingTitle="Lorem ipsum dolor sit amet consectetur"
        description="Our team is adept at leveraging the most updated tools and technologies."
        TechnologiesTypes={TechnologiesTypes}
      />
      <Locations />
      <Footer />
    </div>
  );
};

export default SmartContract;
