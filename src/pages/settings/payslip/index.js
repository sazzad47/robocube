import React, { useState } from "react";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import {
  Container,
  Row,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import Template from "./Template";
import WhatsApp from "./WhatsApp";

const Payslip = () => {
  document.title = "Payslip | Robocube HR";
  const [customActiveTab, setcustomActiveTab] = useState("template");

  const toggleCustom = (tab) => {
    if (customActiveTab !== tab) {
      setcustomActiveTab(tab);
    }
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Payslip" />
          <div className="container-fluid container-wrapper">
            <Nav tabs className=" ">
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: customActiveTab === "template",
                  })}
                  onClick={() => {
                    toggleCustom("template");
                  }}
                >
                  Template
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  className={classnames({
                    active: customActiveTab === "whatsapp",
                  })}
                  onClick={() => {
                    toggleCustom("whatsapp");
                  }}
                >
                  WhatsApp
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent
              activeTab={customActiveTab}
              className="border"
              id="nav-tabContent"
              style={{ minHeight: "30rem" }}
            >
              <TabPane id="nav-template" tabId="template">
                <Template />
              </TabPane>
              <TabPane
                id="nav-whatsapp"
                tabId="whatsapp"
                style={{ minHeight: "30rem", position: "relative" }}
              >
                <WhatsApp />
              </TabPane>
            </TabContent>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Payslip;
