import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import Link from 'next/link';
import { useState,useEffect } from 'react';

export const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
         <nav
         id={
          scrollPosition === 0 
            ? "navbar"
            : "navbars"
        }
        className="navbar navbar-expand-lg bg-body-tertiary"
      >
        <div className="container-fluid">
          <Link href="/" className="navbar-brand">
            <Image
              // onClick={handleBrandLogo}
              src={require("../src/assets/images/logo.png")}
              alt="GFS Logo"
              id="navbar-logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          
              <li className="nav-item">
                <Link
                href='/'
                  style={{ color: "#FFFFFF" }}
                  className="nav-link active"
                  // onClick={() => (window.location.href = "/")}
                  aria-current="page"
                >
                   Company
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/services"
                  style={{ color: "#FFFFFF" }}
                  className="nav-link active"
                  // onClick={() => (window.location.href = "/services")}
                  aria-current="page"
                >
                  Services
                </Link> 
              </li>

              <li className="nav-item">
                <Link href="/consulting"
                  style={{ color: "#FFFFFF" }}
                  className="nav-link active"
                  // onClick={() => (window.location.href = "/consulting")}
                  aria-current="page"
                >
                  Consulting
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/solutions"
                  style={{ color: "#FFFFFF" }}
                  className="nav-link active"
                  // onClick={() => (window.location.href = "/solutions")}
                  aria-current="page"
                >
                  Solutions
                </Link>
              </li>
           

              <li className="nav-item">
                <Link href="https://blogs.gfsitsolutions.com/"
                  style={{ color: "#FFFFFF" }}
                  className="nav-link active"
                
                  aria-current="page"
                >
                  Blogs
                </Link>
              </li>
            </ul>
            <span className="navbar-text">
            <Link href="/contactus">
              <button
                id="nav-contact-btn"
                type="button"
                // onClick={() => (window.location.href = "/contactus")}
                className="btn btn-danger"
              >
                Contact Us
              </button>
              </Link>
            </span>
          </div>
        </div>
      </nav>
    </div>
  )
}
