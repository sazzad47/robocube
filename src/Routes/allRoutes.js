import React from "react";
import { Navigate } from "react-router-dom";

//Pages
import Home from "../pages/home";
//Attendance
import Daily from "../pages/attendance/daily";
import Manually from "../pages/attendance/manually";
import Calendar from "../pages/calendar";
//Contents
import Announcement from "../pages/contens/announcement";
import CreateAnnouncement from "../pages/contens/announcement/Create";
import SlideShow from "../pages/contens/slideshow";
//Leaves
import LeaveRequests from "../pages/leaves/requests";
import LeaveApprovals from "../pages/leaves/approvals";
//Claims
import Claims from "../pages/claims";
import AddNewClaims from "../pages/claims/addNew";
//Advance Salary
import AdvanceSalary from "../pages/advanceSalary";
import AddNewAdvanceSalary from "../pages/advanceSalary/addNew";
//Trip
import Trip from "../pages/trip";
import AddNewTrip from "../pages/trip/addNew";
//Payroll
import Payroll from "../pages/payroll";
import EditPayroll from "../pages/payroll/edit";
import ViewPayroll from "../pages/payroll/view";
//Timetable
import GeneralTimetable from "../pages/timeTable/general";
import DriverTimetable from "../pages/timeTable/driver";
import AddNewTimetable from "../pages/timeTable/general/addNew";
//Reports
import Reports from "../pages/reports";
import DailyAttendanceEmployees from "../pages/reports/attendance/dailyAttendanceEmployees";
import DailyAttendanceDrivers from "../pages/reports/attendance/dailyAttendanceDrivers";
import DailyAttendance from "../pages/reports/attendance/dailyAttendance";
import MonthlyAttendanceEmployees from "../pages/reports/attendance/monthlyAttendanceEmployees";
import MonthlyAttendance from "../pages/reports/attendance/monthlyAttendance";
import DailyOvertime from "../pages/reports/attendance/dailyOvertime";
import LeaveByTypes from "../pages/reports/leave/leaveByTypes";
import LeaveByDepartment from "../pages/reports/leave/leaveByDepartment";
import MonthlyLeave from "../pages/reports/leave/monthlyLeave";
import LeaveSummary from "../pages/reports/leave/leaveSummary";
import ClaimsDetails from "../pages/reports/claims/claimsDetails";
import ClaimsSummary from "../pages/reports/claims/claimsSummary";
import ClaimsbyTypes from "../pages/reports/claims/claimsByTypes";
import CheckEmployees from "../pages/reports/dataCheck/employees";
import CheckAllowance from "../pages/reports/dataCheck/allowance";
import CheckDeduction from "../pages/reports/dataCheck/deduction";
import PCBReport from "../pages/reports/PCBReport";
import HRDFListing from "../pages/reports/HRDFfListing";


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
  { path: "/trip/add", component: <AddNewTrip /> },
  { path: "/payroll", component: <Payroll /> },
  { path: "/payroll/:id/edit", component: <EditPayroll /> },
  { path: "/payroll/:id/view", component: <ViewPayroll /> },
  { path: "/timetable/general", component: <GeneralTimetable /> },
  { path: "/timetable/driver", component: <DriverTimetable /> },
  { path: "/timetable/add", component: <AddNewTimetable /> },
  { path: "/reports", component: <Reports /> },
  {
    path: "/reports/daily_attendance_emp",
    component: <DailyAttendanceEmployees />,
  },
  {
    path: "/reports/daily_attendance_driver",
    component: <DailyAttendanceDrivers />,
  },
  {
    path: "/reports/daily_attendance",
    component: <DailyAttendance />,
  },
  {
    path: "/reports/monthly_attendance_emp",
    component: <MonthlyAttendanceEmployees />,
  },
  {
    path: "/reports/monthly_attendance",
    component: <MonthlyAttendance />,
  },
  {
    path: "/reports/daily_overtime",
    component: <DailyOvertime />,
  },
  { path: "/reports/leave_types", component: <LeaveByTypes /> },
  { path: "/reports/leave_department", component: <LeaveByDepartment /> },
  { path: "/reports/monthly_leave", component: <MonthlyLeave /> },
  { path: "/reports/leave_summary", component: <LeaveSummary /> },
  { path: "/reports/claims_details", component: <ClaimsDetails /> },
  { path: "/reports/claims_summary", component: <ClaimsSummary /> },
  { path: "/reports/claims_type", component: <ClaimsbyTypes /> },
  { path: "/reports/check_employees", component: <CheckEmployees /> },
  { path: "/reports/allowance", component: <CheckAllowance /> },
  { path: "/reports/deduction", component: <CheckDeduction /> },
  { path: "/reports/pcb", component: <PCBReport /> },
  { path: "/reports/hrdf", component: <HRDFListing /> },

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
