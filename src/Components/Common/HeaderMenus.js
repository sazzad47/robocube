import React, { useState } from "react";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom";

const HeaderMenus = () => {
  const menus = [
    {
      id: 1, 
      name: "Apps",
      link: "/",
      icon: "bx bx-dialpad",
      className: "apps"
    },
    {
      id: 2, 
      name: "Help & Support",
      link: "/",
      icon: "bx bxs-help-circle",
      className: "help",
    },
  ]
  return (
    <React.Fragment>
      {menus.map((menu)=> (
        <Link key={menu.id} to={menu.link}>
        <button className={`${menu.className} btn btn-icon btn-topbar btn-ghost-secondary rounded-circle`}>
          <i className={`${menu.icon} fs-22`}></i>
          <Tooltip anchorSelect={`.${menu.className}`} place="bottom">
            {menu.name}
          </Tooltip>
        </button>
      </Link>
      ))}
    </React.Fragment>
  );
};

export default HeaderMenus;
