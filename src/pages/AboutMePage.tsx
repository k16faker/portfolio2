import React from "react";
import { Link } from "react-scroll";
import TypingEffect from "../TypingEffect";

const AboutMePage = () => {
  return (
    <div id="1" className="w-full h-screen text-center pt-[300px]">
      <div className="w-[1200px] h-[800px] items-center mx-auto flex px-5 bg-gray-500 rounded-2xl">
        <div className="w-1/2">
          <img
            src="/images/myface.jpg"
            alt="profile"
            className="rounded-full mx-auto"
          />
        </div>
        <div className="w-1/2 pt-[70px]">
          <TypingEffect text="HHello, I am Seong Jun Park" speed={100} />
          <p className="text-lg text-white">
            I am a web developer from the South Korea. I'm currently studying at alone. I have a passion for web development and love to create new websites. I am a fast learner and I am always looking for new technologies to learn.
          </p>
          <Link to="4" smooth={true} duration={1000}>
          <button className="w-[100px] h-[35px] mt-6 rounded-xl border-none bg-sky-500 hover:scale-110 transition-all">Hiring me!</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
