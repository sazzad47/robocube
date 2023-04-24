import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
  const history = useNavigate();
  //state data
  const [isDashboard, setIsDashboard] = useState(false);
  const [isContent, setIsContent] = useState(false);
  const [isLeaves, setIsLeaves] = useState(false);
  const [isEmployees, setIsEmployees] = useState(false);
  const [isTimetable, setIsTimetable] = useState(false);
  const [isSecondary, setIsSecondary] = useState(false);
  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul = document.getElementById("two-column-menu");
      const iconItems = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        var id = item.getAttribute("subitems");
        if (document.getElementById(id))
          document.getElementById(id).classList.remove("show");
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");
    if (iscurrentState !== "Dashboard") {
      setIsDashboard(false);
    }
    if (iscurrentState !== "Content") {
      setIsContent(false);
    }
    if (iscurrentState !== "Leaves") {
      setIsLeaves(false);
    }
    if (iscurrentState !== "Employees") {
      setIsEmployees(false);
    }
    if (iscurrentState !== "Timetable") {
      setIsTimetable(false);
    }
    if (iscurrentState !== "Secondary") {
      setIsSecondary(false);
    }
  }, [
    history,
    iscurrentState,
    isDashboard,
    isContent,
    isLeaves,
    isEmployees,
    isTimetable,
    isSecondary,
  ]);

  const menuItems = [
    {
      id: "home",
      label: "Home",
      icon: "bx bx-home",
      link: "/",
    },
    {
      id: "attendance",
      label: "Attendance",
      icon: "bx bx-time",
      stateVariables: isDashboard,
      click: function (e) {
        e.preventDefault();
        setIsDashboard(!isDashboard);
        setIscurrentState("Dashboard");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "daily",
          label: "Daily",
          link: "/attendance-daily",
          parentId: "attendance",
        },
        {
          id: "manually",
          label: "Manually",
          link: "/attendance-manually",
          parentId: "attendance",
        },
    
      ],
    },
    {
      id: "calendar",
      label: "Calendar",
      icon: "bx bx-calendar",
      link: "/calendar",
    },
    {
      id: "content",
      label: "Content",
      icon: "bx bx-slideshow",
      stateVariables: isContent,
      click: function (e) {
        e.preventDefault();
        setIsContent(!isContent);
        setIscurrentState("Content");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "announcement",
          label: "Announcement",
          link: "/contents-announcement",
          parentId: "content",
        },
        {
          id: "slideshow",
          label: "Slideshow",
          link: "/contents-slideshow",
          parentId: "content",
        },
    
      ],
    },
    {
      id: "leaves",
      label: "Leaves",
      icon: "bx bx-doughnut-chart",
      stateVariables: isLeaves,
      click: function (e) {
        e.preventDefault();
        setIsLeaves(!isLeaves);
        setIscurrentState("Leaves");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "requests",
          label: "Requests",
          link: "/leaves-requests",
          parentId: "leaves",
        },
        {
          id: "approvals",
          label: "Approvals",
          link: "/leaves-approvals",
          parentId: "leaves",
        },
    
      ],
    },
    {
      id: "claims",
      label: "Claims",
      icon: "bx bx-notepad",
      link: "/claims",
    },
    {
      id: "advance-salary",
      label: "Advance Salary",
      icon: "bx bx-money-withdraw",
      link: "/advance_salary",
    },
    {
      id: "employees",
      label: "Employees",
      icon: "bx bx-group",
      stateVariables: isEmployees,
      click: function (e) {
        e.preventDefault();
        setIsEmployees(!isEmployees);
        setIscurrentState("Employees");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "all_employees",
          label: "All Employees",
          link: "/employees-all",
          parentId: "employees",
        },
        {
          id: "resignation",
          label: "Resignation",
          link: "/employees-resignation",
          parentId: "employees",
        },
        {
          id: "asli",
          label: "Asli",
          link: "/employees-asli",
          parentId: "employees",
        },
        {
          id: "driver",
          label: "Driver",
          link: "/employees-driver",
          parentId: "employees",
        },
    
      ],
    },
    {
      id: "trip",
      label: "Trip",
      icon: "bx bx-trip",
      link: "/trip",
    },
    {
      id: "payroll",
      label: "Payroll",
      icon: "bx bx-note",
      link: "/payroll",
    },
    {
      id: "timetable",
      label: "Timetable",
      icon: "bx bx-table",
      stateVariables: isTimetable,
      click: function (e) {
        e.preventDefault();
        setIsTimetable(!isTimetable);
        setIscurrentState("Timetable");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "timetable-general",
          label: "General",
          link: "/timetable-general",
          parentId: "timetable",
        },
        {
          id: "timetable-driver",
          label: "Driver",
          link: "/timetable-driver",
          parentId: "timetable",
        },
    
      ],
    },
    {
      id: "reports",
      label: "Reports",
      icon: "bx bx-book-content",
      link: "/reports",
    },
    {
      id: "secondary",
      label: "Secondary",
      icon: "bx bx-category",
      stateVariables: isSecondary,
      click: function (e) {
        e.preventDefault();
        setIsSecondary(!isSecondary);
        setIscurrentState("Secondary");
        updateIconSidebar(e);
      },
      subItems: [
        {
          id: "secondary-banks",
          label: "Banks",
          link: "/secondary-banks",
          parentId: "secondary",
        },
        {
          id: "secondary-races",
          label: "Races",
          link: "/secondary-races",
          parentId: "secondary",
        },
        {
          id: "secondary-locations",
          label: "Locations",
          link: "/secondary-locations",
          parentId: "secondary",
        },
        {
          id: "secondary-positions",
          label: "Positions",
          link: "/secondary-positions",
          parentId: "secondary",
        },
        {
          id: "secondary-religions",
          label: "Religions",
          link: "/secondary-religions",
          parentId: "secondary",
        },
        {
          id: "secondary-additions",
          label: "Additions",
          link: "/secondary-additions",
          parentId: "secondary",
        },
        {
          id: "secondary-deductions",
          label: "Deductions",
          link: "/secondary-deductions",
          parentId: "secondary",
        },
        {
          id: "secondary-work_mode",
          label: "Work Mode",
          link: "/secondary-work_mode",
          parentId: "secondary",
        },
        {
          id: "secondary-leave_types",
          label: "Leave Types",
          link: "/secondary-leave_types",
          parentId: "secondary",
        },
        {
          id: "secondary-claim_types",
          label: "Claim Types",
          link: "/secondary-claim_types",
          parentId: "secondary",
        },
        {
          id: "secondary-nationalities",
          label: "Nationalities",
          link: "/secondary-nationalities",
          parentId: "secondary",
        },
        {
          id: "secondary-departments",
          label: "Departments",
          link: "/secondary-departments",
          parentId: "secondary",
        },
        {
          id: "secondary-relationships",
          label: "Relationships",
          link: "/secondary-relationships",
          parentId: "secondary",
        },
        {
          id: "secondary-marital_status",
          label: "Marital Status",
          link: "/secondary-marital_status",
          parentId: "secondary",
        },
        {
          id: "secondary-payment_methods",
          label: "Payment Methods",
          link: "/secondary-payment_methods",
          parentId: "secondary",
        },
        {
          id: "secondary-hight_education_levels",
          label: "High Education Levels",
          link: "/secondary-hight_education_levels",
          parentId: "secondary",
        },
        
    
      ],
    },
    {
      id: "settings",
      label: "Settings",
      icon: "bx bx-cog",
      link: "/settings",
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
