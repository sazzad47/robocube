import React from "react";
import {
  Card,
  CardBody,
  Col,
  Input,
  InputGroup,
  Label,
  Row,
  Table,
} from "reactstrap";
import Select from "react-select";
import PreviewCardHeader from "../../Components/Common/PreviewCardHeader";
import { useState } from "react";

const CalculateDeductions = () => {
  const [selectedEPFTypes, setSelectedEPFTypes] = useState("");
  const [selectedSOCSOCategory, setSelectedSOCSOCategory] = useState("");
  const [selectedPCBorSOCSO, setSelectedPCBorSOCSO] = useState("");
  const [selectedEISContribution, setSelectedEISContribution] = useState("");

  const data = [
    {
      id: 1,
      type: "EPF",
      employer: "0.00",
      employee: "0.00",
      subTotal: "0.00",
    },
    {
      id: 2,
      type: "SOCSO",
      employer: "0.00",
      employee: "0.00",
      subTotal: "0.00",
    },
    {
      id: 3,
      type: "EIS",
      employer: "0.00",
      employee: "0.00",
      subTotal: "0.00",
    },
  ];
  const EFPTypes = [
    { value: "Custom Rate", label: "Custom Rate" },
    { value: "9% Contribution (Part A)", label: "9% Contribution (Part A)" },
    { value: "9% Contribution (Part B)", label: "9% Contribution (Part B)" },
    { value: "9% Contribution (Part C)", label: "9% Contribution (Part C)" },
    { value: "9% Contribution (Part D)", label: "9% Contribution (Part D)" },
    { value: "9% Contribution (Part E)", label: "9% Contribution (Part E)" },
  ];
  const SOCSOCategories = [
    {
      value: "Employment Injury & Invalidity",
      label: "Employment Injury & Invalidity",
    },
    { value: "Employment Injury Only", label: "Employment Injury Only" },
    { value: "No Contribution", label: "No Contribution" },
  ];
  const PCBorSOCSOs = [
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
  ];
  const EISContributionOptions = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];

  return (
    <Card>
      <PreviewCardHeader title="Calculate Deductions" />
      <CardBody>
        <div className="pb-3">
          Salary: 0.00 
          <div className="text-info"> Net Salary: 0.00 </div>
        </div>
        <div className="pb-3">
          <div className="table-responsive">
            <Table className="table-nowrap mb-0">
              <thead className="table-light">
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Employer</th>
                  <th scope="col">Employee</th>
                  <th scope="col">Sub-Total</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="fw-medium">{item.type}</td>
                    <td>{item.employer}</td>
                    <td>{item.employee}</td>
                    <td>{item.subTotal}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="table-light">
                <tr>
                  <td colSpan="3">Total</td>
                  <td>0.00</td>
                </tr>
              </tfoot>
            </Table>
          </div>
        </div>
        <div className="">
          <form action="#">
            <Row className="mb-3">
              <Col lg={3}>
                <Label htmlFor="basis" className="form-label">
                  Basis &#40;MYR&#41;{" "}
                </Label>
              </Col>
              <Col lg={9}>
                <Input type="number" className="form-control" id="basis" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col lg={3}>
                <Label htmlFor="EPF_Type" className="form-label">
                  EPF Type
                </Label>
              </Col>
              <Col lg={9}>
                <Select
                  defaultValue={EFPTypes[0]}
                  value={selectedEPFTypes}
                  onChange={(data) => setSelectedEPFTypes(data)}
                  options={EFPTypes}
                  isSearchable={true}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col lg={3}>
                <Label htmlFor="EPF_Employer_Rate" className="form-label">
                  EPF Employer Rate
                </Label>
              </Col>
              <Col lg={9}>
                <InputGroup>
                  <Input
                    type="number"
                    className="form-control"
                    id="EPF_Employer_Rate"
                  />
                  <div className="input-group-text">%</div>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col lg={3}>
                <Label htmlFor="EPF_Employee_Rate" className="form-label">
                  EPF Employee Rate
                </Label>
              </Col>
              <Col lg={9}>
                <InputGroup>
                  <Input
                    type="number"
                    className="form-control"
                    id="EPF_Employee_Rate"
                  />
                  <div className="input-group-text">%</div>
                </InputGroup>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col lg={3}>
                <Label htmlFor="SOCSO_Category" className="form-label">
                  SOCSO Category
                </Label>
              </Col>
              <Col lg={9}>
                <Select
                  defaultValue={SOCSOCategories[0]}
                  value={selectedSOCSOCategory}
                  onChange={(data) => setSelectedSOCSOCategory(data)}
                  options={SOCSOCategories}
                  isSearchable={true}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col lg={3}>
                <Label htmlFor="PCBorSOCSO" className="form-label">
                  PCB &#40;MTD&#41;/ SOCSO
                </Label>
              </Col>
              <Col lg={9}>
                <Select
                  defaultValue={PCBorSOCSOs[0]}
                  value={selectedPCBorSOCSO}
                  onChange={(data) => setSelectedPCBorSOCSO(data)}
                  options={PCBorSOCSOs}
                  isSearchable={true}
                />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col lg={3}>
                <Label htmlFor="EIS_Contribution" className="form-label">
                  EIS Contribution
                </Label>
              </Col>
              <Col lg={9}>
                <Select
                  defaultValue={EISContributionOptions[0]}
                  value={selectedEISContribution}
                  onChange={(data) => setSelectedEISContribution(data)}
                  options={EISContributionOptions}
                  isSearchable={true}
                />
              </Col>
            </Row>
            <div className="text-end">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </CardBody>
    </Card>
  );
};

export default CalculateDeductions;
