import React, { useEffect, useState } from "react";
import { Collapse, Nav, NavItem, NavLink } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import { navItems } from "./NavData";

const NestedSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(null);

  useEffect(() => {
    const storedOpenItemIndex = sessionStorage.getItem("openItemIndex");
    if (storedOpenItemIndex) {
      setIsOpen(parseInt(storedOpenItemIndex));
    }
  }, []);

  const toggle = (index) => {
    if (isOpen === index) {
      setIsOpen(null);
      sessionStorage.removeItem("openItemIndex");
    } else {
      setIsOpen(index);
      sessionStorage.setItem("openItemIndex", index);
    }
  };

  const isChildActive = (child) => {
    return location.pathname === child.link;
  };

  return (
    <div className="sidebar-wrapper">
      <Nav className="sidebar-nav" vertical>
        {navItems.map((item, index) => (
          <NavItem key={index}>
            <NavLink
              className={`nav-link ${isOpen === index ? "active-parent" : ""}`}
              tag={Link}
              to={item.link}
              onClick={() => toggle(index)}
            >
              <span className="nav-icon">
                <i className={`${item.icon}`}> </i>
              </span>
              <span className="nav-label">{item.label}</span>
            </NavLink>
            {item.subItems && (
              <Collapse
                isOpen={isOpen === index}
                classNames="Collapse"
                timeout={{ enter: 300, exit: 300 }}
              >
                <Nav vertical>
                  {item.subItems.map((child, childIndex) => (
                    <NavItem key={childIndex}>
                      <NavLink
                        className={`nav-link ${
                          isChildActive(child) ? "active-child" : ""
                        }`}
                        tag={Link}
                        to={child.link}
                      >
                        <span className="nav-label">{child.label}</span>
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
              </Collapse>
            )}
          </NavItem>
        ))}
      </Nav>
    </div>
  );
};

export default NestedSidebar;
