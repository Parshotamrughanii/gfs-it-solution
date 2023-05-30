import React from "react";

const OperationalPage = ({mainClass,bgImage,subTitle,title,description}) => {
  return (
    <div
    style={{ backgroundImage: `url(${bgImage})` }}
    className={mainClass}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <div className="devop-app-operational-main-box">
              <div className="devop-app-operational-box">
                <p className="devop-app-operational-title animate-up">
                 {subTitle}
                </p>
                <h3 className="devop-app-operational-subtitle animate-right">
                 {title}
                </h3>
                <p className="devop-app-operational-desc animate-left">
                 {description}
                </p>
                <button className="techno-ctn" onClick={()=>window.location.href=("/contactus")}>Have a Project In Mind?</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5"></div>
        </div>
      </div>
    </div>
  );
};

export default OperationalPage;
