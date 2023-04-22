import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeMessage = () => {
  return (
    <React.Fragment>
      <div className="welcome-section" >
      <i className='bx bx-sm bxs-megaphone p-2' ></i>
        <Marquee speed={100} gradient={false} ><h6 className="p-0 m-0">Welcome to Robocube HR</h6></Marquee>
      </div>
    </React.Fragment>
  );
};

export default MarqueeMessage;
