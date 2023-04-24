import React from "react";
import { Card, CardBody, Col, Label, Row } from "reactstrap";
import PreviewCardHeader from "../../../Components/Common/PreviewCardHeader";
import Flatpickr from "react-flatpickr";
import Select from "react-select";
import { useState } from "react";

const CheckStatus = () => {

  const [selectedEmployee, setSelectedEmployee] = useState("");

  const employees = [
    { value: "Sazzad Hossen", label: "Sazzad Hossen" },
    { value: "Zamil Borhan", label: "Zamil Borhan" },
  ];
  return (
    <React.Fragment>
      <Card>
        <PreviewCardHeader title="Check Status" />
        <CardBody>
          <div className="live-preview">
            <form action="#">
              <Row className="mb-3">
                <Col lg={3}>
                  <Label htmlFor="employee" className="form-label">
                    Employee
                  </Label>
                </Col>
                <Col lg={9}>
                <Select
                  defaultValue={employees[0]}
                  value={selectedEmployee}
                  onChange={(data) => setSelectedEmployee(data)}
                  options={employees}
                  isSearchable={true}
                />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={3}>
                  <Label htmlFor="dateInput" className="form-label">
                    Date
                  </Label>
                </Col>
                <Col lg={9}>
                  <Flatpickr
                    className="form-control"
                    options={{
                      dateFormat: "d M, Y",
                    }}
                  />
                </Col>
              </Row>
              <div className="text-end">
                <button type="submit" className="btn btn-primary">
                  Search
                </button>
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default CheckStatus;
