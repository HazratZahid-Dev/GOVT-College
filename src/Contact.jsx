import React from 'react'
import '../src/Style/contact.css'
import { BsFillTelephoneFill,BsEnvelopeFill } from "react-icons/bs";
import { FaFreeCodeCamp,FaMapMarkerAlt } from "react-icons/fa";



const Contact = () => {
  return (
    <>
        <div>
        <h1 className='text-center font-bold'>LCS Contact information</h1>
            <div className='contact'>
            <div className='contact-d'>
            <h3 className='text-center font-bold '>Contact Details</h3>
            </div>
            <div className='ml-16 contact-p'>
                <p className='flex gap-2'> <BsEnvelopeFill className='mt-1'/>laurelscollege@gmail.com</p>
                <p className='flex gap-2'><FaFreeCodeCamp className='mt-1'/>www.LCSKurram.com</p>
                <p className='flex gap-2'><FaMapMarkerAlt className='mt-1'/>tehsil lower Kurram Sadda District Kurram KPK</p>
                <p className='flex gap-2'><BsFillTelephoneFill className='mt-1'/>  03000571215</p>
            </div>
           
            
            </div>
        </div>
    </>
  )
}

export default Contact