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
    { label: "Approved", value: "Approved" },
    { label: "Pending", value: "Pending" },
    { label: "Rejected", value: "Rejected" },
    // add more status objects as needed
  ];

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      employee: "",
      date: "",
      subject: "",
      status: "",
      reason: "",
    },
    validationSchema: Yup.object({
      employee: Yup.string().required("Please Select an employee"),
      date: Yup.string().required("Please Enter a Date"),
      status: Yup.string().required("Please Enter a Status"),
    }),
    onSubmit: (values) => {
      const data = {
        _id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
        employee: values.employee,
        date: values.date,
        subject: values.subject,
        status: values.status,
        reason: values.reason,
      };
      console.log(data);
      history("/claims");
      validation.resetForm();
    },
  });

  function handleDateChange(selectedDates) {
    const date = selectedDates[0];
    validation.setFieldValue("date", date);
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
                  <Label htmlFor="Date" className="form-label">
                    Date
                  </Label>
                </Col>
                <Col lg={9}>
                  <Flatpickr
                    name="date"
                    // type="date"
                    className="form-control"
                    id="datepicker-publish-input"
                    placeholder="Select a date"
                    options={{
                      enableTime: true,
                      altInput: true,
                      altFormat: "d M, Y, G:i K",
                      dateFormat: "d M, Y, G:i K",
                    }}
                    onChange={handleDateChange}
                    value={validation.values.date || ""}
                  />
                  {validation.touched.date && validation.errors.date ? (
                    <FormFeedback type="invalid">
                      {validation.errors.date}
                    </FormFeedback>
                  ) : null}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={3}>
                  <Label htmlFor="subject" className="form-label">
                    Subject
                  </Label>
                </Col>
                <Col lg={9}>
                  <Input
                    type="text"
                    name="subject"
                    id="subject"
                    className="form-control"
                    placeholder="Enter subject"
                    validate={{
                      required: { value: true },
                    }}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.subject || ""}
                    invalid={
                      validation.touched.subject && validation.errors.subject
                        ? true
                        : false
                    }
                  />
                  {validation.touched.subject && validation.errors.subject ? (
                    <FormFeedback type="invalid">
                      {validation.errors.subject}
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
                  <Label htmlFor="reason" className="form-label">
                    Reason
                  </Label>
                </Col>
                <Col lg={9}>
                  <Input
                    type="textarea"
                    rows="4"
                    name="reason"
                    id="reason"
                    className="form-control"
                    placeholder="Enter reason"
                    validate={{
                      required: { value: true },
                    }}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.reason || ""}
                    invalid={
                      validation.touched.reason && validation.errors.reason
                        ? true
                        : false
                    }
                  />
                  {validation.touched.reason && validation.errors.reason ? (
                    <FormFeedback type="invalid">
                      {validation.errors.reason}
                    </FormFeedback>
                  ) : null}
                </Col>
              </Row>
              <div className="d-flex gap-4 justify-content-end align-items-center">
                <Link to="/claims">Cancel</Link>
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
