/* eslint-disable */
import React from "react";
import ServiceHomePage from "../../../components/ServiceHomePage";
// import img from "../../../../assets/images/inner-pages/mobile-app/Background.png";


const UiUxDesigning = () => {
  const list = [
    {
      icon: "UI & Animation",
      title: "UI & Animation",
      line1: "Open-source platform",
      line2: "Customization",
      line3: "Feature0enrich apps",
      line4: "Great user experience",
      onClicks: ()=>window.location.href=('/services/uiux-designing/ui-animation'),
    },
    {
      icon: "Product Design",
      title: "Product Design",
      line1: "Higher Productivity",
      line2: "Java Supported",
      line3: "Consistent and Supportive",
      line4: "Google Supported",
         onClicks: ()=>window.location.href=('/services/uiux-designing/product-design'),
    },
    {
      icon: "Design Testing",
      title: "Design Testing",
      line1: "Single code-base Framework",
      line2: "It’s all Widget Feature",
      line3: "Open-Source",
      line4: "High Community Support",
         onClicks: ()=>window.location.href=('/services/uiux-designing/design-testing'),
    },
    {
      icon: "UX Research",
      title: "UX Research",
      line1: "Highly secure",
      line2: "Scalable",
      line3: "intuitive user interface",
      line4: "customer Base Analytics",
         onClicks: ()=>window.location.href=('/services/uiux-designing/ux-research'),
    },
    {
      icon: "Brand Strategy",
      title: "Brand Strategy",
      line1: "Cross-platform framework",
      line2: "Pre-built components",  
      line3: "Powerful command line interface",
      line4: "Cordova plugins",
         onClicks: ()=>window.location.href=('/services/uiux-designing/brand-strategy'),
    },
  ];

  const tabList = [
    {
      name: "Ecommerce",
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
      name: "Banking and Finance",
      id: "pills-contact-tab",
      dataBsTarget: "#pills-contact",
      ariaControls: "pills-contact",
    },
    {
      name: "Gaming",
      id: "pills-logistics-tab",
      dataBsTarget: "#pills-logistics",
      ariaControls: "pills-logistics",
    },
    {
      name: "Education",
      id: "pills-manufacturing-tab",
      dataBsTarget: "#pills-manufacturing",
      ariaControls: "pills-manufacturing",
    },
    {
      name: "Travel & Hospitality",
      id: "pills-healthcare-tab",
      dataBsTarget: "#pills-healthcare",
      ariaControls: "pills-healthcare",
    },
  ];

  const secondTabsData = [
    {
      name: "Improved User Experience",
      id: "pills-customer-tab",
      dataBsTarget: "#pills-customer",
      ariaControls: "pills-customer",
    },
    {
      name: "Increased ROI",
      id: "pills-marketing-tab",
      dataBsTarget: "#pills-marketing",
      ariaControls: "pills-marketing",
    },
    {
      name: "Enhanced Brand Image",
      id: "pills-efficiency-tab",
      dataBsTarget: "#pills-efficiency",
      ariaControls: "pills-efficiency",
    },
    {
      name: "Competitive Advantage",
      id: "pills-competitive-tab",
      dataBsTarget: "#pills-competitive",
      ariaControls: "pills-competitive",
    },
  ];
  return (
    <div>
      <ServiceHomePage
        // section banner -one
        bgImage="linear-gradient(180deg, #C975CB -13.54%, #7D527B 100%)"
        bgColor="linear-gradient(180deg, #C975CB -13.54%, #7D527B 100%)"
        bannerImage="Group"
        bannerTitle=" UI/UX DESIGNING"
        bannerDescritption={
          <>
            A good UI/UX design can make a world of difference when it comes to
            converting visitors into customers. Our UI UX designing services are
            all about creating user experiences that delight customers. From the
            moment they interact with your interface, we aim to create a
            positive and engaging experience that keeps them coming back for
            more. <br />
            <em>
              Whether you need a new mobile app, a web application, or a desktop
              software interface
            </em>
            , we have the expertise to create a user experience that truly
            delights. With our graphic design consultant, you can create a
            design that <b>drives conversions, increases revenue</b>, and
            <b>grows your business</b> .
          </>
        }
        //Mobile App Development section
        appDevelopBanner="Mobile UX-amico 1"
        appDevelopSubHeading="User Interface Design Services"
        appDevelopHeading="Design That Delights And Converts."
        appDevelopDescription={
          <>
            <b>Welcome to the Future of Interactive Experiences!</b>
            <br />
            <b>
              Are you tired of user interfaces that are difficult to navigate or
              frustrating to use?
            </b>
            Our creative UI UX design services can help. Our innovation and
            design consulting agency creates designs that make a difference,
            focusing on
            <em>usability, accessibility, and user satisfaction.</em>
            <br />
            <br />
            <b> GFS IT Solutions</b> designer offers a seamless
            <em>
              blend of art, technology, and user-centric design principles
            </em>
            that capture the essence of your brand and storytelling. Our UX and
            UI design services and consulting solutions create immersive digital
            landscapes that transport users into a world where their desires and
            needs are met with ease and delight.
            <br />
            <br />
            <em>
              
              Whether you're launching a new app, developing a software product,
              or redesigning an existing interface
            </em>
            , our UI UX designing services can help you create an interface that
            meets your needs and exceeds your customers' expectations.
          </>
        }
        //Turn your ideas sections
        ideasHeading="From Concept To Launch, We Back You Up With A Slew Of Tools!"
        ideasDescription="We capitalize on a plethora of tools and technologies to help you transform your average UI/UX into the highest echelons of business success. "
        data={list}
        mainBoxSliderBgColor="#B67DB6"
        imgSliderBackgroundColor="#B67DB6"
        //HOW WE ARE EMPOWERING DIFFERENT INDUSTRIES?
        tabHeading="Revolutionizing Industries: How We Empower with Cutting-Edge Solutions"
        tabList={tabList}
        //tab slider text
        title1="Ecommerce"
        description1={
          <span>
            E-commerce websites and apps require a UI / UX creative web designer
            to provide a seamless shopping experience for customers, including
            <em>
              easy navigation, clear product information, and smooth checkout
              processes
            </em>
            . Our creative UI UX design elevates the shopping experience,
            turning visitors into loyal customers, and one-time shoppers into
            repeat buyers!
          </span>
        }
        image1="ecommerce"
        title2="Healthcare"
        description2="In the ever-evolving healthcare industry, it is crucial to deliver intuitive, secure, and accessible platforms for patients, providers, and stakeholders. Our usability testing service provider caters to the unique needs of the healthcare sector, ensuring smooth navigation, easy access to information, and compliance with industry standards."
        image2="healthcar"
        title3="Banking and Finance"
        description3={
          <span>
            Financial institutions require interfaces that instill trust,
            streamline transactions and provide a user-friendly experience to
            customers. Our user experience design services are tailored to
            banks, lending firms, and fintech startups, ensuring a seamless
            experience that
            <em>
              retains customers, attracts new ones, reduces customer support
              costs, and increases revenue
            </em>
            .
          </span>
        }
        image3="banking"
        title4="Gaming"
        description4={
          <span>
            Gaming companies need an interface design service to create
            immersive and engaging interfaces for video games and mobile games,
            which are often complex and require high level of interactivity. Our
            UI/UX design company can help gaming companies to
            <em>
              increase engagement, improve player retention, and drive revenue
              growth
            </em>
            .
          </span>
        }
        image4="Games and Entertainment"
        title5="Education"
        description5={
          <span>
            Educational software and e-learning platforms require the usability
            testing service for websites to create intuitive interfaces for
            teachers and students to navigate, access content, and communicate
            with one another. Our interface design service for e-learning and
            educational institutions ensures that students remain engaged, and
            educators can effectively deliver content to enhance the learning
            experience.
          </span>
        }
        image5="Rectangle 9410"
        title6="Travel & Hospitality"
        description6={
          <span>
            Travelers and explorers crave seamless, inspiring, and user-friendly
            platforms to plan and book their adventures. Our full service web
            design for small businesses creates intuitive and immersive
            experiences that entice users to embark on their next journey with
            you!
          </span>
        }
        image6="hospilatiy"
        title7="Banking & Finance"
        description7="Our state-of-art services have played a pivotal role in empowering the education industry. By providing educators with new tools and capabilities, we are empowering education sectors to promote teaching and learning on a global scale. Our customized and well-designed toots like e-learning can make learning more accessible and convenient. From providing cloud–based learning management systems to students to improving communication with teachers, we are creating innovative and reliable solutions for the education industry."
        image7="Rectangle 9410"
        //WE UNDERSTAND YOUR NEEDS!
        needsHeading="UI/UX Is The Crown. Why You Need To Wear It?"
        secondTabsData={secondTabsData}
        needsDecscription1="UI/UX plays a crucial role in providing unparalleled user experience design services. Just like a well-designed car dashboard enables a driver to navigate seamlessly while driving, a well-designed UI/UX enhances a user's experience on a website or app, making it intuitive and easy to use!"
        needsDecscription2="A seamless user experience leads to increased customer satisfaction and loyalty, which ultimately results in higher revenue and profitability. In fact, a study shows that companies that invest in UI UX consultant services can see a return on investment of up to 100%."
        needsDecscription3="UX UI designer not only enhances the user experience but also helps establish a brand's image and reputation. A well-designed website or app reflects positively on the brand, making it stand out in a crowded market. Hire UI/UX web and mobile app designer now to foster positive user experiences, leading to positive reviews and word-of-mouth marketing, which further enhances a brand's reputation."
        needsDecscription4="In today's world, where every business has a digital presence, having a responsive web design service is a crucial competitive advantage. A seamless user experience sets a brand apart from its competitors, helping it gain market share and stay ahead of the curve."
        needsSubHeading="Our website design mockup service helps you picture the perfect website. Visualize your success now!"
      />
    </div>
  );
};

export default UiUxDesigning;
