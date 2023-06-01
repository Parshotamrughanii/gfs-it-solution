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
    title: "Power Of The Metaverse",
    description:
      "Through our metaverse game development expertise, we enable you to unlock the limitless possibilities of this interconnected digital universe. Harnessing advanced technologies such as virtual reality (VR), augmented reality (AR), blockchain, and artificial intelligence (AI), our metaverse game development company creates immersive metaverse games that transcend the boundaries of traditional gaming.",
  },
  {
    title: "Metaverse NFT Game Development",
    description:
      "Our metaverse NFT game development services allow you to integrate unique and tradable in-game assets that offer true ownership and value to players. By harnessing the power of blockchain, our Metaverse NFT game development company creates secure and transparent ecosystems where players can collect, trade, and monetize their virtual possessions, adding a whole new dimension of excitement and economic possibilities to your Metaverse gaming experience.",
  },
  {
    title: "Customized Metaverse Development Services",
    description:
      "Our metaverse development services are fully customizable, ensuring your game reflects your brand identity, gameplay mechanics, and desired user experience. Our experienced team of metaverse game developers and designers work closely with you throughout the development journey, translating your ideas into a stunning metaverse reality. ",
  },
  {
    title: "Collaborative Approach",
    description:
      "Our network of creative minds and technical metaverse game experts allows us to stay at the forefront of metaverse innovation, continually exploring new frontiers and incorporating the latest advancements into our development process. Through strategic partnerships and alliances, our metaverse game development company ensures that your metaverse game stands out from the crowd and delivers a unique and captivating experience to your players.",
  },
];
const TechnologiesTypes = [
  {
    onClick: () =>
      (window.location.href = `/services/game-development/unity3d`),
    icon: "Unity 3D",
    title: "Unity 3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
  },
  {
    onClick: () =>
      (window.location.href = `/services/game-development/casual-game`),
    icon: "Casual Games",
    title: "Casual Games",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
  },
  {
    onClick: () =>
      (window.location.href = `/services/game-development/unreal-engine`),
    icon: "Unreal Engine",
    title: "Unreal Engine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
  },
  {
    onClick: () =>
      (window.location.href = `/services/game-development/augmented-reality`),
    icon: "Augmented Reality",
    title: "Augmented Reality",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
  },
  {
    onClick: () =>
      (window.location.href = `/services/game-development/metaverse`),
    icon: "Metaverse",
    title: "Metaverse",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
  },
  {
    onClick: () =>
      (window.location.href = `/services/game-development/virtual-reality`),
    icon: "Virtual Reality",
    title: "Virtual Reality",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et.",
  },
];
const Metaverse = () => {
  return (
    <div>
      <Navbar />
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="metaverse1"
        title="Creating Breathtaking Virtual Worlds!"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={<span>Creating Breathtaking Virtual Worlds!</span>}
      />
      <AppDevelopmentWhy
        img="metaverse2"
        subTitle="Metaverse"
        title="Delivering Unforgettable Gaming Experiences!"
        description={
          <span>
            At <b>GFS IT Solutions</b>, we are pioneers in metaverse game
            development. With our cutting-edge expertise and unwavering passion
            for immersive virtual experiences, our metaverse game development
            services bring your wildest gaming dreams to life within the
            metaverse.
            <br />
            <br />
            As the leading metaverse development services, we pride ourselves on
            pushing the boundaries of what is possible, revolutionizing how
            gamers interact and engage with digital worlds. So, why wait? Get in
            touch today, and let's get the ball rolled!
          </span>
        }
      />
      <AppDevelopmentService headingTitle="What You Get." data={boxData} />

      <AppProductDevelopment
        subTitle="Metaverse"
        title="We Are The Best Amongst Other Metaverse Gaming Companies!"
        description={
          <span>
            At <b>GFS IT Solutions</b>, we are dedicated to shaping the future
            of gaming through our unrivaled metaverse game development skills.
            Our expertise in metaverse gaming, coupled with our commitment to
            innovation and collaboration, positions us as the ideal partner to
            bring your metaverse game to life.
            <br />
            <br />
            Embrace the infinite possibilities of the metaverse with our
            metaverse game development services and let your imagination soar to
            new heights. Contact us today to embark on a transformative journey
            into the world of metaverse gaming!
          </span>
        }
        img="magento3"
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

export default Metaverse;
