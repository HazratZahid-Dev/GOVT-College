import React from 'react'
import img from '../src/image/lab.jpg'
import '../src/Style/facilities.css'
import img1 from '../src/image/f1.jpg'
import img2 from '../src/image/fa.jpg'
import img3 from '../src/image/s1.jpg'
import Footer from './Footer'

const Facilities = () => {
    return (
        <>
            <div className=' '><h1 className='text-center p-10 font-bold'>Laurel's Facilities</h1></div>
            <div className='flex flex-wrap gap-4 '>
                <div >
                    <img src={img} alt='error' className='fa-imag'></img>
                </div>
                <div className='fa-text'>
                    <h1>Computer Laboratories</h1>
                    <p>he Computer Laboratories are equipped with the
                        latest computers, printers, multimedia and other
                        presentation equipment for the personal and
                        academic growth of students.</p>
                </div>
            </div>


            <div className='flex flex-wrap justify-between mt-5'>

                <div className='fa'>
                    <h1>Medical Cover</h1>
                    <p>Suitable first aid facility is available for prompt medical cover to students at Laurels College. In case of emergency or serious problem, the students are being taken to the nearby hospital on college transport under the supervision of a staff member.</p>
                </div>
                <div className=''>
                    <img src={img2} alt='error' className='fa-image1'></img>
                </div>
            </div>

            <div className='flex flex-wrap justify-between mt-4'>
                <div className=''>
                    <img src={img1} alt='error' className='fa-imag'></img>
                </div>
                <div className='fa-text'>
                    <h1>Science Laboratories</h1>
                    <p>Very well-equipped laboratories for Physics, Chemistry, Biology, and Computer Science are available which provide students hands-on practice during their practical lab work.</p>
                </div>
            </div> 

            <div className='flex flex-wrap justify-between mt-5'>

<div className='fa'>
    <h1>Tuck Shop</h1>
    <p>LCS has a tcuk shop for students if they need something they can easily get their required thing from the shop</p>
</div>
<div className=''>
    <img src={img3} alt='error' className='fa-image1'></img>
</div>
</div>

<Footer/>
            
        </>
    )
}

export default Facilities