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
import * as monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";

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
      subject: "",
      totalAmount: "",
      deductionMonth: "",
      status: "",
      remark: "",
    },
    validationSchema: Yup.object({
      employee: Yup.string().required("Please Select an employee"),
      totalAmount: Yup.string().required("Please Enter Total Amount"),
      remark: Yup.string().required("Please Enter a Remark"),
    }),
    onSubmit: (values) => {
      const data = {
        _id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
        employee: values.employee,
        subject: values.subject,
        totalAmount: values.totalAmount,
        deductionMonth: values.deductionMonth,
        status: values.status,
        remark: values.remark,
      };
      console.log(data);
      history("/advance_salary");
      validation.resetForm();
    },
  });

  function handleMonthChange(selectedMonths) {
    const month = selectedMonths[0];
    validation.setFieldValue("deductionMonth", month);
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
                  <Label htmlFor="totalAmount" className="form-label">
                    Total Amount
                  </Label>
                </Col>
                <Col lg={9}>
                  <Input
                    type="number"
                    name="totalAmount"
                    id="totalAmount"
                    className="form-control"
                    placeholder="Enter totalAmount"
                    validate={{
                      required: { value: true },
                    }}
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.totalAmount || ""}
                    invalid={
                      validation.touched.totalAmount &&
                      validation.errors.totalAmount
                        ? true
                        : false
                    }
                  />
                  {validation.touched.totalAmount &&
                  validation.errors.totalAmount ? (
                    <FormFeedback type="invalid">
                      {validation.errors.totalAmount}
                    </FormFeedback>
                  ) : null}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={3}>
                  <Label htmlFor="deductionMonth" className="form-label">
                    Deduction Month
                  </Label>
                </Col>
                <Col lg={9}>
                  <Flatpickr
                    name="deductionMonth"
                    // type="date"
                    className="form-control"
                    id="datepicker-publish-input"
                    placeholder="Select a month"
                    options={{
                      altInput: true,
                      plugins: [
                        new monthSelectPlugin({
                          shorthand: true,
                          dateFormat: "m.y",
                          altFormat: "F Y",
                        }),
                      ],
                      dateFormat: "m.y",
                      defaultDate: "today",
                    }}
                    onChange={handleMonthChange}
                    value={validation.values.deductionMonth || ""}
                  />
                  {validation.touched.deductionMonth &&
                  validation.errors.deductionMonth ? (
                    <FormFeedback type="invalid">
                      {validation.errors.deductionMonth}
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
                <Link to="/advance_salary">Cancel</Link>
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
