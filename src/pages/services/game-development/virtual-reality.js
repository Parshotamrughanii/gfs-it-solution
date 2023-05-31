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
    title: "Cutting-Edge Technology",
    description:
      "The latest advancements in technology power our VR game development services. We harness the potential of virtual reality to create lifelike graphics, seamless interactions, and immersive gameplay. Get ready to be blown away as our virtual reality game development company pushes the boundaries of what is possible in virtual reality gaming.",
  },
  {
    title: "Engaging Storytelling",
    description:
      "A great VR game is more than just stunning visuals; it's an immersive narrative that captivates your mind and heart. Our virtual reality game development company understands the power of storytelling, thus weaving compelling narratives that will keep you hooked from start to finish. ",
  },
  {
    title: "Interactive Gameplay",
    description:
      "Virtual reality is all about interaction and engagement. Our virtual environment game development services prioritize intuitive controls and seamless gameplay mechanics. Whether wielding a sword, casting spells with your hands, or exploring vast landscapes, our games provide a truly immersive and interactive experience.",
  },
  {
    title: "Customization and Personalization",
    description:
      "Our VR game development firm offers a wide range of customization options, allowing you to tailor your in-game character, abilities, and surroundings to suit your personal style. Whether you want to be a mighty warrior, a masterful magician, or a futuristic space explorer, the choice is yours!",
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
const VirtualReality = () => {
  return (
    <div>
      <Navbar />
      <AppDevelopmentBanner
        bannerImg={bannerImg}
        img="virtual1"
        title="VR Game Development Services"
        handleGetInTouch={() => (window.location.href = "/contactus")}
        description={<span>Taking You Beyond Your Imagination</span>}
      />
      <AppDevelopmentWhy
        img="virtual2"
        subTitle="VR Game Development Services"
        title="Escape Reality, Embrace Virtuality: Discover the Thrill of VR Games!"
        description={
          <span>
            Step into the realm of virtual reality game development, where
            imagination becomes a reality, and gaming transcends the boundaries
            of your wildest dreams. As a passionate VR game developer, we are
            here to take you on an exhilarating journey through the virtual
            realms and provide you with top-notch VR game development services
            that will leave you spellbound.
          </span>
        }
      />
      <AppDevelopmentService
        headingTitle="Where Dreams Come to Life: Explore Limitless Worlds in VR Games!"
        data={boxData}
      />

      <AppProductDevelopment
        subTitle="VR Game Development Services"
        title="Your Adventure Awaits: Embark on Epic Journeys in VR With Us!"
        description={
          <span>
            At <b>GFS IT Solutions</b>, we are more than just a VR game
            development company. We are your companions in the virtual universe,
            crafting immersive experiences that transport you to captivating
            worlds. Our team of talented developers, designers, and storytellers
            work tirelessly to create virtual environments that ignite your
            imagination and bring your gaming fantasies to life.
            <br />
            <br />
            So, if you're ready to dive into the realm of virtual reality game
            development, look no further. Explore new dimensions, conquer epic
            challenges, and forge unforgettable memories in the virtual worlds
            we create. Get in touch with us today, and let the adventure begin!
          </span>
        }
        img="virtual3"
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

export default VirtualReality;
