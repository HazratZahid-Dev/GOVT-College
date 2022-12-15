import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../src/image/logo.webp'
import { FaTimes, FaBars, FaArrowDown } from "react-icons/fa";
import '../src/Style/Navbar.css'
// import { BsFillArrowRightCircleFill } from "react-icons/bs";
// import { MdPhone } from "react-icons/md";
// import { IconName } from "react-icons/fa";

// import './index.css'
// import './App.css'
function Navbar() {
  const [icon, seticon] = useState(false);
  const [state, setstate] = useState(false);

  const [DropDown, setDropDown] = useState(false);
  const HandleClicks = () => {
    setstate(!state);
    setDropDown(!DropDown);
  };
  return (


    <div className="navbar">
      <div>
        <img src={logo} className=" logo " alt="" />
        {/* <p className="logo_p text-red-600 font-bold"><span>Educating The</span> Nation</p> */}
      </div>
      {/*List*/}
      <ul
        className={icon ? "menu active" : "menu"}
        onclick={() => seticon(!icon)}
        id='main-menu'
      >
        <li><Link to="/" className="home">Home</Link></li>
        <li><Link to="/admission" className="home">Admission</Link></li>
        <li><Link to="/Facilities" className="home">Facilities</Link></li>
        <li><Link to="/Rules" className="home">Rules</Link></li>
        {/* <li><Link to="More" className="home flex gap-2">More <span className="mt-2 text-black animate-bounce">  <FaArrowDown /></span></Link></li> */}
        <li>
          <div className="navbar__dropdown">
            <p className="flex font-bold gap-1" onClick={() => setDropDown(!DropDown)}>
              More
              <span className="mt-2 text-black">
                <FaArrowDown />
              </span>
            </p>
            {DropDown ? (
              <div className="dropdown__list">
                <Link
                  onClick={HandleClicks}
                  to={"/Founder"}
                  className="dropdown__list__item"
                >
                  Founder Message
                </Link>
                <Link
                  onClick={HandleClicks}
                  to={"/Contact"}
                  className="dropdown__list__item"
                >
                  Contact us
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </li>
      </ul>

      <div className="menu__icon">
        <span className="navbar__icon" onClick={() => seticon(!icon)}>
          {!icon ? <FaBars /> : <FaTimes />}
        </span>
      </div>
    </div>
  );

}
export default Navbar;