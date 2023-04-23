import React, { useState } from "react";
import {
  Col,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

//import images
import avatar1 from "../../assets/images/users/avatar-3.jpg";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  
  //Dropdown Toggle
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };
  return (
    <React.Fragment>
      <Dropdown
        isOpen={isProfileDropdown}
        toggle={toggleProfileDropdown}
        className="ms-sm-3 header-item"
      >
        <DropdownToggle tag="button" type="button" className="btn">
          <span className="d-flex align-items-center">
            <img
              className="rounded-circle header-profile-user"
              src={avatar1}
              alt="Header Avatar"
            />
          </span>
        </DropdownToggle>
        <DropdownMenu
          className="dropdown-menu-lg dropdown-menu-end"
          aria-labelledby="page-header-cart-dropdown"
        >
          <div className="w-100 d-flex flex-column align-items-center justify-content-center">
            <Col lg={4} className="col">
              <div className="team-profile-img">
                <div className="avatar-lg img-thumbnail rounded-circle flex-shrink-0">
                  <img
                    src={avatar1}
                    alt=""
                    className="img-fluid d-block rounded-circle"
                  />
                </div>
              </div>
            </Col>
            <div className="py-2 d-flex flex-column align-items-center">
              <h5 className="p-0 m-0">Sazzad Hossen</h5>
              <span className="d-block">sazzad47.ju@gmail.com</span>
            </div>
            <div
              className="w-100 p-3 d-flex flex-column gap-2 border-bottom-0 border-start-0 border-end-0 border-dashed border"
              id="checkout-elem"
            >
              <Link to="/" className="btn btn-light text-center w-100">
                My account
              </Link>
              <Link to="/" className="btn btn-light text-center w-100">
                Logout
              </Link>
            </div>
          </div>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default ProfileDropdown;
