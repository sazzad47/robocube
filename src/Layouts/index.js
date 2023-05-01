import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import withRouter from "../Components/Common/withRouter";

//import Components

import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = (props) => {
  const [isOpenSidebar, setIsOpenSidebar] = useState(true);

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  return (
    <React.Fragment>
      <Container className="app_container">
        <Header toggleSidebar={toggleSidebar} />
        <div className={`wrapper ${isOpenSidebar ? "toggled" : ""}`}>
            <Sidebar isOpenSidebar={isOpenSidebar} />
            <div className="page-content-wrapper">{props.children}</div>
          </div>
      </Container>
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.object,
};

export default withRouter(Layout);
