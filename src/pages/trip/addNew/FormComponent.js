import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Col,
  FormFeedback,
  Input,
  Label,
  Row,
} from "reactstrap";
import Select from "react-select";
import { useState } from "react";
import * as Yup from "yup";
//formik
import { useFormik } from "formik";

import Flatpickr from "react-flatpickr";

const FormComponent = () => {
  const history = useNavigate();

  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const employees = [
    { label: "John Doe", value: "John Doe" },
    { label: "Jane Smith", value: "Jane Smith" },
    { label: "Bob Johnson", value: "Bob Johnson" },
    { label: "Alice Lee", value: "Alice Lee" },
    { label: "Mike Davis", value: "Mike Davis" },
    // add more employee objects as needed
  ];

  const statusOptions = [
    { label: "Active", value: "Active" },
    { label: "Inactive", value: "Inactive" },
    // add more status objects as needed
  ];

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      employee: "",
      location: "",
      startDate: "",
      endDate: "",
      status: "",
      remark: "",
    },
    validationSchema: Yup.object({
      employee: Yup.string().required("Please Select an employee"),
      location: Yup.string().required("Please Enter a Location"),
      remark: Yup.string().required("Please Enter a Remark"),
    }),
    onSubmit: (values) => {
      const data = {
        _id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
        employee: values.employee,
        location: values.location,
        startDate: values.startDate,
        endDate: values.endDate,
        status: values.status,
        remark: values.remark,
      };
      history("/trip");
      validation.resetForm();
    },
  });

  const handleStartDateChange = (selectedDates) => {
    const date = selectedDates[0];
    validation.setFieldValue("startDate", date);
  }
  const handleEndDateChange = (selectedDates) => {
    const date = selectedDates[0];
    validation.setFieldValue("endDate", date);
  }

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <div className="">
            <form action="#">
              <Row className="mb-3">
                <Col lg={3}>
                  <Label htmlFor="Employee" className="form-label">
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
                    onBlur={validation.handleBlur}
                    invalid={
                      validation.touched.employee && validation.errors.employee
                        ? true
                        : false
                    }
                  />
                  {validation.touched.employee && validation.errors.employee ? (
                    <FormFeedback type="invalid">
                      {validation.errors.employee}
                    </FormFeedback>
                  ) : null}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={3}>
                  <Label htmlFor="location" className="form-label">
                    Location
                  </Label>
                </Col>
                <Col lg={9}>
                  <Input
                    type="text"
                    name="location"
                    id="location"
                    className="form-control"
                    placeholder="Enter location"
                    validate={{
                      required: { value: true },
                    }}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.location || ""}
                    invalid={
                      validation.touched.location && validation.errors.location
                        ? true
                        : false
                    }
                  />
                  {validation.touched.location && validation.errors.location ? (
                    <FormFeedback type="invalid">
                      {validation.errors.location}
                    </FormFeedback>
                  ) : null}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={3}>
                  <Label htmlFor="startDate" className="form-label">
                    Start Date
                  </Label>
                </Col>
                <Col lg={9}>
                  <Flatpickr
                    name="startDate"
                    // type="date"
                    className="form-control"
                    id="datepicker-publish-input"
                    placeholder="Select a starting date"
                    options={{
                      enableTime: true,
                      altInput: true,
                      altFormat: "d M, Y, G:i K",
                      dateFormat: "d M, Y, G:i K",
                    }}
                    onChange={handleStartDateChange}
                    value={validation.values.startDate || ""}
                  />
                  {validation.touched.startDate &&
                  validation.errors.startDate ? (
                    <FormFeedback type="invalid">
                      {validation.errors.startDate}
                    </FormFeedback>
                  ) : null}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={3}>
                  <Label htmlFor="endDate" className="form-label">
                    End Date
                  </Label>
                </Col>
                <Col lg={9}>
                  <Flatpickr
                    name="endDate"
                    // type="date"
                    className="form-control"
                    id="datepicker-publish-input"
                    placeholder="Select a starting date"
                    options={{
                      enableTime: true,
                      altInput: true,
                      altFormat: "d M, Y, G:i K",
                      dateFormat: "d M, Y, G:i K",
                    }}
                    onChange={handleEndDateChange}
                    value={validation.values.endDate || ""}
                  />
                  {validation.touched.endDate && validation.errors.endDate ? (
                    <FormFeedback type="invalid">
                      {validation.errors.endDate}
                    </FormFeedback>
                  ) : null}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={3}>
                  <Label htmlFor="Status" className="form-label">
                    Status
                  </Label>
                </Col>
                <Col lg={9}>
                  <Select
                    defaultValue={statusOptions[0]}
                    value={selectedStatus}
                    onChange={(data) => setSelectedStatus(data)}
                    options={statusOptions}
                    isSearchable={true}
                  />
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={3}>
                  <Label htmlFor="remark" className="form-label">
                    Remark
                  </Label>
                </Col>
                <Col lg={9}>
                  <Input
                    type="textarea"
                    rows="4"
                    name="remark"
                    id="remark"
                    className="form-control"
                    placeholder="Enter remark"
                    validate={{
                      required: { value: true },
                    }}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.remark || ""}
                    invalid={
                      validation.touched.remark && validation.errors.remark
                        ? true
                        : false
                    }
                  />
                  {validation.touched.remark && validation.errors.remark ? (
                    <FormFeedback type="invalid">
                      {validation.errors.remark}
                    </FormFeedback>
                  ) : null}
                </Col>
              </Row>
              <div className="d-flex gap-4 justify-content-end align-items-center">
                <Link to="/trip">Cancel</Link>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default FormComponent;
