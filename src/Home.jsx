import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Slider';
import MainParagh from './MainParagh';
import  Card from '../src/Card';
import Footer from './Footer';

const Home = () => {
  return (
    <>
    <Slider/>
    <MainParagh/>
     <Card/> 
     <Footer/>
    

   </>
  )
}

export default Home