import React from "react";
import img from "../src/image/admin.jpg";
import img2 from "../src/image/admin1.jpg";
import "../src/Style/Card.css";
import { FaFacebook, FaFacebookMessenger } from "react-icons/fa";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";

const Card = () => {
  const data = [
    {
      id: 1,
      name: "Hazrat Zahid",
      education: "BS-Computer Science (University of Buner)",
      pic: img,
    },
    {
      id: 2,
      name: "Abdul Basit",
      education: "BS-Computer Science (University of Buner)",
      pic: img2,
    },
  ];
  return (
    <div className=" flex flex-wrap   ">
      {data.map((it) => (
        <>
          <div className="owner__card  ">
            <div key={it.id} className="bg-slate-500 ">
              <img src={it.pic} className=" image-card  "></img>

              <p className="text-center  mt-3 ">{it.red}</p>
              <h6 className="text-center mt-4 text  ">{it.name}</h6>
              <h6 className="text-center text mb-3 ">{it.education}</h6>
              <div className="owner__icons">
                <FaFacebook />
                <FaFacebook />
                <FaFacebook />
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Card;
