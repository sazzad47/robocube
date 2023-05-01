import React from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Header = ({ toggleSidebar }) => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
        style={{ padding: "2px 1rem" }}
      >
        <div
          className="navbar-brand mr-4"
          style={{ cursor: "pointer" }}
          onClick={toggleSidebar}
        >
          <i className="fa fa-fw fa-bars"></i>
        </div>
        <Link
          className="navbar-brand font-weight-bold"
          href="https://robocube.synorexcloud.com/hr/"
        >
          <img
            alt=""
            src="https://cdn.synorex.link/assets/images/robocube/hr.png"
            style={{ height: "38px" }}
            className="mr-1"
          />
          <span className="small">Robocube HR</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-fw fa-user"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li
              className="dropdown"
              data-title="Branches"
              data-intro="You can switch the system of different branches here"
            >
              <div
                className="nav-link dropdown-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{cursor: "pointer"}}
              >
                <i className="fa fa-fw fa-building"></i> Lolita Q{" "}
              </div>
              <div
                aria-labelledby="branchDropdown"
                className="dropdown-menu dropdown-menu-right"
              >
                <h6 className="dropdown-header">RECENT</h6>
                <a
                  className="dropdown-item"
                  href="https://robocube.synorexcloud.com/hr/home/branch_access/166683821653"
                >
                  <i className="fa fa-fw fa-building mr-1"></i> Lolita Q
                </a>{" "}
                <div className="dropdown-divider"></div>
                <a
                  className="dropdown-item text-primary text-center"
                  style={{ backgroundColor: "inherit !important" }}
                  href="https://robocube.synorexcloud.com/hr/branches/list"
                >
                  All Branches
                </a>
              </div>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="dropdown my-auto d-none d-md-inline-block">
              <a
                className="nav-link mr-1 menu-home"
                href="https://one.synorexcloud.com/client"
                target="_blank"
                rel="noreferrer"
              >
                <Tooltip anchorSelect=".menu-home" place="bottom">
                  Home
                </Tooltip>
                <i
                  style={{ fontSize: "1.25rem" }}
                  className="fa fa-fw fa-home"
                ></i>
              </a>
            </li>

            <li className=" dropdown my-auto d-none d-md-inline-block">
              <a
                className="nav-link mr-1 menu-help"
                href="http://help.synorexcloud.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Tooltip anchorSelect=".menu-help" place="bottom">
                  Help &amp; Support
                </Tooltip>
                <i
                  style={{ fontSize: "1.25rem" }}
                  className="fa fa-fw fa-question-circle"
                ></i>
              </a>
            </li>

            <li className="nav-item dropdown">
              <div
                className="nav-link mt-2 mt-md-0 py-0"
                id="profileDropdown"
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
                aria-haspopup="true"
                style={{cursor: "pointer"}}
              >
                <img
                  alt=""
                  src="https://cdn.synorexcloud.com/assets/images/icons/avatar.svg"
                  style={{ height: "35px" }}
                />
              </div>
              <div
                className="dropdown-menu dropdown-menu-right mt-3"
                aria-labelledby="profileDropdown"
                style={{ minWidth: "300px" }}
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
                  <p className="mb-0 small d-flex flex-column gap-2">
                    <button
                      href="https://one.synorexcloud.com/client/account?pg=profile"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-sm btn-light btn-block"
                    >
                      My Account
                    </button>
                    <button
                      href="https://robocube.synorexcloud.com/hr/auth/logout"
                      className="btn btn-sm btn-light text-danger btn-block"
                    >
                      Logout
                    </button>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
