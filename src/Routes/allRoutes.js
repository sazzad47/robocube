import React from "react";
import { Navigate } from "react-router-dom";

//Pages
import Home from "../pages/home";
import Daily from "../pages/attendance/daily";
import Manually from "../pages/attendance/manually";
import Calendar from "../pages/calendar";
import Announcement from "../pages/contens/announcement";
import CreateAnnouncement from "../pages/contens/announcement/Create";
import SlideShow from "../pages/contens/slideshow";
import LeaveRequests from "../pages/leaves/requests";
import LeaveApprovals from "../pages/leaves/approvals";
import Claims from "../pages/claims";
import AddNewClaims from "../pages/claims/addNew";
import AdvanceSalary from "../pages/advanceSalary";
import AddNewAdvanceSalary from "../pages/advanceSalary/addNew";
import Trip from "../pages/trip";
import Payroll from "../pages/payroll";


const routes = [
  { path: "/dashboard", component: <Home /> },
  { path: "/index", component: <Home /> },
  { path: "/attendance-daily", component: <Daily /> },
  { path: "/attendance-manually", component: <Manually /> },
  { path: "/calendar", component: <Calendar /> },
  { path: "/contents-announcement", component: <Announcement /> },
  { path: "/contents-announcement-add", component: <CreateAnnouncement /> },
  { path: "/contents-slideshow", component: <SlideShow /> },
  { path: "/leaves-requests", component: <LeaveRequests /> },
  { path: "/leaves-approvals", component: <LeaveApprovals /> },
  { path: "/claims", component: <Claims /> },
  { path: "/claims/add", component: <AddNewClaims /> },
  { path: "/advance_salary", component: <AdvanceSalary /> },
  { path: "/advance_salary/add", component: <AddNewAdvanceSalary /> },
  { path: "/trip", component: <Trip /> },
  { path: "/payroll", component: <Payroll /> },
  


  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];


export { routes };
