import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import withRouter from "../Components/Common/withRouter";

//import Components

import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useEffect } from "react";

const Layout = (props) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 980) {
        setIsOpenSidebar(false);
      } else {
        setIsOpenSidebar(true);
      }
    };

    window.addEventListener("resize", handleResize);

    // Remove event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      <Container className="app_container">
        <Header toggleSidebar={toggleSidebar} />
        <div className={`wrapper ${isOpenSidebar ? "toggled" : ""}`}>
          <Sidebar isOpenSidebar={isOpenSidebar} />
          <div className="page-content-wrapper">
            {props.children}
            <Footer />
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default withRouter(Layout);
