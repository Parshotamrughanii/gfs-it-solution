/* eslint-disable */
import React from "react";
// import ServiceHomePage from "../../../../resueable-components/services-home-page/ServiceHomePage";
// import img from "../../../../assets/images/inner-pages/mobile-app/Rectangle 9446.png";
import ServiceHomePage from "../../../components/ServiceHomePage";
import BlockChainCTN from "../../../components/BlockChainCTN";
import useIntersectionAnimations from "../../../components/UseIntersectionAnimations";
const BlockchainDevelopmentServices = () => {
    useIntersectionAnimations()

  const list = [
    {
      icon: "Wallet",
      title: "Wallet",
      line1: "Electrum Wallet",
      line2: "Jaxx Wallet",
      line3: "Samurai Wallet",
      line4: "Paper Wallet",
      onClicks: () => {
        window.location.href =
          "/services/blockchain-development/wallet";
      },
    },
    {
      icon: "Private Blockchain",
      title: "Private Blockchain",
      line1: "Hyperledger Fabric",
      line2: "Quorum",
      line3: "R3 Corda",
      line4: "Tezos",
       onClicks: () => {
        window.location.href =
          "/services/blockchain-development/Private-blockchain";
      },
    },
    {
      icon: "Exchange",
      title: "Exchange",
      line1: "Fast Development",
      line2: "Anonymity",
      line3: "Highly Secure",
      line4: "Irreversible Transactions",
       onClicks: () => {
        window.location.href =
          "/services/blockchain-development/exchange";
      },
    },
    {
      icon: "NFT Marketplace",
      title: "NFT Marketplace",
      line1: "Open sea",
      line2: "Nifty Gateway",
      line3: "Rarible",
      line4: "SuperRate & Binance",
       onClicks: () => {
        window.location.href =
          "/services/blockchain-development/nft-marketplace";
      },
    },
    {
      icon: "Ethereum",
      title: "Ethereum",
      line1: "Secure",
      line2: "Community support",
      line3: "Asset Issuance",
      line4: "Fast & Uncensored",
       onClicks: () => {
        window.location.href =
          "/services/blockchain-development/ethereum";
      },
    },
    {
      icon: "Hyperledger",
      title: "Hyperledger",
      line1: "Solidity & EVM supported",
      line2: "Modular architecture",
      line3: "Smooth transactions",
      line4: "Immutable ledger",
       onClicks: () => {
        window.location.href =
          "/services/blockchain-development/hyperledger";
      },
    },
    {
      icon: "Smart Contract",
      title: "Smart Contract",
      line1: "Reliability",
      line2: "Avoids Third Part Reliance",
      line3: "Secure & Fast",
      line4: "Database management",
       onClicks: () => {
        window.location.href =
          "/services/blockchain-development/smart-contract";
      },
    },
  ];

  const tabList = [
    {
      name: "Entertainment",
      id: "pills-home-tab",
      dataBsTarget: "#pills-home",
      ariaControls: "pills-home",
    },
    {
      name: "Healthcare",
      id: "pills-profile-tab",
      dataBsTarget: "#pills-profile",
      ariaControls: "pills-profile",
    },
    {
      name: "Financial",
      id: "pills-contact-tab",
      dataBsTarget: "#pills-contact",
      ariaControls: "pills-contact",
    },
    {
      name: "Smart Cities, Smarter Living",
      id: "pills-logistics-tab",
      dataBsTarget: "#pills-logistics",
      ariaControls: "pills-logistics",
    },
    {
      name: "Supply Chain ",
      id: "pills-manufacturing-tab",
      dataBsTarget: "#pills-manufacturing",
      ariaControls: "pills-manufacturing",
    },
    {
      name: "Real Estate",
      id: "pills-healthcare-tab",
      dataBsTarget: "#pills-healthcare",
      ariaControls: "pills-healthcare",
    },
    {
      name: "Education",
      id: "pills-banking-tab",
      dataBsTarget: "#pills-banking",
      ariaControls: "pills-banking",
    },
  ];

  const secondTabsData = [
    {
      name: "Blockchain Consultation",
      id: "pills-customer-tab",
      dataBsTarget: "#pills-customer",
      ariaControls: "pills-customer",
    },
    {
      name: "Crypto Token Developments",
      id: "pills-marketing-tab",
      dataBsTarget: "#pills-marketing",
      ariaControls: "pills-marketing",
    },
    {
      name: "Crypto Exchange Software",
      id: "pills-efficiency-tab",
      dataBsTarget: "#pills-efficiency",
      ariaControls: "pills-efficiency",
    },
    {
      name: "NFT Art",
      id: "pills-competitive-tab",
      dataBsTarget: "#pills-competitive",
      ariaControls: "pills-competitive",
    },
    {
      name: "Hybrid Blockchain",
      id: "pills-hybrid-tab",
      dataBsTarget: "#pills-hybrid",
      ariaControls: "pills-hybrid",
    },
    {
      name: "Custom Blockchain",
      id: "pills-custom-tab",
      dataBsTarget: "#pills-custom",
      ariaControls: "pills-custom",
    },
    {
      name: "Metaverse Blockchain",
      id: "pills-metaverse-tab",
      dataBsTarget: "#pills-metaverse",
      ariaControls: "pills-metaverse",
    },
  ];

  return (
    <div>
      <ServiceHomePage
        // section banner -one
        bgImage="#000A40"
        bgColor="#000A40"
        bannerImage="Group (10)"
        bannerTitle="Blockchain Development"
        bannerDescritption={
          <>
            Blockchain technology is not just a buzzword, but a disruptive force
            changing the way we do business. It's high time you embrace the
            future with our cutting-edge blockchain development services.{" "}
            <b>But why us?</b> Because we empower business, startups, and
            individuals to harness the full potential of decentralized
            technology, creating innovative solutions that redefine industries
            and reshape the world. Join a thriving community of like-minded 3D
            NFT makers, visionaries, developers, and enthusiasts. Together, our
            blockchain development company will explore the possibilities
            blockchain development holds, and pave the way toward a more
            decentralized future!
          </>
        }
        //Mobile App Development section
        appDevelopBanner="blackchainerInner"
        appDevelopSubHeading="Hire Blockchain Developers"
        appDevelopHeading="Blockchain App Development Services Incentivizing Your Ideas!"
        appDevelopDescription={
          <>
            From cryptocurrencies to smart contracts, blockchain 3.0 technology
            has created a wave of disruption that shows no signs of slowing
            down. And <b>GFS IT Solutions</b> has plunged into this rage and
            decided to combine blockchain technology with art to create a unique
            and vibrant space that is truly one-of-a-kind.
            <br />
            <br />
            Our blockchain development services cater to{" "}
            <em>
              creating secure and transparent supply chain management systems to
              building decentralized marketplaces
            </em>
            . So, whether you're a business looking to explore the world of
            blockchain or a 3D NFT artist looking to take your work to the next
            level, we've got the expertise and experience to help you succeed.
          </>
        }
        //Turn your ideas sections
        ideasHeading="Our NFT Development Agency Got the Blockchain Tools To Universe-Ify Your World!"
        ideasDescription={
          <span>
            Blockchain development and NFT art creation services are all the
            rage right now, and we are leading the charge.
            <b> GFS IT Solutions</b> helps you enter the crypto sphere with
            confidence by using a slew of the latest technologies, and tools.
            Hire blockchain developers to get your next NFT project off the
            ground!
          </span>
        }
        data={list}
        //OW WE ARE EMPOWERING DIFFERENT INDUSTRIES?
        tabHeading="NFT Art Creation Services For Every Industry, Because One Chain Fits All!"
        tabList={tabList}
        mainBoxSliderBgColor="#293348"
        imgSliderBackgroundColor="#27282C"
        //tab slider text
        title1="Entertainment"
        description1={
          <span>
            <b>
              <em>Protecting Your Intellectual Property</em>
            </b>
            <br />
            <br />
            With the use of custom blockchain development technology, creators
            can protect their intellectual property rights and ensure that they
            are fairly compensated for their work. Blockchain-based platforms
            enable direct interaction between creators and fans, creating{" "}
            <em>
              new revenue streams and fostering a closer relationship between
              the two
            </em>
            .
          </span>
        }
        image1="enterment"
        title2="Healthcare"
        description2={
          <span>
            Our blockchain app development services USA unlock unprecedented
            efficiency and privacy for healthcare providers and patients alike.
            With our blockchain app development services, you can securely
            <em>
              {" "}
              manage patient data, streamline medical records, and automate
              supply chains
            </em>
            . This can lead to more accurate diagnoses, faster treatment, and
            improved patient outcomes.
          </span>
        }
        image2="healthcar"
        title3="Financial"
        description3={
          <span>
            Blockchain development uncovers new opportunities for{" "}
            <em>investment, remittance, and global commerce</em>. Our blockchain
            app development services USA enable secure and transparent
            transactions, reducing the need for intermediaries and increasing
            efficiency. More so, our crypto token development services can
            automate complex financial agreements, saving both time and money!
          </span>
        }
        image3="finicial"
        title4="Smart Cities, Smarter Living"
        description4={
          <span>
            banking GFS IT Solutions ' blockchain development helps leverage the
            power of DLT (distributed ledger technology) for urban planning,
            infrastructure management, and energy distribution. You can build
            smart cities with unprecedented levels of{" "}
            <em>efficiency, transparency, and sustainability</em> with us on
            your side!
          </span>
        }
        image4="smart-city"
        title5="Supply Chain "
        description5={
          <span>
            With us, it is possible now to track products from source to the
            consumer with complete transparency and verifiable data. Our
            blockchain product development ensures ethical and sustainable
            practices at every stage of the supply chain!
          </span>
        }
        image5="supplychain"
        title6="Real Estate"
        description6={
          <span>
            <b>
              <em>Buying and Selling Made Easy </em>
            </b>
            The real estate industry is known for its complex processes and high
            fees. Blockchain product development using smart contracts
            simplifies the buying and selling process, automating the transfer
            of ownership and payment and reducing the need for intermediaries.
          </span>
        }
        image6="realstate"
        title7="Education"
        description7={
          <span>
            Our blockchain app development services revolutionize the
            educational landscape with secure, verifiable digital credentials
            and decentralized learning platforms. Not to mention, Blockchain is
            the key to unlocking a world of accessible, lifelong learning!
          </span>
        }
        image7="Rectangle 9410"
        //WE UNDERSTAND YOUR NEEDS!
        needsHeading="From Crypto Tokens to NFT Art, We're Your Blockchain Heart! "
        secondTabsData={secondTabsData}
        needsDecscription1={
          <>
            Are you feeling lost in the world of blockchain? Let our blockchain
            app consultation experts guide you through the maze of
            decentralization, consensus mechanisms, and smart contracts.
            Blockchain development consulting caters to spreading knowledge
            about the technology and how it can be applied to your business.
          </>
        }
        needsDecscription2={
          <>
            Want to create your own cryptocurrency? Our crypto token development
            services have got you covered! We have a team of crypto wizards who
            can help you DESIGN, BUILD, and LAUNCH your very own digital
            currency. Get in touch with us to brew up a custom token that will
            leave your competitors in the dust!
          </>
        }
        needsDecscription3={
          <>
            Ready to start trading? Our crypto exchange software development is
            the perfect solution for those looking to buy and sell digital
            assets. We will help you get your hands on cutting-edge exchange
            software that will give you the power to buy, sell, and trade with
            ease.
          </>
        }
        needsDecscription4={
          <>
            Who says art has to be tangible? With our NFT art creation services,
            you can turn your digital artwork into a one-of-a-kind non-fungible
            token. It's the perfect way to showcase your creativity and make
            some crypto cash. If you are an artist looking to hop on the NFT
            craze, <b>GFS IT Solutions</b> is the best place to confide in.
          </>
        }
        needsDecscription5={
          <>
            Can't decide between a public or private blockchain? Our hybrid
            blockchains solution gives you the best of both worlds. You can
            enjoy the transparency and security of a public blockchain, while
            still maintaining control over your data.
          </>
        }
        needsDecscription6={
          <>
            Want a blockchain network that's tailor-made for your business? Our
            custom blockchain solutions allow you to create a decentralized
            ledger tailored to your specific needs. Just don't blame us if you
            become the next Satoshi Nakamoto!
          </>
        }
        needsDecscription7={
          <>
            The metaverse is the next big thing in digital entertainment and
            commerce. It's the future of digital ownership, so are you ready to
            dive into the world of virtual reality? Our metaverse blockchain
            expertise can help you create and trade virtual assets within a 3D
            environment. <b>GFS IT Solutions</b> give you the foundation you
            need to thrive in this new digital frontier!
          </>
        }
        needsSubHeading={
          <span>
            Your Road To Decentralization Starts Here. Contact Us Today, And
            Let's Build A Brighter, More Connected Future.
          </span>
        }
        CTN={<>
        <BlockChainCTN onClick={() => (window.location.href = "/contactus")} title="Get in Touch"/>
        </>}
      />
    </div>
  );
};

export default BlockchainDevelopmentServices;
