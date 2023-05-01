import React, { useState } from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { Link } from "react-router-dom";

const BranchesDropdown = () => {
  //Dropdown Toggle
  const [isBranchesDropdown, setIsBranchesDropdown] = useState(false);
  const toggleBranchesDropdown = () => {
    setIsBranchesDropdown(!isBranchesDropdown);
  };
  return (
    <React.Fragment>
      <Dropdown isOpen={isBranchesDropdown} toggle={toggleBranchesDropdown} >
        <DropdownToggle
          caret
          tag="div"
          style={{ cursor: "pointer" }}
          className="nav-link py-0"
        >
          <i className="fa fa-fw fa-building"></i> Lolita Q
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu dropdown-menu-end mt-3">
          <h6 className="dropdown-header">RECENT</h6>
          <Link className="dropdown-item" to="/">
            <i className="fa fa-fw fa-building mr-1"></i> Lolita Q
          </Link>{" "}
          <div className="dropdown-divider"></div>
          <a
            className="dropdown-item text-primary text-center"
            style={{ backgroundColor: "inherit !important" }}
            href="https://robocube.synorexcloud.com/hr/branches/list"
          >
            All Branches
          </a>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default BranchesDropdown;
