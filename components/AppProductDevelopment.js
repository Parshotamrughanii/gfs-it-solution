import Image from "next/image";
import React from "react";


const AppProductDevelopment = ({ img, title, subTitle, description }) => {
  return (
    <div>
      <section className="app-product-development">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="main-product-box">
                <h5 className="animate-right">{subTitle}</h5>
                <h1 className="animate-left">{title}</h1>
                <p className="animate-up">{description}</p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="mobile-app-product">
                <Image
                  src={require(`../src/assets//images/resuable-components/${img}.png`)}
                  alt="app-develpment"
                  className="animate-left"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppProductDevelopment;
