import React from 'react'
import '../src/Style/Footer.css'
import { FaFacebook,FaWhatsapp,FaInstagram,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>


      <div className=' flex justify-between items-center main1 flex-wrap'>

        <div className='text-white tracking-wider p-7 '>
          <h2>About us</h2>
          <p>GOVT College Dagger of <br />Sciences was Established in 2022 in <br />District Buner</p>

          <h2 className='flex gap-2 text-white'><FaFacebook /> <FaWhatsapp /> <FaInstagram /> <FaYoutube /></h2>
        </div>
      

      <div className='text-white p-7  '>
        <h2>Contact Us</h2>

        <p>zahid9454688@gmail.com<br />

          https://laurelscollege.netlify.app<br />

          tehsil Gagra District Buner KPK<br />

          03369454688</p>

      </div>

    
    </div>
    {/* <div className='footer-second'>
    <p className='footer-para'>All Rights Reserved. © 2022<span> Degree College Dagger District Buner (GDC)</span> Design By : <span>Hazrat zahid</span> </p> */}
    
    </>







  )
}

export default Footer