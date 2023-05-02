import React from "react";
import { useEffect } from "react";
import $ from "jquery";
import "select2";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "Home | Robocube HR";

  useEffect(() => {
    $(".select2").select2({
      theme: "bootstrap4",
    });
  }, []);

  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container container-wrapper pt-4">
          <div className="card mb-3">
            <div className="card-body py-0 my-2">
              <div className="d-flex align-items-center">
                <div style={{ width: "5%" }}>
                  <i className="fa fa-fw fa-bullhorn"></i>
                </div>
                <div className="marquee">
                  <p>Welcome to Robocube HR</p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="font-weight-bold mb-1">52</h4>
                  <span className="d-block">Total Employees</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="font-weight-bold mb-1">0</h4>
                  <span className="d-block">New Employees (Monthly)</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="font-weight-bold mb-1">0</h4>
                  <span className="d-block">Total Leaves (Today)</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card">
                <div className="card-body">
                  <h4 className="font-weight-bold mb-1">0</h4>
                  <span className="d-block">Check In (Today)</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="row">
                <div className="col-md-4 mb-4">
                  <a
                    href="https://robocube.synorexcloud.com/hr/employees/add"
                    className="btn btn-block btn-secondary py-3"
                  >
                    <i className="fa fa-fw fa-user-graduate d-block mx-auto fa-3x mb-2"></i>
                    <span className="d-block">New Employee</span>
                  </a>
                </div>
                <div className="col-md-4 mb-4">
                  <a
                    href="https://robocube.synorexcloud.com/hr/calendar"
                    className="btn btn-block btn-secondary py-3"
                  >
                    <i className="fa fa-fw fa-calendar-alt d-block mx-auto fa-3x mb-2"></i>
                    <span className="d-block">Calendar</span>
                  </a>
                </div>
                <div className="col-md-4 mb-4">
                  <a
                    href="https://robocube.synorexcloud.com/hr/content/add/announcement"
                    className="btn btn-block btn-secondary py-3"
                  >
                    <i className="fa fa-fw fa-chalkboard-teacher d-block mx-auto fa-3x mb-2"></i>
                    <span className="d-block">New Ann.</span>
                  </a>
                </div>
                <div className="col-md-4 mb-4">
                  <a
                    href="https://robocube.synorexcloud.com/hr/reports"
                    className="btn btn-block btn-secondary py-3"
                  >
                    <i className="fa fa-fw fa-chalkboard-teacher d-block mx-auto fa-3x mb-2"></i>
                    <span className="d-block">Reports</span>
                  </a>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-body font-weight-bold pb-2">
                  What's News
                </div>
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush" id="append-news">
                    <li className="list-group-item">
                      <p className="mb-0 font-weight-bold">
                        Robocube HR Upgrade{" "}
                        <em className="float-right small text-muted">
                          8 months ago
                        </em>
                      </p>
                      <span
                        className="text-muted d-block small text-truncated"
                        style={{ whiteSpace: "pre-wrap" }}
                      >
                        - payslip leave update issues
                      </span>
                    </li>

                    <li className="list-group-item">
                      <p className="mb-0 font-weight-bold">
                        Robocube HR Upgrade{" "}
                        <em className="float-right small text-muted">
                          8 months ago
                        </em>
                      </p>
                      <span
                        className="text-muted d-block small text-truncated"
                        style={{ whiteSpace: "pre-wrap" }}
                      >
                        Add "Leaves" &amp; "Claims" functions in App <br />
                        Add "Timetable" in App <br />
                        Show "Year to date - AL &amp; MC" in "Payroll" <br />
                        Amend "Payslip" sync Issues <br />
                        "Leave Request" <br />- Open to Staff who joined instead
                        of confirmed.
                      </span>
                    </li>

                    <li className="list-group-item">
                      <p className="mb-0 font-weight-bold">
                        Robocube HR Upgrade{" "}
                        <em className="float-right small text-muted">
                          8 months ago
                        </em>
                      </p>
                      <span
                        className="text-muted d-block small text-truncated"
                        style={{ whiteSpace: "pre-wrap" }}
                      >
                        Show “Events/Holiday” in Main Page <br />
                        Show Day and Check-In &amp; Out Details in Monthly
                        Attendance Report <br />
                        Provide Date Filtering Options in “App Attendance”{" "}
                        <br />
                        Default 1 Hour of Lunch Time for the Attendance &amp;
                        excluded this lunch hours in “late”.
                      </span>
                    </li>

                    <li className="list-group-item">
                      <p className="mb-0 font-weight-bold">
                        Robocube HR Upgrade{" "}
                        <em className="float-right small text-muted">
                          9 months ago
                        </em>
                      </p>
                      <span
                        className="text-muted d-block small text-truncated"
                        style={{ whiteSpace: "pre-wrap" }}
                      >
                        - attendance report add date name <br />- total wroking
                        hours cant cal lunch time <br />- payroll report add new
                        2 col <br />- app can view monthly attendance (in
                        progress)
                      </span>
                    </li>

                    <li className="list-group-item">
                      <p className="mb-0 font-weight-bold">
                        Robocube HR Upgrade{" "}
                        <em className="float-right small text-muted">
                          9 months ago
                        </em>
                      </p>
                      <span
                        className="text-muted d-block small text-truncated"
                        style={{ whiteSpace: "pre-wrap" }}
                      >
                        - hourly rate amend <br />- receipt not found
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-3">
              <div className="card mb-3">
                <div className="card-body font-weight-bold pb-0">
                  Events / Holiday (Today)
                </div>
                <div className="card-body px-0">
                  <table className="table table-sm table-sm2 mb-0">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="2">No result found</td>
                      </tr>{" "}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-body font-weight-bold pb-0">
                  Birthday (This Month)
                </div>
                <div className="card-body px-0">
                  <table className="table table-sm table-sm2 mb-0">
                    <thead>
                      <tr>
                        <th>Employee</th>
                        <th>Birthday</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <Link to="/" className="btn-link">
                            Lafar
                          </Link>
                        </td>
                        <td>1995-05-06</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="card">
                <div className="card-body font-weight-bold pb-0">
                  Calculate Monthly PCB, EPF, SOCSO, EIS Deductions
                </div>
                <div className="card-body px-0 pb-0">
                  <hr className="m-0" />
                </div>

                <div className="card-body">
                  <form method="get">
                    <div className="form-group row">
                      <label className="col-form-label col-md-3">
                        Basis (MYR)
                      </label>
                      <div className="col-md-9">
                        <input
                          type="number"
                          step="0.01"
                          name="basis"
                          value=""
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-md-3">
                        EPF Type
                      </label>
                      <div className="col-md-9">
                        <select
                          className="form-control select2"
                          name="epf_type"
                          data-select2-id="1"
                          tabIndex="-1"
                          aria-hidden="true"
                        >
                          <option value="custom" data-select2-id="3">
                            Custom Rate
                          </option>
                          <option value="epf_pdf1_a">
                            9% Contribution (Part A)
                          </option>
                          <option value="epf_pdf1_b">
                            9% Contribution (Part B)
                          </option>
                          <option value="epf_pdf1_c">
                            9% Contribution (Part C)
                          </option>
                          <option value="epf_pdf1_d">
                            9% Contribution (Part D)
                          </option>
                          <option value="epf_pdf1_e">
                            9% Contribution (Part E)
                          </option>
                          <option value="epf_pdf2_a">
                            11% Contribution (Part A)
                          </option>
                          <option value="epf_pdf2_b">
                            11% Contribution (Part B)
                          </option>
                          <option value="epf_pdf2_c">
                            11% Contribution (Part C)
                          </option>
                          <option value="epf_pdf2_d">
                            11% Contribution (Part D)
                          </option>
                          <option value="epf_pdf2_e">
                            11% Contribution (Part E)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group row epf_employer_rate_sec">
                      <label className="col-form-label col-md-3">
                        EPF Employer Rate
                      </label>
                      <div className="col-md-9">
                        <div className="input-group">
                          <input
                            type="number"
                            step="0.01"
                            className="form-control"
                            name="epf_employer_rate"
                            value=""
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">%</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row epf_employee_rate_sec">
                      <label className="col-form-label col-md-3">
                        EPF Employee Rate
                      </label>
                      <div className="col-md-9">
                        <div className="input-group">
                          <div className="input-group">
                            <input
                              type="number"
                              step="0.01"
                              className="form-control"
                              name="epf_employee_rate"
                              value=""
                            />
                            <div className="input-group-append">
                              <span className="input-group-text">%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-md-3">
                        SOCSO Category
                      </label>
                      <div className="col-md-9">
                        <select
                          className="form-control select2"
                          name="socso_cat"
                          data-select2-id="4"
                          tabIndex="-1"
                          aria-hidden="true"
                        >
                          <option value="inj_inv" data-select2-id="6">
                            Employment Injury &amp; Invalidity
                          </option>
                          <option value="inj">Employment Injury Only</option>
                          <option value="no">No Contribution</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-md-3">
                        PCB (MTD)/ SOCSO
                      </label>
                      <div className="col-md-9">
                        <select
                          className="form-control select2"
                          name="socso_table"
                          data-select2-id="7"
                          tabIndex="-1"
                          aria-hidden="true"
                        >
                          <option value="2022" data-select2-id="9">
                            2022
                          </option>
                          <option value="2021">2021</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <label className="col-form-label col-md-3">
                        EIS Contribution
                      </label>
                      <div className="col-md-9">
                        <select
                          className="form-control select2"
                          name="eis_contribution"
                          data-select2-id="10"
                          tabIndex="-1"
                          aria-hidden="true"
                        >
                          <option value="y" data-select2-id="12">
                            Yes
                          </option>
                          <option value="n">No</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group row">
                      <div className="col-md-9 offset-md-3">
                        <button
                          type="submit"
                          name="cal_gov_amount"
                          className="btn btn-primary"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
