import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
    <div>
      <nav>
      <div>logo</div>
      <div>
      <ul>
        <li> <Link to="/">Home</Link></li>
        <li><Link to="Admission">Admission</Link></li>
        <li><Link to="Facilities">Facilities</Link></li>
        <li> <Link to="Rules">Rules</Link></li>
        <li>  <Link to="More">More</Link></li>
      </ul>
      </div>
      
      </nav>
    </div>

    </>
  )
}

export default Header