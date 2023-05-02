import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import Alert from "../../../Components/Common/Alert";

const DataTable = () => {
  const navigate = useNavigate();

  const [alertUser, setAlertUser] = useState(false);

  return (
    <React.Fragment>
      <Alert
        show={alertUser}
        type="warning"
        onConfirm={() => setAlertUser(false)}
        onCancel={() => setAlertUser(false)}
        confirmBtnText="Yes"
        cancelBtnText="No"
        message="Are you sure want to delete this slideshow?"
      />
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="text-left">No</th>
            <th className="text-left">Employee</th>
            <th style={{ width: "12%" }}>
              <div className="sync btn-link mr-3">
                <i className="fa fa-fw fa-sync"></i>
                <Tooltip anchorSelect=".sync" place="top">
                  Sync to basic salary
                </Tooltip>
              </div>
              Basic Salary (MYR)
            </th>
            <th style={{ width: "12%" }}>Additions (MYR)</th>
            <th style={{ width: "12%" }}>Gross Pay (MYR)</th>
            <th style={{ width: "12%" }}>Deductions (MYR)</th>
            <th style={{ width: "12%" }}>Net Pay (MYR)</th>
            <th style={{ width: "12%" }}>HRDF (MYR)</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="summary-tbody">
          <tr id="7141">
            <input type="hidden" name="user_id" value="166804835212" />
            <input type="hidden" name="month" value="05" />
            <input type="hidden" name="year" value="2023" />
            <input type="hidden" name="salary_amount" value="1600" />
            <td className="text-left">1 </td>
            <td className="text-left">
              <div className="media">
                <a href="https://robocube.synorexcloud.com/hr/employees/edit/166804835212">
                  <img
                    alt=""
                    src="https://cdn.synorex.link/assets/images/blank/4x3.jpg"
                    className="mr-2 rounded-circle border"
                    style={{
                      height: "50px",
                      width: "50px",
                      objectFit: "cover",
                    }}
                  />
                </a>
                <div className="media-body my-auto">
                  <Link to="/" className="btn-link">
                    Amirah{" "}
                  </Link>
                  <span className="d-block small text-muted">
                    Position: Office Assistant{" "}
                  </span>
                  <span className="d-block small text-muted">
                    Type: General{" "}
                  </span>
                  <div
                    className="mt-2 d-flex align-items-center"
                    style={{ fontSize: "100%" }}
                  >
                    <span
                      className="working_days_link"
                      data-id="7141"
                      value="0"
                      data-toggle="modal"
                      data-target="#modal-working-days"
                    >
                      <span className="employee_info small badge badge-primary working_days">
                        <Tooltip
                          className="bg-white text-dark"
                          style={{ fontSize: "1em" }}
                          anchorSelect=".employee_info"
                          place="top"
                        >
                          <table className="m-0 table-borderless">
                            <tr>
                              <td>Salary basis:&nbsp;&nbsp;&nbsp;</td>
                              <td>Monthly</td>
                            </tr>
                            <tr>
                              <td>Salary amount:&nbsp;&nbsp;&nbsp;</td>
                              <td>1,600.00</td>
                            </tr>
                            <tr>
                              <td>Public Holiday:&nbsp;&nbsp;&nbsp;</td>
                              <td>0</td>
                            </tr>
                            <tr>
                              <td>Working days:&nbsp;&nbsp;&nbsp;</td>
                              <td>
                                <span className="working_days">0</span>/22
                              </td>
                            </tr>
                          </table>
                        </Tooltip>
                        Info
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </td>
            <td>
              <Link to="/" className="btn-link">
                <span className="amount_basic_salary">0.00 </span>
              </Link>
              <input
                type="hidden"
                className="input_amount_basic_salary"
                name="amount_basic_salary[7141]"
                value="0"
              />
              <input
                type="hidden"
                className="input_salary_type"
                name="salary_type[7141]"
                value="monthly"
              />
              <input
                type="hidden"
                className="input_salary_rate"
                name="salary_rate[7141]"
                value="1"
              />
              <input
                type="hidden"
                className="input_basic_salary"
                name="basic_salary[7141]"
                value="0"
              />
            </td>
            <td>
              <Link to="/" className="btn-link">
                <span className="amount_basic_salary">0.00 </span>
              </Link>
              <input
                type="hidden"
                className="input_additions"
                name="additions[7141]"
                value='[{"secondary":"166839467441","qty":"1","amount":"0","type":""},{"secondary":"166839477839","qty":"1","amount":"0","type":""},{"secondary":"166839465724","qty":"1","amount":"0","type":""}]'
              />
              <input
                type="hidden"
                className="payroll_type"
                name="payroll_type[7141]"
                value=""
              />
            </td>
            <td>
              <span className="amount_gross">0.00</span>
            </td>
            <td>
              <Link to="/" className="btn-link">
                <span className="amount_basic_salary">0.00 </span>
              </Link>
              <input
                type="hidden"
                className="input_deductions"
                name="deductions[7141]"
                value="[]"
              />
              <input
                type="hidden"
                className="input_deductions_gov"
                name="deductions_gov[7141]"
                value='[{"title":"EPF","help_text":"EPF No: 115141608","employer":"0.00","employer_rate":"Auto","employee":"0.00","employee_rate":"Auto"},{"title":"SOCSO","help_text":"","employer":"0.00","employee":"0.00","socso_type":"socso\/inj_inv\/2022"}]'
              />
            </td>
            <td>
              <span className="amount_net">0.00</span>
            </td>
            <td>0.00</td>
            <td className="text-left">
              <div
                className="send-email btn btn-sm btn-secondary"
                data-original-title="Send Email"
              >
                <Tooltip anchorSelect=".send-email" place="top">
                  Send Email
                </Tooltip>
                <i className="fa fa-fw fa-envelope"></i>
              </div>
              <a
                href="https://wa.me/60134303114?text=Hi *Amirah*, this is your payslip of *2023-05*%0aClick the link to view your payslip: https%3A%2F%2Frobocube.synorexcloud.com%2Fhr%2Fexport%2Fpayslip%3Fuser%3D166804835212%26month%3D2023-05%26branch%3D166683821653"
                target="_blank"
                rel="noreferrer"
                className="send-whatsapp btn btn-sm btn-secondary"
              >
                <Tooltip anchorSelect=".send-whatsapp" place="top">
                  Send WhatsApp
                </Tooltip>
                <i className="fab fa-fw fa-whatsapp text-white"></i>
              </a>
              <a
                href="https://robocube.synorexcloud.com/hr/export/payslip?user=166804835212&amp;month=2023-05&amp;branch=166683821653&amp;dl"
                target="_blank"
                rel="noreferrer"
                className="download btn btn-sm btn-success"
              >
                <Tooltip anchorSelect=".download" place="top">
                  Download
                </Tooltip>
                <i className="fa fa-fw fa-download"></i>
              </a>
              <a
                href="https://robocube.synorexcloud.com/hr/export/payslip?user=166804835212&amp;month=2023-05&amp;branch=166683821653"
                target="_blank"
                rel="noreferrer"
                className="view btn btn-sm btn-warning"
              >
                <Tooltip anchorSelect=".view" place="top">
                  View
                </Tooltip>
                <i className="fa fa-fw fa-eye"></i>
              </a>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>
              Grand Total (<span id="total_selected_employee">1</span>)
            </th>
            <th className="text-right">
              <span className="total_basis">0.00</span>
            </th>
            <th className="text-right">
              <span className="total_additions">1.00</span>
            </th>
            <th className="text-right">
              <span className="total_gross">1.00</span>
            </th>
            <th className="text-right">
              <span className="total_deductions">0.00</span>
            </th>
            <th className="text-right">
              <span className="total_net">1.00</span>
            </th>
            <th></th>
          </tr>
        </tfoot>
      </table>

      <div className="row">
        <div className="col-md-12 text-right">
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-secondary"
              name="delete"
              onClick={() => setAlertUser(true)}
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() => navigate("/payroll_hock/list")}
              className="ml-1 btn btn-primary"
            >
              Save
            </button>
            <input type="hidden" name="status" value="draft" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DataTable;
