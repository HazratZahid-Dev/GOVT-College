import React from 'react'
import '../src/Style/Admission.css'
import { FaHandPointUp,FaRegHandshake,FaStarAndCrescent } from "react-icons/fa";
import Footer from './Footer';

const Admission = () => {
  return (
    <>
      <div className='Admission-Process'>
        <h1 className='text-center p-10 font-bold '>Admission Process</h1>
      </div>
      <div className='Admission-main'>
        <div className='section-1 p-1'>
          <div className=' w-32 h-28 p-4 '><h1 className='mt-4 icon'><FaHandPointUp /></h1></div>
          <h4 className='ml-4 font-bold eli'>Eligibility</h4>

          <ul>
            <li>Minimum age limit for admission in FA/F.Sc Part-I is 15 years and maximum age limit 19 years.</li>
            <li>The candidate must have passed the SSC Annual Examination in preceding session of the admission year.</li>
            <li>Students with 'E' grade or compartment in matric examination are not eligible for admission.</li>
            <li>Candidates with bad character certificate or convicted in any criminal offence by a court of law are not eligible for admission.</li>
            <li>Admission to Laurels College of Sciences remains the discretion of the Principal.</li>
            <li>The Principal reserves the right to refuse admission to any candidate without assigning any reason.</li>

          </ul>

        </div>
        <div className='section-1 p-1' id='sec'>
          <div className=' w-32 h-28 p-4 '><h1 className='mt-4 icon'><FaRegHandshake /></h1></div>
          <h3 className='ml-4 font-bold'>Procedure</h3>
          <p>Candidates seeking admission in Laurels College can receive the admission forms by visiting the campus; also they can download the admission forms from the college website (website). Print the form and submit the same in the admission office.</p>

          <ul>
            <li>Minimum age limit for admission in FA/F.Sc Part-I is 15 years and maximum age limit 19 years.</li>
            <li>The candidate must have passed the SSC Annual Examination in preceding session of the admission year.</li>
            <li>Students with 'E' grade or compartment in matric examination are not eligible for admission.</li>
            <li>Candidates with bad character certificate or convicted in any criminal offence by a court of law are not eligible for admission.</li>
            <li>Admission to Laurels College of Sciences remains the discretion of the Principal.</li>
            <li>The Principal reserves the right to refuse admission to any candidate without assigning any reason.</li>

          </ul>
          <h6>Note: Original documents are to be produced at the time of interview.</h6>

        </div>
        <div className='section-1 p-1' id='sec3'>
          <div className=' w-32 h-28 p-4 '><h1 className='mt-4 icon'><FaStarAndCrescent /></h1></div>
          <h3 className='ml-4 font-bold'>Submission of Form</h3>

          <ul>
            <li>Minimum age limit for admission in FA/F.Sc Part-I is 15 years and maximum age limit 19 years.</li>
            <li>The candidate must have passed the SSC Annual Examination in preceding session of the admission year.</li>
            <li>Students with 'E' grade or compartment in matric examination are not eligible for admission.</li>
            <li>Candidates with bad character certificate or convicted in any criminal offence by a court of law are not eligible for admission.</li>
            <li>Admission to Laurels College of Sciences remains the discretion of the Principal.</li>
            <li>The Principal reserves the right to refuse admission to any candidate without assigning any reason.</li>
            <li>Candidates with bad character certificate or convicted in any criminal offence by a court of law are not eligible for admission.</li>
            <li>Admission to Laurels College of Sciences remains the discretion of the Principal.</li>
            <li>The Principal reserves the right to refuse admission to any candidate without assigning any reason.</li>

          </ul>

        </div>
       
      </div>
      <Footer/>
    
      
      </>
    
  )
}

export default Admission