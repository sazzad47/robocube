import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const MarqueeMessage = () => {
  const [isMobile, setIsMobile] = useState(false);
 
  const handleResize = () => {
    if (window.innerWidth < 920) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  return (
    <React.Fragment>
      <div className="welcome-section">
        <i className="bx bx-sm bxs-megaphone p-2"></i>
        <Marquee speed={isMobile? 10 : 100} gradient={false}>
          <h6 className="p-0 m-0">Welcome to Robocube HR</h6>
        </Marquee>
      </div>
    </React.Fragment>
  );
};

export default MarqueeMessage;
