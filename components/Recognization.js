import Image from 'next/image'
import React from 'react'

const Recognization = () => {
  return (
    <div>
           <section className='Recognization'>
      <div className='container'>
        <div className='row align-items-center recogize-section'>
          <div className='col-md-3'>
            <Image
              src={require("../src/assets/images/recog1.png")}
              className='img-fluid'
              alt=''
            />
          </div>
          <div className='col-md-2'>
            <Image
              src={require("../src/assets/images/recog2.png")}
              className='img-fluid'
              alt=''
            />
          </div>
          <div className='col-md-3'>
            <Image
              src={require("../src/assets/images/recog3.png")}
              className='img-fluid'
              alt=''
            />
          </div>
          <div className='col-md-2'>
            <Image
              src={require("../src/assets/images/recog4.png")}
              className='img-fluid'
              alt=''
            />
          </div>
          <div className='col-md-2'>
            <Image
              src={require("../src/assets/images/california-goodfirms.png")}
              className='img-fluid'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Recognization