import React from "react";
import { Card, Col, Row } from "reactstrap";

const Minitables = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body font-weight-bold pb-1">Bank File</div>
            <div className="card-body py-0">
              Download banking Excel file to easily copy paste the data to you
              bank excel template.
            </div>
            <div className="card-body px-0 pb-0">
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-top d-flex">
                  <div className="w-50 my-auto">Excel</div>
                  <div className="w-50 my-auto">
                    <a
                      href="https://robocube.synorexcloud.com/hr/payroll/export_bank_excel/168295900266"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary float-right"
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li className="list-group-item border-top d-flex">
                  <div className="w-50 my-auto">EPF</div>
                  <div className="w-50 my-auto">
                    <a
                      href="https://robocube.synorexcloud.com/hr/payroll/export_epf_csv/168295900266"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary float-right"
                    >
                      CSV
                    </a>
                  </div>
                </li>
                <li className="list-group-item border-top d-flex">
                  <div className="w-50 my-auto">PBB</div>
                  <div className="w-50 my-auto">
                    <a
                      href="https://robocube.synorexcloud.com/hr/payroll/export_pbb_excel/168295900266"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary float-right"
                    >
                      EXCEL
                    </a>
                  </div>
                </li>
                <li className="list-group-item border-top d-flex">
                  <div className="w-50 my-auto">
                    SOCSO
                    <small
                      className="d-block mt-2 text-warning font-weight-bold"
                      style={{ flexBasis: "100%" }}
                    >
                      Please make sure the employer SOCSO code and employees' ID
                      number have been set
                    </small>
                  </div>
                  <div className="w-50 my-auto">
                    <button
                      onClick="download_txt(168295900266)"
                      className="btn btn-secondary float-right"
                      disabled=""
                    >
                      TXT
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body font-weight-bold pb-1">
              Payroll Reports
            </div>
            <div className="card-body py-0">
              You can download the reports listed below for this pay period.
            </div>
            <div className="card-body px-0 pb-0">
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-top d-flex">
                  <div className="w-50 my-auto">Payroll Report</div>
                  <div className="w-50 my-auto">
                    <a
                      href="https://robocube.synorexcloud.com/hr/payroll/export_payroll/168295900266"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary float-right"
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li className="list-group-item border-top d-flex">
                  <div className="w-50 my-auto">Variance Report</div>
                  <div className="w-50 my-auto">
                    <a
                      href="https://robocube.synorexcloud.com/hr/payroll/export_variance?month=2023-05"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary float-right"
                    >
                      Download
                    </a>
                  </div>
                </li>
                <li className="list-group-item border-top d-flex">
                  <div className="w-50 my-auto">Department Report</div>
                  <div className="w-50 my-auto">
                    <a
                      href="https://robocube.synorexcloud.com/hr/export/dprt_report/168295900266"
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-secondary float-right"
                    >
                      Download
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-4">
          <div className="card">
            <div className="card-body font-weight-bold pb-1">Summary</div>
            <div className="card-body px-0 pb-0">
              <ul className="list-group list-group-flush">
                <li className="list-group-item border-top d-flex">
                  <div className="w-50 my-auto">EPF</div>
                  <div className="w-50 my-auto text-right font-weight-bold">
                    0.00{" "}
                  </div>
                </li>
                <li className="list-group-item border-top d-flex">
                  <div className="w-50 my-auto">SOCSO</div>
                  <div className="w-50 my-auto text-right font-weight-bold">
                    0.00
                  </div>
                </li>
                <li className="list-group-item border-top d-flex">
                  <div className="w-50 my-auto">EIS</div>
                  <div className="w-50 my-auto text-right font-weight-bold">
                    0.00
                  </div>
                </li>
                <li className="list-group-item border-top d-flex">
                  <div className="w-50 my-auto">PCB</div>
                  <div className="w-50 my-auto text-right font-weight-bold">
                    0.00
                  </div>
                </li>
                <li className="list-group-item border-top d-flex">
                  <div className="w-50 my-auto">HRDF</div>
                  <div className="w-50 my-auto text-right font-weight-bold">
                    0.00
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Minitables;
