import React from "react";
import Image from "next/image";

const AppDevelopmentWhy = ({ img, title, subTitle, description }) => {
  return (
    <div>
      <section className="app-devlopment-why">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="mobile-app-why">
              <Image
                  src={require(`../src/assets//images/resuable-components/${img}.png`)}
                  alt="app-develpment"
                  className="animate-left"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="main-why-box">
                <h5 className="animate-left">{subTitle}</h5>
                <h1 className="animate-right">{title}</h1>
                <p className="animate-up">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopmentWhy;
