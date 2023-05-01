import React, { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { Link } from "react-router-dom";

const ProfileDropdown = () => {
  //Dropdown Toggle
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);
  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };
  return (
    <React.Fragment>
      <Dropdown isOpen={isProfileDropdown} toggle={toggleProfileDropdown}>
        <DropdownToggle
          tag="div"
          style={{cursor: "pointer"}}
          className="nav-link py-0"
        >
          <span className="d-flex align-iteml-center">
            <img
              alt=""
              src="https://cdn.synorexcloud.com/assets/images/icons/avatar.svg"
              style={{ height: "35px" }}
            />
          </span>
        </DropdownToggle>
        <DropdownMenu
          style={{ minWidth: "300px" }}
          className="dropdown-menu-lg dropdown-menu-end mt-3"
        >
          <div className="container text-center py-3">
            <img
              alt=""
              src="https://cdn.synorexcloud.com/assets/images/blank/1x1.jpg"
              style={{ width: "35%" }}
              className="d-block mx-auto mb-3 border rounded-circle"
            />
            <h6 className="mb-1">Sazzad Hossen</h6>
            <p className="mb-2 small text-muted">sazzad47.ju@gmail.com</p>
            <div className="mb-0 small d-flex flex-column gap-2">
              <a
                href="https://one.synorexcloud.com/client/account?pg=profile"
                target="_blank"
                rel="noreferrer"
                className="btn btn-sm btn-light btn-block"
              >
                My Account
              </a>
              <Link
                to="/"
                className="btn btn-sm btn-light text-danger btn-block"
              >
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
