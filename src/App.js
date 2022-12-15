// import React, { useState } from 'react';
import Nav from './Navbar';
import Home from './Home';
import Admission from './Admission';
import Founder from './Founder';
import Facilities from './Facilities';
import Rules from './Rules';
// import More from './More';
import './App.css';
import './index.css';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Contact';


    

  
function App() {

  return (
    <>

    
   
      <Router>
        <div>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<p>i am admin </p>} />
          </Routes>
          <Routes>
            <Route path='/Admission' element={<Admission />} />
          </Routes>
          <Routes>
            <Route path='Facilities' element={<Facilities />} />
          </Routes>
          <Routes>
            <Route path='Rules' element={<Rules />} />
          </Routes>
          <Routes>
          <Route path="/Founder" element={<Founder />} />
          <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      
      
 
    </>

  );
}


export default App;
