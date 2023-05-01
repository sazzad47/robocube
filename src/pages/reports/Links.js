import {
  faClock,
  faDoorOpen,
  faMoneyCheckAlt,
  faChartPie,
  faSearchDollar,
  faHandHoldingUsd,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";

const Links = () => {
  const attendanceLinks = [
    {
      id: 1,
      label: "Daily Attendance (Employees)",
      link: "/reports/daily_attendance_emp",
    },
    {
      id: 2,
      label: "Daily Attendance (Drivers)",
      link: "/reports/daily_attendance_driver",
    },
    { id: 3, label: "Daily Attendance", link: "/reports/daily_attendance" },
    {
      id: 4,
      label: "Monthly Attendance (Employees)",
      link: "/reports/monthly_attendance_emp",
    },
    {
      id: 5,
      label: "Monthly Attendance",
      link: "/reports/monthly_attendance",
    },
    { id: 6, label: "Daily Overtime", link: "/reports/daily_overtime" },
  ];
  const leaveLinks = [
    {
      id: 1,
      label: "Leave by Types",
      link: "/reports/leave_types",
    },
    {
      id: 2,
      label: "Leave by Department",
      link: "/reports/leave_department",
    },
    { id: 3, label: "Monthly Leave", link: "/reports/monthly_leave" },
    {
      id: 4,
      label: "Leave Summary",
      link: "/reports/leave_summary",
    },
  ];
  const claimLinks = [
    {
      id: 1,
      label: "Claims Details",
      link: "/reports/claims_details",
    },
    {
      id: 2,
      label: "Claims Summary",
      link: "/reports/claims_summary",
    },
    { id: 3, label: "Claims by Types", link: "/reports/claims_type" },
  ];
  const dataCheckLinks = [
    {
      id: 1,
      label: "Employees",
      link: "/reports/check_employees",
    },
    {
      id: 2,
      label: "Allowance",
      link: "/reports/allowance",
    },
    { id: 3, label: "Deduction", link: "/reports/deduction" },
  ];
  return (
    <React.Fragment>
      <div className="container container-wrapper pt-4">
        <div className="row">
          <div className="col-md-3 mb-5">
            <h5 className="font-weight-bold mb-3">
              <i className="fa fa-fw fa-clock mr-1"></i> Attendance
            </h5>
            <ul className="nav flex-column">
              {attendanceLinks.map((item) => (
                <li key={item.id} className="nav-item">
                  <Link className="nav-link px-0 py-2" to={`${item.link}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <h5 className="font-weight-bold mb-3">
              <i className="fa fa-fw fa-door-open mr-1"></i> Leave
            </h5>
            <ul className="nav flex-column">
              {leaveLinks.map((item) => (
                <li key={item.id} className="nav-item">
                  <Link className="nav-link px-0 py-2" to={`${item.link}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <h5 className="font-weight-bold mb-3">
              <i className="fa fa-fw fa-money-check-alt mr-1"></i> Claims
            </h5>
            <ul className="nav flex-column">
              {claimLinks.map((item) => (
                <li key={item.id} className="nav-item">
                  <Link className="nav-link px-0 py-2" to={`${item.link}`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <h5 className="font-weight-bold mb-3">
              <i className="fa fa-fw fa-chart-pie mr-1"></i> Data Check
            </h5>
            <ul className="nav flex-column">
              {dataCheckLinks.map((item)=> (
                  <li key={item.id} className="nav-item">
                  <Link
                    className="nav-link px-0 py-2"
                    to={`${item.link}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <h5 className="font-weight-bold mb-3">
              <i className="fa fa-fw fa-search-dollar mr-1"></i> PCB
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link px-0 py-2"
                  to="/reports/pcb"
                >
                  PCB Report
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <h5 className="font-weight-bold mb-3">
              <i className="fa fa-fw fa-hand-holding-usd mr-1"></i> HRDF
            </h5>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link
                  className="nav-link px-0 py-2"
                  to="/reports/hrdf"
                >
                  HRDF Listing
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mb-5">
            <h5 className="font-weight-bold mb-3">
              <i className="fa fa-fw fa-hand-holding-usd mr-1"></i> Salary
            </h5>
            <ul className="nav flex-column">
              <em className="text-muted">No result found</em>{" "}
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Links;
