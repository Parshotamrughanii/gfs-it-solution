/* eslint-disable */
import Image from "next/image";
import React from "react";

const HireUs = ({ bgImage, bgColor }) => {
  return (
    <div
      className="hire-us"
      style={{ backgroundImage: `url(${bgImage})`, backgroundColor: bgColor }}
    >
      <div className="container">
        <h3 className="hire-us-title my-5 animate-down">
          Compelling Reasons To Have Us On Your Side
        </h3>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="hire-box ">
              <Image
                src={require("../src/assets/images/consulting/drop-price-6410044-5272917 1.png")}
                className="mob-app-img animate-right"
                alt=""
              />

              <h3 className="hire-us-heading animate-left">Expertise</h3>
              <p className="hire-us-subheading animate-left">
                Our team has years of experience in development and marketing.
                We stay up-to-date with the latest trends and techniques to
                ensure our clients are always ahead of the curve.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="hire-box">
              <Image
                src={require("../src/assets/images/consulting/Asset 1 1.png")}
                className="mob-app-img animate-right"
                alt=""
              />

              <h3 className="hire-us-heading animate-left">
                Personalized Service
              </h3>
              <p className="hire-us-subheading animate-left">
                We believe in building strong relationships with our clients. We
                work closely with you to understand your goals and needs, and we
                will tailor our services to meet your specific requirements.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="hire-box">
              <Image
                src={require("../src/assets/images/consulting/team-management-5806312-4863041 1.png")}
                className="mob-app-img animate-right"
                alt=""
              />
              <h3 className="hire-us-heading animate-left">Affordable</h3>
              <p className="hire-us-subheading animate-left">
                We offer competitive pricing for our services, so you don&apos;t have
                to break the bank to create a successful product.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="hire-box">
              <Image
                src={require("../src/assets/images/consulting/flexible-work-time-5796820-4862968 1.png")}
                className="mob-app-img animate-right"
                alt=""
              />
              <h3 className="hire-us-heading animate-left">
                Round-the-clock Support{" "}
              </h3>
              <p className="hire-us-subheading animate-left">
                We offer 24/7 hours support so that our client&apos;s queries don&apos;t
                remain unanswered or unattended.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireUs;
