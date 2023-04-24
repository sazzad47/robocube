import React, { useState, useCallback } from "react";
import {
  Modal,
  ModalHeader,
  Form,
  ModalBody,
  Label,
  Input,
  FormFeedback,
} from "reactstrap";

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";

import Flatpickr from "react-flatpickr";

const actions = [
  {
    options: [
      { label: "Yes", value: "Yes" },
      { label: "No", value: "No" },
    ],
  },
];

const AddNew = () => {
  const [modal, setModal] = useState(false);

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      dateTime: "",
      action: "",
      reason: "",
      remark: "",
    },
    validationSchema: Yup.object({
      action: Yup.string().required("Please Enter Action"),
      reason: Yup.string().required("Please Enter Reason"),
      remark: Yup.string().required("Please Enter Remark"),
    }),
    onSubmit: () => {
      validation.resetForm();
      setModal(false);
    },
  });

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
      validation.resetForm();
    } else {
      setModal(true);
    }
  }, [modal, validation]);

  function handleDateChange(selectedDates) {
    const date = selectedDates[0];
    validation.setFieldValue("dateTime", date);
  }

  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-success add-btn"
        id="create-btn"
        onClick={() => {
          toggle();
        }}
      >
        <div className="d-flex align-items-center gap-2">
          <i className="bx bx-plus-circle"></i> <span>Add New</span>
        </div>
      </button>
      <Modal id="showModal" isOpen={modal} toggle={toggle} centered>
        <ModalHeader className="bg-light p-3" toggle={toggle}>
          Add Attendance
        </ModalHeader>
        <Form
          className="tablelist-form"
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
            return false;
          }}
        >
          <ModalBody>
            <input type="hidden" id="id-field" />

            <div className="mb-3">
              <Label htmlFor="date-field" className="form-label">
                Date and Time
              </Label>

              <Flatpickr
                name="dateTime"
                // type="date"
                className="form-control"
                id="datepicker-publish-input"
                placeholder="Select a date & time"
                options={{
                  enableTime: true,
                  altInput: true,
                  altFormat: "d M, Y, G:i K",
                  dateFormat: "d M, Y, G:i K",
                }}
                onChange={handleDateChange}
                value={validation.values.dateTime || ""}
              />
              {validation.touched.dateTime && validation.errors.dateTime ? (
                <FormFeedback type="invalid">
                  {validation.errors.dateTime}
                </FormFeedback>
              ) : null}
            </div>
            <div className="mb-3">
              <Label htmlFor="action-field" className="form-label">
                Action
              </Label>

              <Input
                name="action"
                type="select"
                className="form-select"
                onChange={validation.handleChange}
                onBlur={validation.handleBlur}
                value={validation.values.action}
                validate={{
                  required: { value: true },
                }}
              >
                {actions.map((item, key) => (
                  <React.Fragment key={key}>
                    {item.options.map((item, key) => (
                      <option value={item.value} key={key}>
                        {item.label}
                      </option>
                    ))}
                  </React.Fragment>
                ))}
              </Input>
              {validation.touched.action && validation.errors.action ? (
                <FormFeedback type="invalid">
                  {validation.errors.action}
                </FormFeedback>
              ) : null}
            </div>
            <div className="mb-3">
              <Label htmlFor="reason-field" className="form-label">
                Reason
              </Label>
              <Input
                type="textarea"
                rows="4"
                name="reason"
                id="reason-field"
                className="form-control"
                placeholder="Enter Reason"
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
            </div>
            <div className="mb-3">
              <Label htmlFor="remark-field" className="form-label">
                Remark
              </Label>
              <Input
                type="textarea"
                rows="4"
                name="remark"
                id="remark-field"
                className="form-control"
                placeholder="Enter Remark"
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
            </div>
          </ModalBody>
          <div className="modal-footer">
            <div className="hstack gap-2 justify-content-end">
              <button
                type="button"
                className="btn btn-light"
                onClick={() => {
                  validation.resetForm();
                  setModal(false);
                }}
              >
                Close
              </button>
              <button type="submit" className="btn btn-success">
                Add
              </button>
            </div>
          </div>
        </Form>
      </Modal>
    </React.Fragment>
  );
};

export default AddNew;
