import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormFeedback,
  Input,
  Label,
  Row,
} from "reactstrap";

import * as Yup from "yup";
import { useFormik } from "formik";

import Flatpickr from "react-flatpickr";
import Select from "react-select";

const employeeOptions = [
  { label: "John Smith", value: "John Smith" },
  { label: "Jane Doe", value: "Jane Doe" },
  { label: "Bob Johnson", value: "Bob Johnson" },
  { label: "Sarah Lee", value: "Sarah Lee" },
  { label: "David Brown", value: "David Brown" },
  // Add more employees here as needed
];

const typeOptions = [
  { label: "Annual", value: "Annual" },
  { label: "Sick", value: "Sick" },
  { label: "Paid", value: "Paid" },
  { label: "Unpaid", value: "Unpaid" },
  // Add more type here as needed
];

const NewRequest = () => {
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedNewDay, setSelectedNewDay] = useState(0);

  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      employee: "",
      type: "",
      reason: "",
      file: "",
    },

    validationSchema: Yup.object({
      employee: Yup.string().required("Please Select Employee Name"),
      reason: Yup.string().required("Please Enter Reason"),
    }),
    onSubmit: (values) => {
      var updatedDay = "";
      if (selectedNewDay) {
        updatedDay = new Date(selectedNewDay[1]);
        updatedDay.setDate(updatedDay.getDate() + 1);
      }

      const request = {
        id: Math.floor(Math.random() * 100),
        employee: values["employee"],
        type: values["type"],
        reason: values["reason"],
        start: selectedDay ? selectedNewDay[0] : new Date(),
        end: selectedDay ? updatedDay : new Date(),
        file: values["file"],
      };
      console.log("request", request);
      validation.resetForm();

      setSelectedDay(null);
      setSelectedNewDay(null);
    },
  });

  const handleEmployeeChange = (selectedOption) => {
    validation.setFieldValue("employee", selectedOption.value);
    setSelectedEmployee(selectedOption);
  };

  const handleTypeChange = (selectedOption) => {
    validation.setFieldValue("type", selectedOption.value);
    setSelectedType(selectedOption);
  };

  return (
    <React.Fragment>
      <Card className="card-h-100">
        <CardHeader>
          <h4 className="card-title mb-0">New Request</h4>
        </CardHeader>
        <CardBody>
          <Form
            className="needs-validation"
            name="event-form"
            id="form-event"
            onSubmit={(e) => {
              e.preventDefault();
              validation.handleSubmit();
              return false;
            }}
          >
            <Row className="event-form">
              <Col xs={12}>
                <div className="mb-3">
                  <Label className="form-label">Employee</Label>
                  <Select
                    name="employee"
                    defaultValue={employeeOptions[0]}
                    value={selectedEmployee}
                    onChange={handleEmployeeChange}
                    options={employeeOptions}
                    isSearchable={true}
                  />
                  {validation.touched.employee && validation.errors.employee ? (
                    <FormFeedback type="invalid">
                      {validation.errors.employee}
                    </FormFeedback>
                  ) : null}
                  <p className="w-100 p-0 text-primary">Make sure the employee is activated and joined.</p>
                </div>
              </Col>
              <Col xs={12}>
                <div className="mb-3">
                  <Label className="form-label">Type</Label>
                  <Select
                    name="type"
                    defaultValue={typeOptions[0]}
                    value={selectedType}
                    onChange={handleTypeChange}
                    options={typeOptions}
                    isSearchable={true}
                  />
                  {validation.touched.type && validation.errors.type ? (
                    <FormFeedback type="invalid">
                      {validation.errors.type}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>

              <Col xs={12}>
                <div className="mb-3">
                  <Label>Duration</Label>
                  <div className="input-group">
                    <Flatpickr
                      className="form-control"
                      id="duration"
                      name="defaultDate"
                      placeholder="Select Date"
                      value={validation.values.defaultDate || ""}
                      options={{
                        mode: "range",
                        dateFormat: "Y-m-d",
                      }}
                      onChange={(date) => {
                        setSelectedNewDay(date);
                      }}
                    />
                    <span className="input-group-text">
                      <i className="ri-calendar-event-line"></i>
                    </span>
                  </div>
                </div>
              </Col>
              <Col xs={12}>
                <div className="mb-3">
                  <Label className="form-label">Reason</Label>
                  <textarea
                    className="form-control d-block"
                    id="reason"
                    name="reason"
                    placeholder="Enter a reason"
                    rows="3"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.reason || ""}
                  ></textarea>
                  {validation.touched.reason && validation.errors.reason ? (
                    <FormFeedback type="invalid">
                      {validation.errors.reason}
                    </FormFeedback>
                  ) : null}
                </div>
              </Col>
              <Col xs={12}>
                <div className="mb-3">
                  <Label htmlFor="file" className="form-label">
                    File
                  </Label>
                  <Input
                    className="form-control"
                    name="file"
                    type="file"
                    id="file"
                    multiple
                  />
                </div>
              </Col>
            </Row>
            <div className="hstack gap-2 justify-content-end">
              <button
                type="submit"
                className="btn btn-success"
                id="btn-save-event"
              >
                Save
              </button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default NewRequest;
