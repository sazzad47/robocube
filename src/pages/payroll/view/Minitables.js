import React from "react";
import { Card, Col, Row } from "reactstrap";

const Minitables = () => {
  return (
    <React.Fragment>
      <Row className="mt-3">
        <Col md={4}>
          <Card>
            <div className="p-3">
              <h6 className="fw-bold">Bank File</h6>
              <p>
                Download banking Excel file to easily copy paste the data to you
                bank excel template.
              </p>
            </div>
            <div className="d-flex flex-column">
              <div className="border-top p-3 d-flex w-100 justify-content-between align-items-center">
                <div className="fs-13">Excel</div>
                <button className="btn btn-custom">Download</button>
              </div>
              <div className="border-top p-3 d-flex w-100 justify-content-between align-items-center">
                <div className="fs-13">EPF</div>
                <button className="btn btn-custom">CSV</button>
              </div>
              <div className="border-top p-3 d-flex w-100 justify-content-between align-items-center">
                <div className="fs-13">PBB</div>
                <button className="btn btn-custom">EXCEL</button>
              </div>
              <div className="border-top p-3 d-flex w-100 justify-content-between align-items-center">
                <div>
                  <div className="fs-13">SOCSO</div>
                  <p className="text-warning fs-12">
                    Please make sure the employer SOCSO code and employees' ID
                    number have been set
                  </p>
                </div>
                <button className="btn btn-custom">TXT</button>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <div className="p-3">
              <h6 className="fw-bold">Payroll Reports</h6>
              <p>
                You can download the reports listed below for this pay period.
              </p>
            </div>
            <div className="d-flex flex-column">
              <div className="border-top p-3 d-flex w-100 justify-content-between align-items-center">
                <div className="fs-13">Payroll Report</div>
                <button className="btn btn-custom">Download</button>
              </div>
              <div className="border-top p-3 d-flex w-100 justify-content-between align-items-center">
                <div className="fs-13">Variance Report</div>
                <button className="btn btn-custom">Download</button>
              </div>
              <div className="border-top p-3 d-flex w-100 justify-content-between align-items-center">
                <div className="fs-13">Department Report</div>
                <button className="btn btn-custom">Download</button>
              </div>
            </div>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <div className="p-3">
              <h6 className="fw-bold">Summary</h6>
            </div>
            <div className="d-flex flex-column">
              <div className="border-top p-3 d-flex w-100 justify-content-between align-items-center">
                <div className="fs-13">EPF</div>
                <div className="fw-bold">32.00</div>
              </div>
              <div className="border-top p-3 d-flex w-100 justify-content-between align-items-center">
                <div className="fs-13">SOCSO</div>
                <div className="fw-bold">4.35</div>
              </div>
              <div className="border-top p-3 d-flex w-100 justify-content-between align-items-center">
                <div className="fs-13">EIS</div>
                <div className="fw-bold">0.50</div>
              </div>
              <div className="border-top p-3 d-flex w-100 justify-content-between align-items-center">
                <div className="fs-13">PCB</div>
                <div className="fw-bold">30.00</div>
              </div>
              <div className="border-top p-3 d-flex w-100 justify-content-between align-items-center">
                <div className="fs-13">HRDF</div>
                <div className="fw-bold">0.00</div>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Minitables;
