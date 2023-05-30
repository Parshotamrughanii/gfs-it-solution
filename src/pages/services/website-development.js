/* eslint-disable */
import React from "react";
// import img from "../assets/images/inner-pages/mobile-app/bg1.png";
import ServiceHomePage from "../../../components/ServiceHomePage";
const WebsiteDevelopment = () => {
  const list = [
    {
      icon: "Mask group (2)",
      title: "ASP.NET",
      line1: "Highly Compatible",
      line2: "Fast Execution",
      line3: "Large Ecosystem",
      line4: "Lesser Coding",
     onClicks: ()=>{window.location.href=('/services/website-development/asp-net')},
    },
    {
      icon: "Mask group (3)",
      title: "TYPESCRIPT",
      line1: "JSL Libraries Support",
      line2: "Object-oriented Language",
      line3: "Cross-platform Compatible",
      line4: "Highly Productive ",
     onClicks: ()=>{window.location.href=('/services/website-development/typscript')},
    },
    {
      icon: "Mask group (4)",
      title: "PYTHON",
      line1: "Extensive Libraries",
      line2: "Community Support",
      line3: "Code Reusability",
      line4: "Highly Efficient",
     onClicks: ()=>{window.location.href=('/services/website-development/python')},
    },
    {
      icon: "Group (9)",
      title: "ANGULAR",
      line1: "MEAN Stack",
      line2: "Reusable Components",
      line3: "Two-way Data Binding",
      line4: "Dependency Injection",
     onClicks: ()=>{window.location.href=('/services/website-development/angular')},
    },
    {
      icon: "Group 1342",
      title: "PHP",
      line1: "Highly Secure",
      line2: "Flexible",
      line3: "Low Maintenance",
      line4: "Enhanced Scalability",
     onClicks: ()=>{window.location.href=('/services/website-development/php')},
    },
    {
      icon: "Vector (5)",
      title: "Laravel",
      line1: "Pre-built Components",
      line2: "Multilingual Options",
      line3: "Highly Secure",
      line4: "Highly Flexible",
     onClicks: ()=>{window.location.href=('/services/website-development/laravel')},
    },
    {
      icon: "wordpress 1",
      title: "WordPress",
      line1: "Functionalities Plugin",
      line2: "Multiple Hosting Platform",
      line3: "Community Support",
      line4: "Customer Analytics",
     onClicks: ()=>{window.location.href=('/services/website-development/wordpress')},
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
      name: "Games and Entertainment",
      id: "pills-profile-tab",
      dataBsTarget: "#pills-profile",
      ariaControls: "pills-profile",
    },
    {
      name: "Travel and Tourism",
      id: "pills-contact-tab",
      dataBsTarget: "#pills-contact",
      ariaControls: "pills-contact",
    },
    {
      name: "Logistics",
      id: "pills-logistics-tab",
      dataBsTarget: "#pills-logistics",
      ariaControls: "pills-logistics",
    },
    {
      name: "Manufacturing",
      id: "pills-manufacturing-tab",
      dataBsTarget: "#pills-manufacturing",
      ariaControls: "pills-manufacturing",
    },
    {
      name: "Healthcare",
      id: "pills-healthcare-tab",
      dataBsTarget: "#pills-healthcare",
      ariaControls: "pills-healthcare",
    },
    {
      name: "Banking & Finance",
      id: "pills-banking-tab",
      dataBsTarget: "#pills-banking",
      ariaControls: "pills-banking",
    },
  ];

  const secondTabsData = [
    {
      name: "Your digital Doorstep",
      id: "pills-customer-tab",
      dataBsTarget: "#pills-customer",
      ariaControls: "pills-customer",
    },
    {
      name: "Increased Visibility",
      id: "pills-marketing-tab",
      dataBsTarget: "#pills-marketing",
      ariaControls: "pills-marketing",
    },
    {
      name: "Business Growth",
      id: "pills-efficiency-tab",
      dataBsTarget: "#pills-efficiency",
      ariaControls: "pills-efficiency",
    },
    {
      name: "Expansion in Customer Base",
      id: "pills-expansion-tab",
      dataBsTarget: "#pills-expansion",
      ariaControls: "pills-expansion",
    },
  ];

  return (
    <div>
      <ServiceHomePage
        // section banner -one
        bgImage="linear-gradient(181.22deg, #404D65 1.21%, #50627B 99.14%)"
        bgColor="linear-gradient(181.22deg, #404D65 1.21%, #50627B 99.14%)"
        bannerImage="Group (7)"
        bannerTitle="Web Development Services"
        bannerDescritption={
          <>
            Welcome to our digital wonderland, where we offer bespoke
            professional website development services that cater to your every
            need. <em>From front-end design to back-end development</em>,
            <b>GFS IT Solutions</b> makes sure your website is a masterpiece
            that stands out in the digital realm. Our web development agency
            understands that every business is unique, which is why we offer
            customized solutions to various industries. We ensure that your
            website not only looks great but is also optimized for search
            engines and user experience.
            <br />
            <br />
            <b>
              Choose our web design and development services, and we'll ensure
              that your website is not just a digital presence, but a digital
              masterpiece!
            </b>
          </>
        }
        //Mobile App Development section
        appDevelopBanner="Group (8)"
        appDevelopSubHeading="Web Development Consultants"
        appDevelopHeading="Helping You Build Your Digital Dreamscapes!"
        appDevelopDescription={
          <>
            Our expert team specializes in web portal development and custom web
            development services, tailored to meet the unique needs of our
            clients. We believe that a website is more than just an online
            presence -
            <b>
              it's a digital extension of your brand, a gateway to your
              business, and a platform for growth
            </b>
            . That's why we take a holistic approach to affordable web
            development, combining our technical expertise with creative flair
            to build websites that are not only visually stunning but also
            highly functional and user-friendly.
            <br />
            <br />
            <em>
              
              Whether you're looking to build a simple website or a complex web
              application, GFS IT Solutions has the expertise to bring your
              vision to life
            </em>
            .
            <br />
            <br />
            <b>
              Don't Just Survive; Thrive With Our Professional Website
              Development Services!
            </b>
          </>
        }
        //Turn your ideas sections
        ideasHeading="From Concept To Launch, We Back You Up With A Slew Of Tools!"
        ideasDescription={
          <span>
            From building responsive websites to crafting seamless user
            experiences, our top web development company in USA has got you
            covered via innovative website development technologies and
            frameworks.
          </span>
        }
        mainBoxSliderBgColor="#3D4962"
        imgSliderBackgroundColor="#293348"
        data={list}
        //OW WE ARE EMPOWERING DIFFERENT INDUSTRIES?
        tabHeading="Revolutionizing Industries: How We Empower with Cutting-Edge Solutions"
        tabList={tabList}
        //tab slider text
        title1="Education"
        description1={
          <span>
            <b>GFS IT Solutions</b>, the leading website designing development
            company, is revolutionizing the education sector by providing
            innovative digital solutions that empower students and educators
            alike.
            <em>
              From developing interactive e-learning platforms to creating
              user-friendly interfaces for academic institutions
            </em>
            , our web development services company USA is helping schools and
            universities stay ahead of the curve and prepare students for the
            future.
          </span>
        }
        image1="Rectangle 9410"
        title2="Games and Entertainment"
        description2={
          <span>
            Our web portal development company is taking the games and
            entertainment sector to new heights by providing cutting-edge
            solutions that are changing the game.
            <em>From visually stunning graphics to seamless gameplay</em>, we
            are revolutionizing way we think about entertainment and setting the
            standard for the industry. With us, the possibilities are endless.
          </span>
        }
        image2="Games and Entertainment"
        title3="Travel and Tourism"
        description3={
          <span>
            As the world continues to open up, the travel and tourism sector is
            poised for a resurgence. At the forefront of this resurgence is
            <b>GFS IT Solutions</b>, empowering businesses in the industry to
            revolutionize their online presence.
            <em>
              From crafting dynamic booking platforms to building immersive
              virtual tours
            </em>
            , we are paving the way for a new era of travel, one where the
            possibilities are as limitless as the horizon itself.
          </span>
        }
        image3="Travel and Tourism"
        title4="Logistics"
        description4={
          <span>
            GFS IT Solutions, the top-notch website development service
            provider, is revolutionizing the logistics sector with its
            cutting-edge solutions. Our expert developers navigate complex
            logistics challenges with ease, crafting custom software that
            streamlines supply chain operations, optimizes routes, and maximizes
            efficiency. With our transformative technology, logistics companies
            can chart a course toward greater success and profitability, leaving
            their competitors in the wake!
          </span>
        }
        image4="Logistics"
        title5="Manufacturing"
        description5={
          <span>
            We are shaking up the manufacturing industry with its cutting-edge
            digital solutions. Through innovative website development
            technologies and frameworks, <b>GFS IT Solutions</b> empowers
            manufacturers to streamline their operations, boost productivity,
            and maximize profitability.
            <em>
              From optimizing supply chains to enhancing customer engagement
            </em>
            , we are revolutionizing way manufacturers do business in the
            digital age, one website at a time.
          </span>
        }
        image5="Manufacturing"
        title6="Healthcare"
        description6={
          <span>
            We are not just a cross platform web application development
            consultant, we are a game-changer in the healthcare industry.
            <em>
              From streamlining appointment booking to delivering personalized
              telemedicine services
            </em>
            , our digital solutions are reshaping the landscape of healthcare.
            With us, healthcare providers can deliver exceptional patient
            experiences that go beyond the ordinary!
          </span>
        }
        image6="Healthcare"
        title7="Banking & Finance"
        description7={
          <span>
            As the banking and finance industry shifts towards a digital-first
            approach, <b>GFS IT Solutions</b> is at the forefront of this
            revolution, empowering financial institutions with cutting-edge
            website development solutions.
            <em>
              From creating dynamic, user-friendly interfaces to implementing
              secure payment gateways
            </em>
            , our expertise helps banks and other financial entities to offer
            seamless online experiences to their customers. Through innovation
            and skill, our company is shaping the future of finance!
          </span>
        }
        image7="Banking & Finance"
        //WE UNDERSTAND YOUR NEEDS!
        needsHeading=" Why GFS IT Solutions Web Development Is Crucial For YOU"
        secondTabsData={secondTabsData}
        needsDecscription1={
          <>
            In today's digital world, having a website is like having a virtual
            storefront. It's the first thing customers see when they search for
            your business online. A website serves as a web development business
            to business platform, where potential clients can learn more about
            your products or services, and get in touch with you easily. With
            our web portal development services, get ready to create a seamless
            experience for your customers, making it easy to navigate and use!
          </>
        }
        needsDecscription2={
          <>
            A website is an excellent marketing tool that helps to increase the
            visibility of your brand. With a well-designed website, you can
            attract potential customers from all over the world, regardless of
            your business's location. Local business web development allows you
            to cater to your target audience in your locality, creating a more
            personalized experience for your customers.
          </>
        }
        needsDecscription3={
          <>
            A website provides an opportunity for business growth by expanding
            your RR: <b>Reach and Revenue</b>. With custom web development
            services, you can generate leads, make sales, and offer customer
            support 24/7, even when your physical location is closed. It's a
            platform for sharing information, engaging with customers, and
            building lasting relationships. With our small business web
            development agency, you can create a website tailored to your
            business needs, helping you achieve your business goals and grow
            your brand.
          </>
        }
        needsDecscription4={
          <>
            Your website is like a blank canvas - a space where you can showcase
            your brand, tell your story, and connect with customers on a deeper
            level. With the right design and content, your website can become a
            powerful marketing tool that helps you expand your customer base.
            With our enterprise CMS web development consultants, you can get
            your ideal customers knocking at your doorstep, that too without
            breaking the bank.
          </>
        }
        needsSubHeading={
          <span>
            <b>GFS IT Solutions</b>, Where Ideas Connect! Call Us To Build
            Websites That Build Your Business!
          </span>
        }
      />
    </div>
  );
};

export default WebsiteDevelopment;
