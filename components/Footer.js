import Image from "next/image";
import Link from "next/link";
// import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
      <div className='row '>
          <div className='col-12 col-md-10'>
          <div className="row d-flex flex-row align-items-center">
          <div className="col-3 col-md-3">
           <div className=''>
              <Image
              style={{cursor:'pointer'}}
                src={require("../src/assets/images/logo.png")}
                alt='GFS IT Solutions Logo'
                id='footer-logo'
              onClick={()=>window.location.href=("/")}
              />
            </div>
           
           </div>
           <div className="col-8 col-md-8">
           <div className=''>
              <h1 id='lets-chat'>Let’s Talk Success.</h1>
            </div>
</div>
          </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-md-6 col-lg-3  text-align-center'>
            <h6 className='mb-4'>Quick Links</h6>

            <div className='d-flex flex-column first-links'>
              <Link className='quick-links' href='/'>
                Company
              </Link>
              <Link className='quick-links'  href='/services'>
                Services
              </Link>
              <Link className='quick-links' href='/solutions'>
                Solution
              </Link>
              <Link className='quick-links' href='/consulting'>
                Consulting
              </Link>
              <Link className='quick-links' href='https://blogs.gfsitsolutions.com/'>
                Blogs
              </Link>
              <Link className='quick-links' href='/contactus'>
                Contact Us
              </Link>
            </div>
          </div>

          <div className='col-12 col-md-6  col-lg-3'>
            <h6 className='mb-4'>Services</h6>

            <div className='d-flex flex-column first-links'>
              <Link className='quick-links' href='/services/mobile-app-development'>
                Mobile App Development
              </Link>
              <Link className='quick-links' href='/services/website-development'>
                Web Development
              </Link>
              <Link className='quick-links' href='/services/uiux-designing'>
                UI / UX Design
              </Link>
              <Link className='quick-links' href='/services/e-commerce'>
                Ecommerce Development
              </Link>
              <Link className='quick-links' href='/services/digital-marketing'>
                Digital Marketing Development
              </Link>
              <Link className='quick-links' href='/services/game-development'>
                Game Development
              </Link>
              <Link className='quick-links' href='/services/blockchain-development'>
                Blockchain Development
              </Link>
             
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-3'>
            <h6 className='mb-4'>Contact Us</h6>

            <div className='d-flex flex-column first-links'>
              <Link href="/" className='text-decoration-none contact-text' >
                <span>
                  <Image
                    src={require("../src/assets/images/footer-icon1.png")}
                    className='horizontal-icons'
                    alt='Email Icon'
                  />
                </span>
                info@gfsitsolutions.com
              </Link>

              <Link href="/" className='text-decoration-none contact-text' >
                <span>
                  <Image
                    src={require("../src/assets/images/footer-icon2.png")}
                    className='vertical-icons'
                    alt='Phone Number Icon'
                  />
                </span>
                (802) 432-8025
              </Link>

              <Link href='/' className='text-decoration-none contact-text' >
                <span>
                  <Image
                    src={require("../src/assets/images/footer-icon3.png")}
                    className='vertical-icons'
                    alt='Location Icon'
                  />
                </span>
                5642 S Park Avenue Morton Grove IL 60053. USA
              </Link>
            </div>
          </div>

          <div className='col-12 col-md-6  col-lg-3'>
            <h6 className='mb-4'>Follow Us</h6>

            <div className='follow-us'>
              <Link href='https://www.facebook.com/gfsitsolutions'>
                <Image
                  src={require("../src/assets/images/footer-follow-icon1.png")}
                  className='follow-icons mr-3'
                  alt=''
                />
              </Link>
              <Link href='https://www.instagram.com/gfsitsolutions/'>
                <Image
                  src={require("../src/assets/images/footer-follow-icon2.png")}
                  className='follow-icons mr-3'
                  alt=''
                />
              </Link>
              <Link href='https://www.linkedin.com/company/gfs-it-solutions/'>
                <Image
                  src={require("../src/assets/images/footer-follow-icon3.png")}
                  className='follow-icons mr-3'
                  alt=''
                />
              </Link>
              <Link href='https://twitter.com/GFSITSolution'>
                <Image
                  src={require("../src/assets/images/footer-follow-icon4.png")}
                  className='follow-icons'
                  alt=''
                />
              </Link>
            </div>
          </div>
        </div>

        <div className='line'></div>
        <p className='text-center last-line'>
          Copyright © 2023 GFS IT SOLUTIONS. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;