import React from "react";

import "../src/Style/founder.css";
import img1 from "../src/image/admin.jpg";
import img2 from "../src/image/admin1.jpg";

const Facilities = () => {
  return (
    <>
      <div className=" ">
        <h1 className="text-center p-10 font-bold">Founder Messages</h1>
      </div>

      <div className="flex flex-wrap justify-between mt-5 p-6 ">
        <div className="founder">
          <p>
            Education plays an important role in the socio-economic development
            of a society. Fortunate are those who avail opportunities to seek
            education because in Pakistan only 60% of the total population is
            literate. As you take this bold step of educating your mind in
            today’s competitive world, Laurels College of Sciences welcomes you
            and extends its full support to you in achieving your goals. The
            administration, teaching staff and facilities at Laurels are the
            best in the area which will help you immensely in your quest to
            acquire knowledge and skills, needed to become a productive and
            responsible citizen of the society. I wish you all the best for your
            future. May Allah bless us with His divine guidance to carry out
            this noble mission. Ameen.
          </p>
          <h4>Hazrat zahid</h4>
          <h4>BSCS from University of Buner</h4>
        </div>
        <div className="">
          <img src={img1} alt="error" className="founder-image"></img>
        </div>
      </div>
      <div className=" ">
        <h1 className="text-center p-10 font-bold">Advisor’s message</h1>
      </div>
      

      <div className="flex flex-wrap justify-between mt-4 p-6">
        <div className="founder">
          <p>
            “Live as if you were to die tomorrow. Learn as if you were to live
            forever.” (Mahatma Gandhi)
            <br />
            Throughout our lives we constantly face various types of challenges
            which try to prevent our journey towards success. However, in shape
            of education we have a solution. Education is the only tool that
            helps us overcome all those challenges in whatever they might be.
            Education sets the foundation for all progress and development at
            individual as well as communal level. Laurels College of Sciences
            with all its capabilities will polish the hidden skills of its
            students so that the challenges of life might not be able to block
            their way towards progress.
          </p>
          <h4>Muhammad saad</h4>
          <h4>MS from University of Buner</h4>
        </div>
        <div className="">
          <img src={img2} alt="error" className="founder-image"></img>
        </div>
      </div>
    </>
  );
};

export default Facilities;
