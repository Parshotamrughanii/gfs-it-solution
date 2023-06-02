import React from "react";
import Image from "next/image";
import Style from "../styles/PageNotFound.module.css";
import Link from "next/link";
import Footer from "../../components/Footer";
const PageNotFound = () => {
  return (
    <div>
      <div className={Style.notfound}>
        <h1>404</h1>
        <h3>Page Not Found</h3>
        <Image src={require("../assets/images/pnf.png")} /> 
        <Link href="/">
          <button>Back to Homepage</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
