import React from "react";
import { Link } from "react-router-dom";

//import images
import logoSm from "../assets/images/logo-sm.png";

//import Components
import ProfileDropdown from "../Components/Common/ProfileDropdown";
import BranchesDropdown from "../Components/Common/BranchesDropdown";
import HeaderMenus from "../Components/Common/HeaderMenus";

import { changeSidebarVisibility } from "../store/actions";
import { useSelector, useDispatch } from "react-redux";


const Header = ({ headerClass }) => {
 
  const dispatch = useDispatch();
  const { sidebarVisibilitytype } = useSelector((state) => ({
    sidebarVisibilitytype: state.Layout.sidebarVisibilitytype,
  }));

  const toogleMenuBtn = () => {
    var windowSize = document.documentElement.clientWidth;
    dispatch(changeSidebarVisibility("show"));
    if (windowSize > 767)
      document.querySelector(".hamburger-icon").classList.toggle("open");
    //For collapse vertical and semibox menu
    if (
      sidebarVisibilitytype === "show" &&
      (document.documentElement.getAttribute("data-layout") === "vertical" ||
        document.documentElement.getAttribute("data-layout") === "semibox")
    ) {
      if (windowSize < 1025 && windowSize > 767) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.documentElement.getAttribute("data-sidebar-size") === "sm"
          ? document.documentElement.setAttribute("data-sidebar-size", "")
          : document.documentElement.setAttribute("data-sidebar-size", "sm");
      } else if (windowSize > 1025) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.documentElement.getAttribute("data-sidebar-size") === "lg"
          ? document.documentElement.setAttribute("data-sidebar-size", "sm")
          : document.documentElement.setAttribute("data-sidebar-size", "lg");
      } else if (windowSize <= 767) {
        document.body.classList.add("vertical-sidebar-enable");
        document.documentElement.setAttribute("data-sidebar-size", "lg");
      }
    }
  };

  return (
    <React.Fragment>
      <header id="page-topbar" className={headerClass}>
        <div className="layout-width">
          <div className="navbar-header">
            <div className="d-flex">
              <div className="navbar-brand-box horizontal-logo">
                <Link to="/" className="logo">
                  <span className="logo-sm">
                    <img src={logoSm} alt="" height="22" />
                  </span>
                  <div className="logo-lg">
                    <img src={logoSm} alt="" height="22" />
                    <div style={{ fontSize: "1.4em" }}>Robocube HR</div>
                  </div>
                </Link>
              </div>
              <button
                onClick={toogleMenuBtn}
                type="button"
                className="btn btn-sm px-3 fs-16 header-item vertical-menu-btn topnav-hamburger"
                id="topnav-hamburger-icon"
              >
                <span className="hamburger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </button>
            </div>
            <div className="d-flex align-items-center">
              <BranchesDropdown />
              <HeaderMenus/>
              <ProfileDropdown />
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
