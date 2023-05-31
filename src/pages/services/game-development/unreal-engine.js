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
    title: "Power Of Unreal Engine",
    description: (
      <>
        When it comes to unreal engine game development, the possibilities are
        limitless. We help you harness the raw power of this cutting-edge game
        engine to create{" "}
        <em>
          {" "}
          realistic environments, lifelike characters, and jaw-dropping visual
          effects
        </em>
        .
      </>
    ),
  },
  {
    title: "Unreal Engine Mobile Games",
    description: (
      <>
        Unreal Engine isn't just for desktop and console games; it also excels
        in the realm of mobile gaming. Our Unreal game developers specialize in
        crafting Unreal engine mobile games that push the boundaries of what's
        possible on handheld devices. You get{" "}
        <em>
          optimized performance, seamless touch controls, and stunning graphics
          in your mobile game!
        </em>
      </>
    ),
  },
  {
    title: "Unmatched Realism And Immersion",
    description: (
      <>
        From <em>lifelike character animations to breathtaking landscapes</em>,
        Our Unreal Engine game development company uses advanced tools and
        technologies to breathe life into virtual worlds. With dynamic sound
        systems and realistic physics, get ready to make your players feel
        completely immersed in your game!
      </>
    ),
  },
  {
    title: "Unparalleled Support And Community",
    description:
      "As an Unreal game development studio, we understand the value of a strong support system and a thriving community. Having us on your side, you gain access to a vast network of developers, artists, and enthusiasts who are always ready to share knowledge and provide assistance. ",
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
const UnrealEngine = () => {
  return (
    <div>
      <Navbar />
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="unreal1"
        title="Unreal Game Development Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={
          <span>
            Unreal Game Developers Making Jaw-dropping Gameplay For You!
          </span>
        }
      />
      <AppDevelopmentWhy
        img="unreal2"
        subTitle="Unreal Game Development Services"
        title="We Make Games That Stand The Test Of The Time!"
        description={
          <span>
            So, why wait? Hire Unreal game developers and embark on an
            unforgettable gaming journey. Together, we will create games that
            captivate players, push the boundaries of technology, and leave a
            lasting impact on the gaming industry.
            <br />
            <br />
            Unleash the power of Unreal game development services with us, and
            let your imagination run wild. Get in touch with our Unreal engine
            game development company today, and let's redefine the future of
            gaming together.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="Unreal Engine Makes Your Game A Real Sensation!"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="Unreal Game Development Services"
        title="Our Game Studio, Where GAMES Are Made Future-proof!"
        description={
          <span>
            At our Unreal Engine game development company, we bring dreams to
            life and redefine the boundaries of gaming. With our expertise in
            game development in Unreal Engine, we create immersive, visually
            stunning, and captivating gaming experiences that leave players
            spellbound.
            <br />
            <br />
            When it comes to Unreal game development services, we are the
            pioneers you can rely on. We offer end-to-end solutions, from
            <em>concept design to deployment</em>, ensuring that your vision is brought
            to life with precision and excellence. Let us set the stage for
            truly breathtaking gaming experiences!
          </span>
        }
        img="unreal3"
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

export default UnrealEngine;
