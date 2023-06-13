/* eslint-disable */
import React from "react";
import ServiceHomePage from "../../../components/ServiceHomePage";
import Head from "next/head";
// import img from "../../../../assets/images/inner-pages/mobile-app/bg-game.png";
const GameDevelopmentServices = () => {
  const list = [
    {
      icon: "Unity 3D",
      title: "Unity 3D",
      line1: "Multi-platform Compatible",
      line2: "Incredible graphics",
      line3: "R/AR Support",
      line4: "Decentralized Platform",
      onClicks:"/services/game-development/unity3d"
      
    },
    {
      icon: "Casual Games",
      title: "Casual Games",
      line1: "Higher Replay Value",
      line2: "Colorful Aesthetics",
      line3: "Immersive Gameplay",
      line4: "Short & Easy Game Levels",
     onClicks:"/services/game-development/casual-game"
      
    },
    {
      icon: "Unreal Engine",
      title: "Unreal Engine",
      line1: "Real-time Rendering",
      line2: "Platform-agonistic",
      line3: "Stunning Graphics",
      line4: "Open-source Code",
     onClicks:"/services/game-development/unreal-engine"
     
    },
    {
      icon: "Augmented Reality",
      title: "Augmented Reality",
      line1: "3D content and design",
      line2: "Immersive animations",
      line3: "Feature-packed gameplay",
      line4: "In-game analytics",
     onClicks:"/services/game-development/augmented-reality"
    },
    {
      icon: "Virtual Reality",
      title: "Virtual Reality",
      line1: "360-degree Visuals",
      line2: "World-class Gameplay",
      line3: "Highly Interactive",
      line4: "Intuitive Graphics",
     onClicks:"/services/game-development/virtual-reality"
      
    },
    {
      icon: "Metaverse",
      title: "Metaverse",
      line1: "Interoperable Standards",
      line2: "P2E Mechanics",
      line3: "Asset-trade",
      line4: "Smart Contract",
     onClicks:"/services/game-development/metaverse"
     
    },
  ];

  const tabList = [
    {
      name: "Education",
      id: "pills-home-tab",
      dataBsTarget: "#pills-home",
      ariaControls: "pills-home",
    },
    {
      name: "Sports",
      id: "pills-profile-tab",
      dataBsTarget: "#pills-profile",
      ariaControls: "pills-profile",
    },
    {
      name: "Healthcare",
      id: "pills-contact-tab",
      dataBsTarget: "#pills-contact",
      ariaControls: "pills-contact",
    },
    {
      name: "Marketing & Advertising",
      id: "pills-logistics-tab",
      dataBsTarget: "#pills-logistics",
      ariaControls: "pills-logistics",
    },
    {
      name: "Training & Simulation",
      id: "pills-manufacturing-tab",
      dataBsTarget: "#pills-manufacturing",
      ariaControls: "pills-manufacturing",
    },
    {
      name: "Entertainment",
      id: "pills-healthcare-tab",
      dataBsTarget: "#pills-healthcare",
      ariaControls: "pills-healthcare",
    },
    {
      name: "Blockchain and Cryptocurrency",
      id: "pills-banking-tab",
      dataBsTarget: "#pills-banking",
      ariaControls: "pills-banking",
    },
  ];

  const secondTabsData = [
    {
      name: "Game Design",
      id: "pills-customer-tab",
      dataBsTarget: "#pills-customer",
      ariaControls: "pills-customer",
    },
    {
      name: "Game Development",
      id: "pills-marketing-tab",
      dataBsTarget: "#pills-marketing",
      ariaControls: "pills-marketing",
    },
    {
      name: "Art & Animation",
      id: "pills-efficiency-tab",
      dataBsTarget: "#pills-efficiency",
      ariaControls: "pills-efficiency",
    },
    {
      name: "QA & Testing",
      id: "pills-competitive-tab",
      dataBsTarget: "#pills-competitive",
      ariaControls: "pills-competitive",
    },
    {
      name: "Support & Maintenance",
      id: "pills-hybrid-tab",
      dataBsTarget: "#pills-hybrid",
      ariaControls: "pills-hybrid",
    },
  ];

  return (
    <div>
      <Head>
        <title>Custom Game Design & Development Services | Hire Game Developers</title>
        <meta name="description" content="Level up your gaming vision with our custom game design and development services. Engaging gameplay, immersive graphics, and seamless experiences" />
      </Head>
      <ServiceHomePage
        // section banner -one
        bgImage="linear-gradient(180deg, #11143A -1.82%, rgba(10, 15, 80, 0.74) 118.19%)"
        bgColor="linear-gradient(180deg, #11143A -1.82%, rgba(10, 15, 80, 0.74) 118.19%)"
        bannerImage="Illustration (2)"
        bannerTitle="Game Development Services"
        bannerDescritption={
          <>
            At our game development company USA, we breathe life into the
            digital realm, transforming ideas into captivating gaming
            experiences. Our team of passionate{" "}
            <em>creators, developers, and storytellers</em> are committed to
            delivering top-notch custom mobile game development services that
            break boundaries and defy expectations. In a world where gaming is
            evolving at a breakneck pace, <b>GFS IT Solutions</b> is your
            partner in creating games that stand out.
            <br />
            <br />
            Let's Create a World of Adventure Together. Game On!
          </>
        }
        //Mobile App Development section
        appDevelopBanner="Group (11)"
        appDevelopSubHeading="Full-Cycle Game Development Services"
        appDevelopHeading="From Concept To Reality, Play On!"
        appDevelopDescription={
          <>
            <b>GFS IT Solutions</b>, being the eminent game production company,
            acts like a band of wizards, combining cutting-edge technology with
            artistic brilliance to create games that transcend reality. Our team
            of android game developers specializes in enterprise game
            development software making, from conception to launch, with
            pixel-perfect precision.
            <br />
            <br />
            Our VR game development immerses you in a world that is beyond your
            imagination. Our NFT games are like a treasure chest that unlocks a
            new level of excitement and adventure. Our Android and iOS game
            development services offer an unparalleled experience that keeps you
            coming back for more.
            <br />
            <br />
            <b>
              Outsource mobile game development now to cash in on the art of
              immersive storytelling!
            </b>
          </>
        }
        //Turn your ideas sections
        ideasHeading="From Concept To Launch, We Back You Up With A Slew Of Tools!"
        ideasDescription={
          <span>
            To craft a mesmerizing gaming experience, we capitalize on a myriad
            of creative tools and state-of-the technologies. The list goes on,
            but here are a few to satisfy your curious appetite.
          </span>
        }
        data={list}
        //OW WE ARE EMPOWERING DIFFERENT INDUSTRIES?
        tabHeading="Revolutionizing Industries: How We Empower with Cutting-Edge Solutions"
        tabList={tabList}
        mainBoxSliderBgColor="#11143A"
        imgSliderBackgroundColor="#292E55"
        //tab slider text
        title1="Education"
        description1={
          <span>
            In the ever-evolving educational landscape, game-based learning is a
            powerful tool to engage and inspire students. Our team at{" "}
            <b>GFS IT Solutions</b> develops immersive and interactive
            educational games that blend fun and learning, fostering a love for
            knowledge among learners of all ages.{" "}
            <b>
              We are igniting the spark of learning with our game development
              services!
            </b>
          </span>
        }
        image1="Education"
        title2="Sports"
        description2={
          <span>
            <b>Score BIG With Us!</b>
            <br />
            <br />
            We have just hit a home run with our latest game development in the
            sports genre. With stunning graphics and immersive gameplay, our
            sports app development involves a slam dunk for sports fans of all
            ages. The developers truly hit the ball out of the park with their
            attention to detail and dedication to creating an authentic fantasy
            sports app development experience.
          </span>
        }
        image2="Sports"
        title3="Healthcare"
        description3={
          <span>
            <b>Healing Through Play</b>
            <br />
            <br />
            The transformative power of games extends to the healthcare
            industry, where they can be used to enhance{" "}
            <em>
              patient engagement, support rehabilitation, and promote overall
              well-being
            </em>
            . At our gaming app development company, we craft innovative games
            that leverage the power of play to enable healthier and happier
            lives.
          </span>
        }
        image3="health"
        title4="Marketing & Advertising"
        description4={
          <span>
            Interactive experiences and games are the future of marketing and
            advertising. Our custom mobile game development services cater to
            bespoke branded games and experiences that{" "}
            <em>
              captivate audiences, strengthen brand loyalty, and drive customer
              engagement
            </em>{" "}
            – all while ensuring a memorable and enjoyable mobile game
            development outsourcing experience.
          </span>
        }
        image4="Marketing"
        title5="Training & Simulation "
        description5={
          <span>
            <b>Forging Skills in the Fires of Virtual Reality</b>
            <br />
            <b>GFS IT Solutions</b>, the premier mobile game development
            services, create realistic and engaging training simulations that
            allow users to hone their skills in a risk-free environment. Our
            games are designed to enhance
            <em>
              skill-building, decision-making, and problem-solving abilities
            </em>
            across various industries – from aviation to emergency response.
          </span>
        }
        image5="Training"
        title6="Entertainment"
        description6={
          <span>
            At our social gaming app development company, players{" "}
            <em>can explore new worlds, conquer challenges</em>, and{" "}
            <em>form bonds</em> that transcend the game itself. Our apps are
            like a campfire, drawing players in with the warmth of community and
            the excitement of shared experiences.
          </span>
        }
        image6="Entertainment"
        title7="Blockchain and Cryptocurrency"
        description7={
          <span>
            We are breaking new ground with our latest NFT game design and
            development. With the power of blockchain technology and NFTs,
            players can now truly own and control their in-game creations,
            making them a valuable assets in the gaming world. With our NFT game
            development services, get ready to own a piece of history that will
            stand the test of time!
          </span>
        }
        image7="Cryptocurrency"
        //WE UNDERSTAND YOUR NEEDS!
        needsHeading="Bullet-proof GFS IT Solutions Development Process "
        secondTabsData={secondTabsData}
        needsDecscription1={
          <>
            Our skilled game design and development tribe work meticulously to
            weave together <em>gameplay mechanics, captivating narratives, and
            beautiful visuals,</em> ensuring that each of our creations is a unique
            and unforgettable experience.
          </>
        }
        needsDecscription2={
          <>
            Our mobile games developers leverage the latest technologies and
            development processes to bring your game ideas to life. <em>From
            prototyping to final release</em>, our game development services ensure
            that every aspect of your game meets the highest standards of
            quality.
          </>
        }
        needsDecscription3={
          <>
            The talented artists and animators of our gaming app development
            company create striking visuals and fluid animations that captivate
            players and immerse them in the worlds we create. Each game is a
            masterpiece of artistry, where every detail is crafted with care and
            precision.
          </>
        }
        needsDecscription4={
          <>
            We take pride in delivering high-quality games that stand the test
            of time. Our rigorous QA and testing process ensures that GFS IT
            Solutions game development meets the highest standards of
            <em>performance, usability, and stability</em>.
          </>
        }
        needsDecscription5={
          <>
            At <b>GFS IT Solutions</b>, we believe that the journey of game design and
            development doesn't end at launch. Our dedicated support and
            maintenance team is always on hand to provide <em>ongoing updates,
            technical assistance, and improvements</em>, ensuring that your mobile
            game development outsourcing experience remains relevant and
            enjoyable for years to come.
          </>
        }
   
        needsSubHeading={
          <span>
            Call Us To Experience Breathtaking Games That Exceed Your Highest Hopes!
          </span>
        }
      />
    </div>
  );
};

export default GameDevelopmentServices;
