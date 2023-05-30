/* eslint-disable */
import React from "react";
import { Navbar } from "components/Navbar";
import Footer from "components/Footer";
import Image from "next/image";
import LearnMoreButton from "components/LearnMoreButton";
import ServiceSectionSlider from "../../components/ServiceSectionSlider";
import UseIntersectionAnimations from "../../components/UseIntersectionAnimations";

const services = () => {
  UseIntersectionAnimations()

  return (
    <div>
      <Navbar />
      <div className="ServiceBanner">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col">
              <div className="service-box">
                <h1 className="animate-up">Services</h1>
                <p className="animate-right">
                  The digital landscape is vast, but with
                  <b>GFS IT Solutions</b> by your side, you'll navigate it with
                  confidence and style. We believe your online presence should
                  be a harmonious blend of
                  <em>beauty, function, and innovation</em>. Hence our
                  <b>designers, developers</b>, and
                  <b> marketers</b> are dedicated to crafting extraordinary
                  digital experiences that captivate and engage, all while
                  delivering on your business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ServiceSection1">
        <div className="container">
          <div className="row ServiceSection1-box">
            <div className="col-md-6 col-xl-8 text-left">
              <Image
                src={require("../assets/images/services/section1-top-img1.png")}
                className="top-img"
                alt=""
              />
              <h1 className="animate-right">Mobile App Development</h1>
              <p className="animate-left">
                At <b>GFS IT Solutions</b>, we believe that mobile app
                development is not just about creating an app; it's about
                creating an experience for your users. Our mobile app
                development company uses data-driven insights and a creative
                approach to ensure that your app not only looks great but also
                performs well and meets your business goals.
              </p>
              <div className="row animate-right">
                <div className="col-6 col-md-6 col-xl-6">
                  
                  <small>─ Android app development</small>
                </div>
                <div className="col-6 col-md-6 col-xl-6">
                  
                  <small>─ iOS app development</small>
                </div>
                <div className="col-6 col-md-6 col-xl-6">
                  <small>─ Custom mobile app development</small>
                </div>
                <div className="col-6 col-md-6 col-xl-6">
                  
                  <small>─ Mobile app design and prototyping</small>
                </div>
                <div className="col-6 col-md-6 col-xl-6">
                  
                  <small>─ App integration and migration</small>
                </div>
                <div className="col-6 col-md-6 col-xl-6">
                  <small>─ App maintenance and support</small>
                </div>
              </div>
              <LearnMoreButton
                onClick={() =>
                  (window.location.href = "/services/mobile-app-development  ")
                }
                title="Learn more"
              />
            </div>

            <div className="col-md-6 col-xl-4 ">
              <div className="development-img animate-left">
                <Image
                  src={require("../assets/images/services/section1-right-img1.png")}
                  className="right-img"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="middle-col">
            <div className="row ServiceSection1-box">
              <div className="col-md-6 col-xl-8 text-left">
                <Image
                  src={require("../assets/images/services/section1-top-img2.png")}
                  className="top-img"
                  alt=""
                />
                <h1 className="animate-right">Website Development</h1>
                <p className="animate-left">
                  In a constantly evolving digital landscape, our responsive web
                  designs ensure that your website flows seamlessly across
                  devices and screen sizes. Our skilled web developers compose
                  bespoke digital solutions designed to meet your specific
                  needs.
                  <em>
                    From e-commerce platforms to content management systems
                  </em>
                  , our web design and development services create the digital
                  infrastructure that propels your brand forward.
                </p>
                <div className="row animate-right">
                  <div className="col-6 col-md-6 col-xl-6">
                    
                    <small>─ Website Design </small>
                  </div>
                  <div className="col-6 col-md-6 col-xl-6">
                    
                    <small>─ Front-end Development</small>
                  </div>
                  <div className="col-6 col-md-6 col-xl-6">
                    <small>─ Back-end Development</small>
                  </div>
                  <div className="col-6 col-md-6 col-xl-6">
                    
                    <small>─ Web Hosting</small>
                  </div>
                  <div className="col-6 col-md-6 col-xl-6">
                    
                    <small>─ Maintenance and Support</small>
                  </div>
                  <LearnMoreButton
                    onClick={() =>
                      (window.location.href = "/services/website-development  ")
                    }
                    title="Learn more"
                  />
                </div>
              </div>

              <div className="col-md-6 col-xl-4">
                <div className="development-img animate-left">
                  <Image
                    src={require("../assets/images/services/section1-right-img2.png")}
                    className="right-img"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row ServiceSection1-box">
            <div className="col-md-6 col-xl-8 text-left">
              <Image
                src={require("../assets/images/services/uiux-graphics.png")}
                className="top-img"
                alt=""
              />
              <h1 className="animate-right">UI/UX Designing</h1>
              <p className="animate-left">
                We believe that UI/UX design is more than just creating a
                visually appealing website. It's about creating an intuitive and
                engaging user experience that ensures visitors stay on your site
                longer and convert into customers. Our UI/UX creative web
                designer team is well-versed in the creative UI UX design trends
                and technologies to provide you with a website that's not only
                modern but also optimized for performance.
              </p>
              <div className="row animate-right">
                <div className="col-12 col-md-12 col-xl-10">
                  <div className="row">
                    <div className="col-6 col-md-6 col-xl-6">
                      
                      <small>─ User Research</small>
                    </div>
                    <div className="col-6 col-md-6 col-xl-6">
                      
                      <small>─ Information Architecture</small>
                    </div>
                    <div className="col-6 col-md-6 col-xl-6">
                      
                      <small>─ Wireframing</small>
                    </div>
                    <div className="col-6 col-md-6 col-xl-6">
                      <small>─ Prototyping</small>
                    </div>

                    <div className="col-6 col-md-6 col-xl-6">
                      
                      <small>─ Visual Design</small>
                    </div>
                    <div className="col-6 col-md-6 col-xl-6">
                      
                      <small>─ Interaction Design</small>
                    </div>
                    <div className="col-6 col-md-6 col-xl-6">
                      
                      <small>─ Usability Testing</small>
                    </div>
                    <LearnMoreButton
                      onClick={() =>
                        (window.location.href = "/services/uiux-designing")
                      }
                      title="Learn more"
                    />
                  </div>
                </div>
                <div className="col-4"></div>
              </div>
            </div>

            <div className="col-md-6 col-xl-4">
              <div className="development-img animate-left">
                <Image
                  src={require("../assets/images/services/uiux.png")}
                  className="right-img"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ServiceSection2">
        <div className="wrapper">
          <div className="container">
            <div className="row ServiceSection2-box">
              <div className="col-md-6 col-xl-8 text-left">
                <Image
                  src={require("../assets/images/services/ecommerce-icon.png")}
                  className="top-img animate-left"
                  alt=""
                />
                <h1 className="animate-right">Ecommerce Development</h1>
                <p className="animate-left">
                  In today's digital age, e-commerce has become the essential
                  aspect of any business. At <b>GFS IT Solutions</b>, we
                  specialize in e-commerce development solutions tailored to
                  meet the unique needs of our clients.
                  <em>From small businesses to large enterprises</em>, our top
                  rated ecommerce website development agency has the expertise
                  to help you succeed in the competitive online marketplace.
                </p>
                <div className="row animate-right">
                  <div className="col-12 col-md-6">
                    <small>─ E-commerce website design </small>
                  </div>
                  <div className="col-12 col-md-6">
                    <small>─ E-commerce website development </small>
                  </div>
                  <div className="col-12 col-md-6">
                    <small>─ Payment gateway integration </small>
                  </div>
                  <div className="col-12 col-md-6">
                    <small>─ Shopping cart development </small>
                  </div>
                  <div className="col-12 col-md-6">
                    <small>─ Product catalog development </small>
                  </div>
                  <div className="col-12 col-md-6">
                    <small>─ Order management system development </small>
                  </div>
                  <div className="col-12 col-md-6">
                    <small>─ E-commerce maintenance and support </small>
                  </div>
                  <LearnMoreButton
                    onClick={() =>
                      (window.location.href = "/services/e-commerce")
                    }
                    title="Learn more"
                  />
                </div>
              </div>

              <div className="col-md-6 col-xl-4">
                <div className="ecommerce-img animate-left">
                  <Image
                    src={require("../assets/images/services/ecommerce-img.png")}
                    className="right-img"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="middle-col">
              <div className="row ServiceSection2-box ">
                <div className="col-md-6 col-xl-8 text-left">
                  <Image
                    src={require("../assets/images/services/digital-marketing-icon.png")}
                    className="top-img animate-left"
                    alt=""
                  />
                  <h1 className="animate-right">Digital marketing</h1>
                  <p className="animate-left">
                    We specialize in creating and implementing customized brand
                    development services that will help your business stand out
                    in a crowded online marketplace. At <b>GFS IT Solutions</b>,
                    we believe digital marketing is not just about promoting
                    your business online; it's about building relationships with
                    your audience and creating a positive brand image. Our
                    strategic digital marketing agency uses data-driven insights
                    and a creative approach to help you achieve your digital
                    marketing goals and grow your business.
                  </p>
                  <div className="row animate-right">
                    <div className="col-6 col-md-6 col-xl-4">
                      <small>─ Search Engine Optimization </small>
                    </div>
                    <div className="col-6 col-md-6 col-xl-4">
                      <small>─ Email Marketing</small>
                    </div>
                    <div className="col-6 col-md-6 col-xl-4">
                      <small>─ Content Marketing</small>
                    </div>
                    <div className="col-6 col-md-6 col-xl-4">
                      <small>─ Social Media Marketing</small>
                    </div>
                    <div className="col-6 col-md-6 col-xl-4">
                      <small>─ Mobile Marketing</small>
                    </div>
                    <div className="col-6 col-md-6 col-xl-4">
                      <small>─ Affiliate Marketing </small>
                    </div>
                    <div className="col-6 col-md-6 col-xl-4">
                      <small>─ Mobile Marketing</small>
                    </div>
                    <div className="col-6 col-md-6 col-xl-4">
                      <small>─ Pay-per-Click Advertising</small>
                    </div>
                    <LearnMoreButton
                      onClick={() =>
                        (window.location.href = "/services/digital-marketing")
                      }
                      title="Learn more"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-xl-4">
                  <div className="ecommerce-img animate-left">
                    <Image
                      src={require("../assets/images/services/digital-marketing-img.png")}
                      className="right-img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ServiceSection3">
        <div className="wrapper">
          <div className="container">
            <div className="row ServiceSection3-box">
              <div className="col-md-6 col-xl-8 text-left">
                <Image
                  src={require("../assets/images/services/gaming-icon.png")}
                  className="top-img animate-right"
                  alt=""
                />
                <h1 className="animate-right">Game Development</h1>
                <p className="animate-up">
                  We understand that gaming is a unique blend of technology,
                  creativity, and storytelling that transports players to new
                  worlds and sparks their imagination. That's why we approach
                  every game design and development services with a holistic
                  mindset, combining cutting-edge technology with unparalleled
                  creativity to create unforgettable gaming experiences. Whether
                  you're looking for a
                  <em>mobile game, PC game, console game, or NFT game</em>, our
                  custom mobile game development services team has the skills
                  and expertise to turn your vision into reality.
                </p>
                <div className="row animate-right">
                  <div className="col-6 col-md-6">
                    <small>─ Action Games </small>
                  </div>
                  <div className="col-6 col-md-6">
                    <small>─ Adventure Games</small>
                  </div>
                  <div className="col-6 col-md-6">
                    <small>─ Sports Games</small>
                  </div>
                  <div className="col-6 col-md-6">
                    <small>─ Strategy Games </small>
                  </div>
                  <div className="col-6 col-md-6">
                    <small>─ Simulation Games</small>
                  </div>
                  <div className="col-6 col-md-6">
                    <small>─ Role-playing Games</small>
                  </div>
                  <div className="col-6 col-md-6">
                    <small>─ Puzzle Games</small>
                  </div>
                  <LearnMoreButton
                    onClick={() =>
                      (window.location.href = "/services/game-development")
                    }
                    title="Learn more"
                  />
                </div>
              </div>

              <div className="col-md-6 col-xl-4">
                <div className="game-img animate-left">
                  <Image
                    src={require("../assets/images/services/gaming-img.png")}
                    className="right-img"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="middle-col">
              <div className="row ServiceSection3-box">
                <div className="col-md-6 col-xl-8 text-left">
                  <Image
                    src={require("../assets/images/services/blockchain-icon.png")}
                    className="top-img animate-right"
                    alt=""
                  />
                  <h1 className="animate-left">Blockchain development</h1>
                  <p className="animate-up">
                    <b> GFS IT Solutions</b> specialize in blockchain product
                    development that is
                    <em>cutting-edge, reliable, and scalable</em>. Our team is
                    well-versed in a variety of blockchain platforms, including
                    <b> Ethereum, Hyperledger</b>, and <b>Corda</b>, and can
                    help you choose the one that best fits your requirements.
                    Whether you need to
                    <em>
                      
                      build a decentralized application, integrate blockchain
                      into your existing system, or develop a private blockchain
                      network
                    </em>
                    , hire blockchain developers who have the expertise and
                    experience to deliver top-quality results.
                  </p>
                  <div className="row animate-right">
                    <div className="col-6 col-md-6">
                      <small>─ Blockchain application development </small>
                    </div>
                    <div className="col-6 col-md-6">
                      <small>─ Smart contract development</small>
                    </div>
                    <div className="col-6 col-md-6">
                      <small>
                        ─ Decentralized application (DApp) development
                      </small>
                    </div>
                    <div className="col-6 col-md-6">
                      <small>
                        ─ Cryptocurrency development and integration
                      </small>
                    </div>
                    <div className="col-6 col-md-6">
                      <small>─ Non-Fungible Token (NFT) development</small>
                    </div>
                    <div className="col-6 col-md-6">
                      <small>─ NFT marketplace development</small>
                    </div>
                    <div className="col-6 col-md-6">
                      <small>─ Tokenization of assets</small>
                    </div>
                    <LearnMoreButton
                      onClick={() =>
                        (window.location.href =
                          "/services/blockchain-development")
                      }
                      title="Learn more"
                    />
                  </div>
                </div>

                <div className="col-md-6 col-xl-4">
                  <div className="game-img animate-left">
                    <Image
                      src={require("../assets/images/services/blockchain-img.png")}
                      className="right-img"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceSectionSlider />
      <Footer />
    </div>
  );
};

export default services;
