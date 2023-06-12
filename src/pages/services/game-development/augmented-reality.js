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
import Head from "next/head";
const boxData = [
  {
    title: "Immersive Environments",
    description:
      "AR game development services help you immerse yourself in stunning digital landscapes that seamlessly blend with the real world, transporting you to realms filled with wonder and excitement.",
  },
  {
    title: "Engaging AR Game Development",
    description:
      "Our AR games are designed to captivate your senses and keep you on the edge of your seat, with dynamic gameplay mechanics, challenging puzzles, and thrilling quests that will leave you craving for more.",
  },
  {
    title: "Cutting-Edge Technology",
    description:
      "We harness the latest advancements in augmented reality game development to deliver seamless and realistic experiences, ensuring every interaction feels natural and every virtual character comes to life.",
  },
  {
    title: "Endless Possibilities",
    description:
      "With our augmented reality development services, the only limit is your imagination. Explore vast virtual worlds, customize your gaming experience, and embark on journeys that adapt to your choices, creating a truly unique and personalized adventure.",
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
const AugmentedReality = () => {
  return (
    <div>
    <Head>
      <title>Augmented Reality Game Development Company | AR Developer</title>
      <meta name="description" content="Experience the magic of augmented reality games with our expert AR development services. Unlock captivating AR experiences with our dedicated team of developers." />
    </Head>
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="augmented1"
        title="AR Game Development"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            Time to leave the confines of your living room and step into a world
            of adventure that unfolds right before your eyes. With our Augmented
            Reality services, your environment becomes the stage for epic quests
            and incredible challenges. Are you ready to experience a thrill?
            Just get in touch with us right now!
          </span>
        }
      />
      <AppDevelopmentWhy
        img="augmented2"
        subTitle="AR Game Development"
        title="Hunt Down Mythical Creatures With Our Augmented Reality Services!"
        description={
          <span>
            Are you ready to enter a realm where the lines between the physical
            and digital worlds blur and your wildest dreams come to life? AR
            game development will help you!
            <br />
            <br />
            Augmented Reality game is a breathtaking technology that seamlessly
            blends virtual elements with the real world, transporting you to a
            whole new dimension of immersive experiences.{" "}
            <b>GFS IT Solutions</b> helps you embark on this extraordinary
            journey where you witness the enchanting possibilities of AR.
            <br />
            <br />
            Hire our augmented reality developer to create magic!
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="What You Get With Augmented Reality Game Development?"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="AR Game Development"
        title="Augmented Reality Developer Creating Wonders For You!"
        description={
          <span>
            With our AR game development services, the ordinary transforms into
            the extraordinary. With just a flick of your smartphone or donning a
            sleek AR headset, our AR game development company helps you embark
            on thrilling adventures, solve mind-bending puzzles, and interact
            with virtual characters that seamlessly merge with your
            surroundings.
            <br />
            <br />
            Are you ready to have your senses dazzled as you dive headfirst into
            a realm where fantasy and reality coexist?
            <br />
            <br />
            Strike up a conversation with us and let the magicians cast a spell
            with their game development expertise!
          </span>
        }
        img="augmented3"
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

export default AugmentedReality;
