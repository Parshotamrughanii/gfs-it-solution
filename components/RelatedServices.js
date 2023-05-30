import Image from "next/image";
import React from "react";

const RelatedServices = ({ data }) => {
  return (
    <section className="related-services">
      <div className="container">
        <div className="row">
          <h1>Related Services</h1>
          {data.map((item) => (
            <div className="col-12 col-md-6 col-xl-4">
              <div className="related-box mb-3" onClick={()=>window.location.href=(item.path)}>
                <div className="related-icon">
                  <Image
                    src={require(`../src/assets/images/related-services/digital-marketing/${item.icon}.png`)}
                    alt="icon"
                  />
                </div>
                <div className="related-content">
                  <div className="">
                    <h4>{item.title}</h4>
                  </div>
                  <div className="">
                    <ul>
                      <li>{item.line1}</li>
                      <li>{item.line2}</li>
                      <li>{item.line3}</li>
                      <li>{item.line4}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
