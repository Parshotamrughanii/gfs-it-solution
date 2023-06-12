import React from "react";
import bannerImg from "../../../assets/images/inner-pages/mobile-app/bg-game.png";
import { Navbar } from "../../../../components/Navbar";
import AppDevelopmentBanner from "../../../../components/AppDevelopmentBanner";
import AppDevelopmentWhy from "../../../../components/AppDevelopmentWhy";
import AppDevelopmentService from "../../../../components/AppDevelopmentService";
import AppProductDevelopment from "../../../../components/AppProductDevelopment";
import AppDevelopmentTypes from "../../../../components/AppDevelopmentTypes";
import Locations from "../../../../components/Locations";
import Footer from "../../../../components/Footer";
import Head from "next/head";
const boxData = [
  {
    title: "Hyper Casual Games Development ",
    description: (
      <>
        In an era where attention spans are fleeting, we specialize in creating
        hyper casual mobile games that capture the hearts of players within
        seconds. Our hyper casual games development leverages{" "}
        <em>intuitive controls, simple mechanics, and addictive gameplay</em>{" "}
        loops to deliver instant gratification and endless enjoyment. We ensure
        that each game is a burst of hyper casual mobile games!
      </>
    ),
  },
  {
    title: "Captivating Casual Mobile Games",
    description:
      "Our mobile casual game development services cater to the ever-growing mobile gaming market, creating immersive experiences optimized for touchscreens and on-the-go play. From puzzle games that challenge the mind to endless runners that test reflexes, our casual mobile game developer captivates players and keeps them coming back for more.",
  },
  {
    title: "Customized Game Development Services",
    description:
      "Our custom mobile game development services ensure that your game is a true reflection of your imagination and aspirations. By combining our expertise with your ideas, we offer custom mobile game development services that resonate with your target audience and set your game apart from the competition. ",
  },
];
const TechnologiesTypes = [
  {
    onClick: () =>
      (window.location.href = `/services/game-development/unity3d`),
    icon: "Unity 3D",
    title: "Unity 3D",
    description:
      "Where innovation meets creativity, Unity 3D games unlock boundless possibilities.",
      path:"/services/game-development/unity3d"
  },
  {
    onClick: () =>
      (window.location.href = `/services/game-development/casual-game`),
    icon: "Casual Games",
    title: "Casual Games",
    description:
      "Indulge in captivating casual games and embark on a journey of endless entertainment.",
      path:"/services/game-development/casual-game"
  },
  {
    onClick: () =>
      (window.location.href = `/services/game-development/unreal-engine`),
    icon: "Unreal Engine",
    title: "Unreal Engine Games",
    description:
      "Engage in mind-blowing visuals and seamless gameplay with Unreal Engine games.",
      path:"/services/game-development/unreal-engine"
  },
  {
    onClick: () =>
      (window.location.href = `/services/game-development/augmented-reality`),
    icon: "Augmented Reality",
    title: "Augmented Reality",
    description:
      "Experience the extraordinary with augmented reality games and redefine your perception.",
      path:"/services/game-development/augmented-reality"
  },
  {
    onClick: () =>
      (window.location.href = `/services/game-development/metaverse`),
    icon: "Metaverse",
    title: "Metaverse Games",
    description:
      "Step into a universe of limitless possibilities and explore the metaverse through captivating games.",
      path:"/services/game-development/metaverse"
    },
  {
    onClick: () =>
      (window.location.href = `/services/game-development/virtual-reality`),
    icon: "Virtual Reality",
    title: "Virtual Reality ",
    description:
      "Embark on immersive adventures and unleash your imagination in the realm of virtual reality.",
      path:"/services/game-development/virtual-reality"
    },
];
const CasualGames = () => {
  return (
    <div>
      <Head>
        <title>Custom Hyper Casual Mobile Game App Development Services </title>
        <meta name="description" content="Enter the hyper casual gaming world with our custom mobile game development services. Create divine android casual games that entertain & engage players." />
      </Head>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="casual1"
        title="Casual Mobile Games Development"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={<span>Welcome to a World of Playful Adventure!</span>}
      />
      <AppDevelopmentWhy
        img="casual2"
        subTitle="Casual Mobile Games Development"
        title="Tap, Swipe, Repeat! - Our Custom Mobile Game Development Services"
        description={
          <span>
            As a leading casual game development company, we are passionate
            about crafting captivating casual games that transport players into
            endless fun and entertainment. In our casual game app, our casual
            mobile game developer combines our creative prowess with
            cutting-edge technology to create games that resonate with players
            of all ages and backgrounds.
            <br />
            <br />
            Step into a world of imagination, and let us guide you through the
            enchanting universe of casual games development.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="What Our Mobile Game Development Services Entail?"
        data={boxData}
        slidesToShow={3}
      />

      <AppProductDevelopment
        subTitle="Casual Development Services"
        title="Game On With Our Android Casual Game Development Services!"
        description={
          <span>
            Embrace the joy and excitement of casual game development with <b>GFS
            IT Solutions</b>. Whether it's hyper-casual games, customized mobile
            experiences or casual mobile games, we have the expertise and
            imagination to bring your vision to life.
            <br />
            <br />
            As the leading mobile game development services, our talented
            developers, designers, and storytellers work tirelessly to bring
            your game concepts to life, infusing them with whimsy, excitement,
            and addictive gameplay.
            <br />
            <br />
            Get in touch to get the best casual mobile games ever!
          </span>
        }
        img="casual3"
      />
      <AppDevelopmentTypes
        headingTitle="Myriad Of Game Development Services"
        description="Helping game enthusiasts satisfy their playing cravings with different game development services. "
        TechnologiesTypes={TechnologiesTypes}
      />
      <Locations />
      <Footer />
    </div>
  );
};

export default CasualGames;
