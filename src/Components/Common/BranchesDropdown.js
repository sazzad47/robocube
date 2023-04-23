import React, { useState } from "react";
import { Col, Dropdown, DropdownMenu, DropdownToggle, Row } from "reactstrap";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

//SimpleBar
import SimpleBar from "simplebar-react";

//import images
import image1 from "../../assets/images/coming-soon-img.png";

const BranchesDropdown = () => {
  const branchData = [
    {
      id: 1,
      logo: image1,
      name: "Lolita Q",
    },
  ];

  const [isBranchDropdown, setIsBranchDropdown] = useState(false);

  const toggleCartDropdown = () => {
    setIsBranchDropdown(!isBranchDropdown);
  };

  return (
    <React.Fragment>
      <Dropdown
        isOpen={isBranchDropdown}
        toggle={toggleCartDropdown}
        className="topbar-head-dropdown ms-1 header-item"
      >
        <DropdownToggle
          type="button"
          tag="button"
          className="branches btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
        >
          <i className="bx bx-calculator fs-22"></i>
          {!isBranchDropdown && (
            <Tooltip anchorSelect=".branches" place="bottom">
              Branches
            </Tooltip>
          )}
        </DropdownToggle>
        <DropdownMenu
          className="dropdown-menu-lg dropdown-menu-end p-0"
          aria-labelledby="page-header-cart-dropdown"
        >
          <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
            <Row className="align-items-center">
              <Col>
                <h6 className="m-0 fs-16 fw-semibold text-uppercase">
                  {" "}
                  Recent
                </h6>
              </Col>
            </Row>
          </div>
          <SimpleBar style={{ maxHeight: "300px" }}>
            <div className="p-2">
              {branchData.map((item, key) => (
                <div
                  className="d-block dropdown-item text-wrap dropdown-item-cart px-3 py-2"
                  key={key}
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={item.logo}
                      className="me-3 rounded-circle avatar-sm p-2 bg-light"
                      alt="user-pic"
                    />
                    <div className="flex-1">
                      <h6 className="mt-0 mb-1 fs-14">
                        <Link to="/" className="text-reset">
                          {item.name}
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </SimpleBar>
          <div
            className="p-3 border-bottom-0 border-start-0 border-end-0 border-dashed border"
            id="checkout-elem"
          >
            <Link to="/" className="btn btn-success text-center w-100">
              See all branches
            </Link>
          </div>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default BranchesDropdown;
