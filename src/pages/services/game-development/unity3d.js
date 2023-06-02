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
    title: "Unity 3D Game Design And Development",
    description:
      "From conceptualization to implementation, our expert developers breathe life into your unique ideas, transforming them into polished, tailor-made unity 3D game design experiences. We harness the power of Unity 3D to create engaging gameplay mechanics, captivating narratives, and visually stunning environments that keep players coming back for more.",
  },
  {
    title: "Virtual Reality And Augmented Reality",
    description:
      "We specialize in creating immersive VR and AR experiences that transport players to new worlds and engage them in exciting new ways. Our Unity game development company blends the real world with the digital, harnessing the immersive capabilities of Unity 3D to create mind-bending experiences that blur the line between fantasy and reality. ",
  },
  {
    title: "Multiplayer Unity 3D Game Development",
    description:
      "We have extensive experience developing multiplayer games that allow players to connect and compete in real time, whether they're in the same room or on opposite sides of the world. Our team excels in crafting immersive multiplayer Unity 3D game development that fosters community and competition. ",
  },
  {
    title: "Unity Mobile Game Development",
    description:
      "Our Unity game developers create mobile games optimized for iOS and Android devices, offering seamless gameplay and stunning graphics that will captivate players. Not only mobile games, but we also specialize in adapting Unity 3D games to various devices, from PC to consoles, to mobile to web. For Unity mobile game development, look nowhere else but here!",
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
const Unity = () => {
  return (
    <div>
      <Navbar />
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="unity1"
        title="Unity 3D Game Development"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={<span>Game Development Beyond Imagination!</span>}
      />
      <AppDevelopmentWhy
        img="unity2"
        subTitle="Unity 3D Game Development"
        title="Why Us? Because We Are Transformers!"
        description={
          <span>
            Are you ready to embark on a journey of unity games 3D where
            imagination becomes a reality? Look no further! At{" "}
            <b>GFS IT Solutions</b>, the best Unity game development company, we
            are passionate pioneers in Unity 3D game development services. Our
            team of skilled artisans merges creativity with technical expertise
            to craft extraordinary Unity games 3D experiences that leave players
            spellbound.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="What Will You Get When You Confide In Our 3D Game Studio?"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="Unlock the Power of Unity 3D With "
        title="One Of The Remarkable Unity Game Development Companies!"
        description={
          <span>
            With Unity 3D as our canvas, our Unity game developers paint
            immersive worlds that transport players to realms they've only
            dreamed of. Our developers wield the tools of this robust game
            engine to bring your visions to life, creating captivating gameplay,
            stunning visuals, and seamless interactions. Prepare for an
            unforgettable adventure where the boundaries of reality are
            shattered.
            <br />
            <br />
            Get ready to embark on an adventure like no other, where the only
            limit is the sky!
          </span>
        }
        img="unity3"
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

export default Unity;
