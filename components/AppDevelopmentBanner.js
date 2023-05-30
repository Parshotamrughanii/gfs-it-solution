import Image from "next/image";
import React from "react";
import { Navbar } from "./Navbar";
import UseIntersectionAnimations from "./UseIntersectionAnimations";
const AppDevelopmentBanner = ({
  img,
  title,
  description,
  handleGetInTouch,
  bannerImg,
  ctnTitle,
}) => {
  UseIntersectionAnimations()

  return (
    <div>
      <Navbar />
      <div
        className="app-develop-banner"
        style={{ backgroundImage: `url(${bannerImg.src})` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-xl-6">
              <div className="mobile-app-left-col">
                <h1 className="animate-right">{title}</h1>
                <p className="animate-left">{description}</p>
                <button className="animate-right" onClick={handleGetInTouch}>
                  {ctnTitle ? ctnTitle : "Get in Touch"}
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 col-xl-6">
              <div className="mobile-app-banner">
                <Image
                  src={require(`../src/assets//images/resuable-components/${img}.png`)}
                  alt="app-develpment"
                  className="animate-left"
                />
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default AppDevelopmentBanner;
