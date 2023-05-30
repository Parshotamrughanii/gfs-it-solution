import React from 'react'
import Style from '../src/styles/ContactBanner.module.css'

const ContactBanner = () => {
  return (
   
         <div className={Style.CarrersBanner}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-md-8">
            <h1 className="animate-up">Contact Us</h1>
            <p className="animate-left">
              We are all ears to you. <b>GFS IT Solutions</b> assures you that none of
              your queries remain unanswered or unattended; since we embrace
              round-the-clock support services. So, what are you waiting for?
              Drop us a HI and let your business FLY.
            </p>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default ContactBanner