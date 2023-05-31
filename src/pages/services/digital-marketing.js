/* eslint-disable */
import React from "react";
import ServiceHomePage from "../../../components/ServiceHomePage";
import useIntersectionAnimations from "../../../components/UseIntersectionAnimations";
// import img from "../../../../assets/images/inner-pages/mobile-app/digital-marketing-bg.png";
const DigitalMarketing = () => {
    useIntersectionAnimations()

  const list = [
    {
      icon: "android-icon-png-2 1 (1)",
      title: "SEO",
      line1: "Link Analysis",
      line2: "URL optimization",
      line3: "Brand Awareness",
      line4: "Track able",
      onClicks: () => {
        window.location.href =
          "/services/digital-marketing/seo";
      },
    },
    {
      icon: "kotlin-icon-512x512-0o0lfw0b 1 (1)",
      title: "Google PPC",
      line1: "Cost-effective",
      line2: "Track able",
      line3: "Instant Traffic",
      line4: "More Leads",
         onClicks: () => {
        window.location.href =
          "/services/digital-marketing/google-ppc";
      },
    },
    {
      icon: "digital-marketing 1",
      title: "Social Media Marketing",
      line1: "Improved rankings",
      line2: "Brand recognization",
      line3: "Higher conversion rates",
      line4: "increased traffic",
         onClicks: () => {
        window.location.href =
          "/services/digital-marketing/social-media-marketing";
      },
    },
    {
      icon: "email-marketing 1",
      title: "Email Marketing",
      line1: "More revenue",
      line2: "Increase organic traffic",
      line3: "Cost-effective",
      line4: "Higher Credibility",
         onClicks: () => {
        window.location.href =
          "/services/digital-marketing/email-marketing";
      },
    },
    {
      icon: "android-icon-png-2 1 (2)",
      title: "Mobile Marketing",
      line1: "Target Global audience",
      line2: "Higher Profitability",
      line3: "Customer Analytics",
      line4: "Reduced Costs",
         onClicks: () => {
        window.location.href =
          "/services/digital-marketing/mobile-marketing";
      },
    },
    {
      icon: "kotlin-icon-512x512-0o0lfw0b 1 (2)",
      title: "Content Marketing",
      line1: "Customer Persona",
      line2: "SEO Optimization",
      line3: "More Impressions",
      line4: "Increased Revenues",
         onClicks: () => {
        window.location.href =
          "/services/digital-marketing/content-marketing";
      },
    },
  
    {
      icon: "target 1",
      title: "Affiliate Marketing",
      line1: "Effective Tracking",
      line2: "Affiliate Marketplace",
      line3: "Highly Secure",
      line4: "Cost-effective",
         onClicks: () => {
        window.location.href =
          "/services/digital-marketing/affiliate-marketing";
      },
    },
  ];

  const tabList = [
    {
      name: "Fashion & Apparel",
      id: "pills-home-tab",
      dataBsTarget: "#pills-home",
      ariaControls: "pills-home",
    },
    {
      name: "Tech & Innovation",
      id: "pills-profile-tab",
      dataBsTarget: "#pills-profile",
      ariaControls: "pills-profile",
    },
    {
      name: "Health & Wellness",
      id: "pills-contact-tab",
      dataBsTarget: "#pills-contact",
      ariaControls: "pills-contact",
    },
    {
      name: "Travel & Hospitality",
      id: "pills-logistics-tab",
      dataBsTarget: "#pills-logistics",
      ariaControls: "pills-logistics",
    },
    {
      name: "Education & eLearning",
      id: "pills-manufacturing-tab",
      dataBsTarget: "#pills-manufacturing",
      ariaControls: "pills-manufacturing",
    },
    {
      name: "Retail ",
      id: "pills-healthcare-tab",
      dataBsTarget: "#pills-healthcare",
      ariaControls: "pills-healthcare",
    },
    {
      name: "Finance ",
      id: "pills-banking-tab",
      dataBsTarget: "#pills-banking",
      ariaControls: "pills-banking",
    },
  ];

  const secondTabsData = [
    {
      name: "Consulting Services",
      id: "pills-customer-tab",
      dataBsTarget: "#pills-customer",
      ariaControls: "pills-customer",
    },
    {
      name: "ORM Services",
      id: "pills-marketing-tab",
      dataBsTarget: "#pills-marketing",
      ariaControls: "pills-marketing",
    },
    {
      name: "Lead Generation ",
      id: "pills-efficiency-tab",
      dataBsTarget: "#pills-efficiency",
      ariaControls: "pills-efficiency",
    },
  ];

  return (
    <div>
      <ServiceHomePage
        // section banner -one
      
        bgImage="linear-gradient(180deg, #7158AC -13.54%, #518ABC 100%)"
        bgColor="linear-gradient(180deg, #7158AC -13.54%, #518ABC 100%)"
        bannerImage="image 26"
        bannerTitle="Digital Marketing Services"
        bannerDescritption={
          <>
            If you're looking to stay ahead of the competition, brand
            development services are the way to go! It's not just about creating
            a website or posting on social media; it's about understanding your
            target audience and creating a unique digital marketing strategy
            that resonates with them. Whether you're a startup or an established
            business, our digital marketing can help you{" "}
            <em>
              increase your online visibility, drive traffic to your website,
              and ultimately, increase your ROI
            </em>
            .
            <br />
            <br />
            <b>
              {" "}
              DON'T BE SHY; GIVE US A TRY! Contact us now, and let's get your
              digital game on point with our digital marketing services for
              small businesses!
            </b>
          </>
        }
        //Mobile App Development section
        appDevelopBanner="Group 1358"
        appDevelopSubHeading="GFS Digital Marketing"
        appDevelopHeading="Tired Of Being Invisible Online? Let Us Help You Shine! "
        appDevelopDescription={
          <>
            Welcome to the digital era, where businesses thrive on the World
            Wide Web! Digital marketing is a cutting-edge strategy that
            leverages digital channels to{" "}
            <em>
              reach a wider audience, generate leads, and convert them into
              loyal customers
            </em>
            . At its core, affordable digital marketing involves using{" "}
            <b>search engines, social media platforms, email marketing,</b> and
            other digital channels to:
            <br />
            <br />
            
              • create strong online presence <br/>
              • build brand awareness<br/>
              • engage with customers in real-time <br/>
              <br/>
            <b>
              So, what are you waiting for? Don't let your business fall behind
              the times; call a marketing consultant online now!
            </b>
          </>
        }
        //Turn your ideas sections
        ideasHeading="Our Top Digital Marketing Agency Cuts Through The Digital Noise With Advanced Tools!"
        ideasDescription={
          <span>
            Our marketing consultant online has a caffeine addiction, which
            means they stay up all night researching the latest digital
            marketing services for small businesses. That's dedication, folks!
            And they put those skills to use with the latest tools in the biz.
          </span>
        }
        data={list}
        //OW WE ARE EMPOWERING DIFFERENT INDUSTRIES?
        tabHeading="Digital Marketing Services USA Giving Different Industries A Turbo BOOST!"
        tabList={tabList}
        mainBoxSliderBgColor="#75A8E1"
        imgSliderBackgroundColor="#75A8E1"
        //tab slider text
        title1="Fashion & Apparel"
        description1={
          <span>
            In the world of fashion, making an impact is as vital as the threads
            you weave. Conquer the digital landscape with customized strategies
            that elevate your brand to dazzling heights.{" "}
            <b>GFS IT Solutions </b>
            digital marketing will dress your online presence to the nines,
            capturing the hearts and minds of style aficionados across the
            globe. So why wait? Strut your stuff in the affordable digital
            marketing limelight today!
          </span>
        }
        image1="fashion"
        title2="Tech & Innovation"
        description2={
          <span>
            In the realm of tech and innovation, the online world is your
            playground. Our brand strategy & development services will charge
            your brand's presence with the energy it needs to thrive. We'll help
            you navigate the ever-changing landscape of algorithms and audience
            preferences, ensuring your cutting-edge products and ideas reach the
            right minds. Join the digital revolution now our lead generation
            digital marketing agency!
          </span>
        }
        image2="tech"
        title3="Health & Wellness"
        description3={
          <span>
            The quest for health and wellness is a journey that begins with a
            single click. Our affordable digital marketing services will
            transform your brand into a beacon of vitality in the digital realm.
            Attract seekers of wellness with content that{" "}
            <em>heals, empowers, and inspires</em>. Don't let your brand's
            message be buried under the sands of online obscurity. Hire digital
            marketing experts now!
          </span>
        }
        image3="healthh"
        title4="Travel & Hospitality"
        description4={
          <span>
            In the age of wanderlust, your brand's digital presence is the
            passport to success. Our brand digital marketing services will guide
            you through the labyrinth of online competition, helping you ascend
            to the summit of your industry. We'll create captivating content
            that entices travelers to embark on adventures with your brand as
            their trusted companion. Set sail on your digital voyage now with
            our digital marketing services online!
          </span>
        }
        image4="travel"
        title5="Education & eLearning"
        description5={
          <span>
            In the digital era, knowledge is power, and your brand's online
            presence is the key to unlocking it. Our online reputation
            management services will help you enlighten the minds of learners
            around the world, bringing your educational offerings to the
            forefront of the digital stage. Don't let your valuable wisdom be
            lost in the vast expanse of cyberspace. Ignite the digital spark of
            knowledge today with our B2B digital marketing services!
          </span>
        }
        image5="elearning"
        title6="Retail  "
        description6={
          <span>
            In the world of retail, digital marketing is like a shopping cart
            that helps you navigate the online marketplace. It allows you to
            showcase your products, connect with your customers, and provide a
            seamless shopping experience. Let our online advertising service
            providers help you fill your cart with success and take your retail
            business to new heights!
          </span>
        }
        image6="retail"
        title7="Finance"
        description7={
          <span>
            In the finance industry, digital marketing is like a vault that
            helps you protect your assets and attract new customers. It allows
            you to promote your financial services, connect with your customers,
            and provide valuable financial information. Let our affordable
            digital marketing services help you secure your digital vault and
            make your finance business happen!
          </span>
        }
        image7="fiance"
        //WE UNDERSTAND YOUR NEEDS!
        needsHeading="Ready To Soar? Choose GFS Digital Marketing Services NOW!!! "
        secondTabsData={secondTabsData}
        needsDecscription1={
          <>
            If you're struggling to navigate the complex world of digital
            marketing, our digital marketing consulting services are here to
            help. Our small business marketing consultant will work with you to
            create a tailored digital marketing strategy that will{" "}
            <em>
              generate leads, increase your online visibility, and improve your
              customer engagement
            </em>
            .
          </>
        }
        needsDecscription2={
          <>
            With our online reputation management services, we'll help you
            maintain a positive online presence and protect your brand's
            reputation. Our digital marketing services USA monitor your online
            reviews, respond to customer feedback, and address any negative
            reviews or comments to ensure your brand's message is consistent
            across all channels.
          </>
        }
        needsDecscription3={
          <>
            Need help generating leads? Our lead generation digital marketing
            agency has got you covered. Our lead generation services use proven
            strategies to attract potential customers and convert them into
            paying customers.{" "}
            <em>
              From targeted advertising and email marketing campaigns to content
              marketing
            </em>
            , our strategic digital marketing agency will help you reach your
            target audience and increase your revenue.
          </>
        }
        needsSubHeading={
          <span>
            Our Brand Digital Marketing Will Help You Hit Your Target Audience
            With All The Right Notes And Make Your Brand Sing!
          </span>
        }
      />
    </div>
  );
};

export default DigitalMarketing;
