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
//Secondary
import Banks from "../pages/secondary/banks";
import AddBank from "../pages/secondary/banks/add";
import Races from "../pages/secondary/races";
import AddRace from "../pages/secondary/races/add";
import Locations from "../pages/secondary/locations";
import AddLocation from "../pages/secondary/locations/add";
import Positions from "../pages/secondary/positions";
import AddPosition from "../pages/secondary/positions/add";
import Religions from "../pages/secondary/religions";
import AddReligion from "../pages/secondary/religions/add";
import Additions from "../pages/secondary/additions";
import AddAddition from "../pages/secondary/additions/add";
import Deductions from "../pages/secondary/deductions";
import AddDeduction from "../pages/secondary/deductions/add";
import WorkMode from "../pages/secondary/workMode";
import AddWorkMode from "../pages/secondary/workMode/add";
import LeaveTypes from "../pages/secondary/leaveTypes";
import AddLeaveType from "../pages/secondary/leaveTypes/add";
import ClaimTypes from "../pages/secondary/claimTypes";
import AddClaimType from "../pages/secondary/claimTypes/add";
import Nationalities from "../pages/secondary/nationalities";
import AddNationality from "../pages/secondary/nationalities/add";
import Departments from "../pages/secondary/departments";
import AddDepartment from "../pages/secondary/departments/add";
import Relationships from "../pages/secondary/relationships";
import AddRelationship from "../pages/secondary/relationships/add";
import MaritalStatus from "../pages/secondary/maritalStatus";
import AddMaritalStatus from "../pages/secondary/maritalStatus/add";
import PaymentMethods from "../pages/secondary/paymentMethods";
import AddPaymentMethod from "../pages/secondary/paymentMethods/add";
import HighEducationalLevels from "../pages/secondary/highEducationalLevels";
import AddHighEducationalLevel from "../pages/secondary/highEducationalLevels/add";
//Settings
import GeneralSettings from "../pages/settings/general";
import AllAdmins from "../pages/settings/admins";
import Devices from "../pages/settings/devices";
import AddDevice from "../pages/settings/devices/add";
import Payslip from "../pages/settings/payslip";
import Migrate from "../pages/settings/migrate";
import PointoAPI from "../pages/settings/pointoAPI";

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
  { path: "/secondary/list/bank", component: <Banks /> },
  { path: "/secondary/add/bank", component: <AddBank /> },
  { path: "/secondary/list/race", component: <Races /> },
  { path: "/secondary/add/race", component: <AddRace /> },
  { path: "/secondary/list/location", component: <Locations /> },
  { path: "/secondary/add/location", component: <AddLocation /> },
  { path: "/secondary/list/position", component: <Positions /> },
  { path: "/secondary/add/position", component: <AddPosition /> },
  { path: "/secondary/list/religion", component: <Religions /> },
  { path: "/secondary/add/religion", component: <AddReligion /> },
  { path: "/secondary/list/addition", component: <Additions /> },
  { path: "/secondary/add/addition", component: <AddAddition /> },
  { path: "/secondary/list/deduction", component: <Deductions /> },
  { path: "/secondary/add/deduction", component: <AddDeduction /> },
  { path: "/secondary/list/work_mode", component: <WorkMode /> },
  { path: "/secondary/add/work_mode", component: <AddWorkMode /> },
  { path: "/secondary/list/leave_type", component: <LeaveTypes /> },
  { path: "/secondary/add/leave_type", component: <AddLeaveType /> },
  { path: "/secondary/list/claim_type", component: <ClaimTypes /> },
  { path: "/secondary/add/claim_type", component: <AddClaimType /> },
  { path: "/secondary/list/nationality", component: <Nationalities /> },
  { path: "/secondary/add/nationality", component: <AddNationality /> },
  { path: "/secondary/list/department", component: <Departments /> },
  { path: "/secondary/add/department", component: <AddDepartment /> },
  { path: "/secondary/list/relationship", component: <Relationships /> },
  { path: "/secondary/add/relationship", component: <AddRelationship /> },
  { path: "/secondary/list/marital_status", component: <MaritalStatus /> },
  { path: "/secondary/add/marital_status", component: <AddMaritalStatus /> },
  { path: "/secondary/list/payment_method", component: <PaymentMethods /> },
  { path: "/secondary/add/payment_method", component: <AddPaymentMethod /> },
  {
    path: "/secondary/list/highest_education_level",
    component: <HighEducationalLevels />,
  },
  {
    path: "/secondary/add/highest_education_level",
    component: <AddHighEducationalLevel />,
  },
  { path: "/settings/general", component: <GeneralSettings /> },
  { path: "/admins/list", component: <AllAdmins /> },
  { path: "/devices/list", component: <Devices /> },
  { path: "/devices/add", component: <AddDevice /> },
  { path: "/settings/payslip", component: <Payslip /> },
  { path: "/migrate/list", component: <Migrate /> },
  { path: "/settings/pointoapi", component: <PointoAPI /> },

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
