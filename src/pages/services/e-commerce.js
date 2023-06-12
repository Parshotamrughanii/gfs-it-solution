/* eslint-disable */
import React from "react";
import ServiceHomePage from "../../../components/ServiceHomePage";
import Head from "next/head";
// import img from "../../../../assets/images/inner-pages/mobile-app/EBackground.png";
const EcommerceDevelopment = () => {
  const list = [
    {
      icon: "Shopify",
      title: "Shopify",
      line1: "Customized Theme",
      line2: "Community Support",
      line3: "Flexibility",
      line4: "Enhanced Security",
      onClicks: () => {
        window.location.href = "/services/e-commerce/shopify";
      },
    },
    {
      icon: "Magento",
      title: "Magento",
      line1: "Easy Integration",
      line2: "Customizable UI",
      line3: "Multi-language Support",
      line4: "Multi-currency Support",
      onClicks: () => {
        window.location.href = "/services/e-commerce/magento";
      },
    },
    {
      icon: "BigCommerce",
      title: "BigCommerce",
      line1: "SEO-friendly platform",
      line2: "Built-in marketing tools",
      line3: "Powerful API capabilities",
      line4: "Scalability",
      onClicks: () => {
        window.location.href = "/services/e-commerce/bigCommerce";
      },
    },
    {
      icon: "WooCommerce",
      title: "WooCommerce",
      line1: "Multi-currency Support",
      line2: "Easy Configuration",
      line3: "Built-in features & Plugins",
      line4: "Intuitive Interface",
      onClicks: () => {
        window.location.href = "/services/e-commerce/wooCommerce";
      },
    },
  ];

  const tabList = [
    {
      name: "Fashion",
      id: "pills-home-tab",
      dataBsTarget: "#pills-home",
      ariaControls: "pills-home",
    },
    {
      name: "Health and Beauty",
      id: "pills-profile-tab",
      dataBsTarget: "#pills-profile",
      ariaControls: "pills-profile",
    },
    {
      name: "Home and Lifestyle",
      id: "pills-contact-tab",
      dataBsTarget: "#pills-contact",
      ariaControls: "pills-contact",
    },
    {
      name: "Health & Wellness",
      id: "pills-logistics-tab",
      dataBsTarget: "#pills-logistics",
      ariaControls: "pills-logistics",
    },
    {
      name: "Electronics",
      id: "pills-manufacturing-tab",
      dataBsTarget: "#pills-manufacturing",
      ariaControls: "pills-manufacturing",
    },
    {
      name: "Food and Beverage",
      id: "pills-healthcare-tab",
      dataBsTarget: "#pills-healthcare",
      ariaControls: "pills-healthcare",
    },
  ];

  const secondTabsData = [
    {
      name: "Wearable Apps",
      id: "pills-customer-tab",
      dataBsTarget: "#pills-customer",
      ariaControls: "pills-customer",
    },
    {
      name: "Multiplatform Mobile Apps",
      id: "pills-marketing-tab",
      dataBsTarget: "#pills-marketing",
      ariaControls: "pills-marketing",
    },
    {
      name: "Business Apps",
      id: "pills-efficiency-tab",
      dataBsTarget: "#pills-efficiency",
      ariaControls: "pills-efficiency",
    },
  ];

  return (
    <div>
      <Head>
        <title>Hire Custom E-commerce Website Development Services</title>
        <meta
          name="description"
          content="Drive online sales with our expert e-commerce website development services. User-friendly interfaces, secure payment gateways, and optimized performance"
        />
      </Head>
      <ServiceHomePage
        // section banner -one
        bgImage="linear-gradient(180deg, #48987D -13.54%, #12403A 100%)"
        bgColor="linear-gradient(180deg, #48987D -13.54%, #12403A 100%)"
        bannerImage="Illustration (1)"
        bannerTitle="Ecommerce Development Solutions"
        bannerDescritption={
          <>
            Are you tired of dealing with clunky, outdated e-commerce websites
            that drive customers away? Look no further than our ecommerce web
            development services! We offer the latest and greatest in eCommerce
            design and functionality, all tailored specifically to meet the
            needs of your business. <br />
            <em>
              From sleek and modern designs to intuitive navigation and
              user-friendly features
            </em>
            , our e commerce business development got you covered. We are the
            architects of your online store, the creators of your digital
            marketplace, and the engineers of your eCommerce success! Say
            goodbye to boring, lackluster websites and hello to a vibrant,
            dynamic online presence that will attract customers and keep them
            coming back for more. Trust us, your bottom line will thank you!
            <br />
            <br />
            <b>
              From Code To Cart - Our Custom E-Commerce Website Development
              Services Build E-Business Art!
            </b>
          </>
        }
        //Mobile App Development section
        appDevelopBanner="Ecommerce web page-amico 1"
        appDevelopSubHeading="Custom E-Commerce Development Services"
        appDevelopHeading="From Clicks To Bricks - We Build Your eCommerce Empire!"
        appDevelopDescription={
          <>
            Building an eCommerce website is like constructing a digital
            storefront that not only attracts potential customers but also
            provides them with a seamless shopping experience. Just as a
            physical store requires a strong foundation, a well-designed
            eCommerce platform requires robust and custom e-commerce website
            development services to
            <em>
              ensure smooth navigation, secure transactions, and efficient order
              management
            </em>
            .
            <br />
            <br />
            <em>
              From designing a user-friendly interface to integrating payment
              gateways and shipping solutions
            </em>
            , our eCommerce developers have the skills and expertise to bring
            your digital store to life. Our B2B e-commerce development services
            & company works hand in hand with you to optimize your website for
            search engines and create a seamless checkout process that
            encourages repeat business.
            <br />
            <br />
            For international e-commerce consultancy, reach out to us today,
            because there comes no better tomorrow!
          </>
        }
        //Turn your ideas sections
        ideasHeading="From Concept To Launch, We Back You Up With A Slew Of Tools!"
        ideasDescription={
          <span>
            Our top rated eCommerce website development agency cashes in on a
            variety of tools, technologies, and frameworks to propose ecommerce
            solutions that CONVERT!
          </span>
        }
        data={list}
        //OW WE ARE EMPOWERING DIFFERENT INDUSTRIES?
        tabHeading="Revolutionizing Industries: How We Empower with Cutting-Edge Solutions"
        tabList={tabList}
        mainBoxSliderBgColor="#448F7B"
        imgSliderBackgroundColor="#448F7B"
        //tab slider text
        title1="Fashion"
        description1={
          <span>
            <b>
              Dress your brand for success with an eCommerce store that
              showcases your products in style
            </b>
            . Our e Commerce website development company empowers you to create
            <em>innovative, user-friendly</em> online stores that cater to your
            discerning clientele.
            <em>From cutting-edge designs to seamless browsing</em>, we'll help
            you make a statement in the ever-changing fashion industry.
            <br />
            <br />
            Turn your vision into reality and become the go-to destination for
            fashionistas everywhere with our ecommerce web development services!
          </span>
        }
        image1="fashion"
        title2="Health and Beauty"
        description2={
          <span>
            From skincare to supplements, the health and beauty industry is
            booming online. Our ecommerce website development agency will help
            you leverage the power of eCommerce to
            <em>
              reach a wider audience, increase sales, and build brand loyalty
            </em>
            .
          </span>
        }
        image2="beauty"
        title3="Home and Lifestyle"
        description3={
          <span>
            <b>Creating a Digital Sanctuary for the Modern Shopper</b>
            <br />
            <br />
            The way we shop for our homes has forever changed. In a world where
            convenience is key, our e-Commerce web development services help you
            create a digital sanctuary that reflects the warmth and comfort of a
            well-curated home. Your customers can explore an extensive range of
            products and easily find inspiration for their own spaces.
            <em>
              Whether you’re selling furniture, decor, or gardening supplies
            </em>
            , hire ecommerce web developer to create an exceptional online
            shopping experience that brings your customers' dream homes to life.
          </span>
        }
        image3="home"
        title4="Health & Wellness"
        description4={
          <span>
            <b>
              <em>Transform Lives with a Click</em>
            </b>
            <br />
            The health and wellness industry is booming as people prioritize
            self-care. Our e-Commerce web development services cater to the
            unique needs of the health and wellness sector, ensuring that your
            online store is a haven for those seeking to improve their lives.
            <b>
              Delight your customers with an intuitive platform that promotes
              your products and enhances their journey to wellness
            </b>
            .
          </span>
        }
        image4="healthh"
        title5="Electronics"
        description5={
          <span>
            In today’s digital age, electronics have become an essential part of
            our lives. Our top rated ecommerce website development agency will
            help you showcase your products in a way that’s both informative and
            engaging,
            <em>driving more sales and increasing customer satisfaction</em>.
          </span>
        }
        image5="electronic"
        title6="Food and Beverage"
        description6={
          <span>
            <b>
              <em>Savor the Flavor of Success in the Digital Marketplace</em>
            </b>
            <br />
            <br />
            From gourmet snacks to artisanal beverages, the food and beverage
            industry is bursting with opportunities for e Commerce business
            development growth. Our local eCommerce website development agency
            helps you create a virtual feast for the senses, enticing customers
            with mouthwatering visuals and easy-to-navigate shopping
            experiences.
            <b>
              Take your customers’ taste buds on a journey and make your online
              store a foodie's paradise
            </b>
            .
          </span>
        }
        image6="food"
        title7=""
        description7=""
        image7="Rectangle 9410"
        //WE UNDERSTAND YOUR NEEDS!
        needsHeading="How GFS IT Solutions Ecommerce Development Brings Store To Screen."
        secondTabsData={secondTabsData}
        needsDecscription1={
          <>
            To make ecommerce solutions that hit the bullseye, our e commerce
            store development service begins by understanding the client's
            needs. We put ourselves in their shoes, get into the nitty-gritty of
            their business, and listen carefully to their requirements. Once we
            have a deep understanding of what the client wants to achieve, our
            ecommerce website development agency can start building the right
            ecommerce solutions to meet their objectives.
          </>
        }
        needsDecscription2={
          <>
            With the client's needs firmly in mind, our local eCommerce website
            development agency gets to work developing a tailored strategy
            that's fit for purpose. This involves mapping out the
            <em>
              customer journey, designing the user interface, integrating
              third-party software, and developing a marketing plan
            </em>
            to drive traffic and sales. Our e-commerce consultancy is bespoke,
            and we build each ecommerce solution from the ground up to ensure it
            meets the client's exact requirements.
          </>
        }
        needsDecscription3={
          <>
            Once our ecommerce experts have developed the perfect solution, it's
            time to put it into action. We rigorously test each component of the
            solution to ensure it's functioning as intended, and our custom
            e-commerce development services provide the client with
            comprehensive training and support to ensure they're comfortable
            using their new ecommerce platform.
          </>
        }
        needsSubHeading={
          <span>
            Don't Let Your E-Commerce Dreams Become A Website Nightmare. Hire
            Ecommerce Web Developer Now!
          </span>
        }
      />
    </div>
  );
};

export default EcommerceDevelopment;
