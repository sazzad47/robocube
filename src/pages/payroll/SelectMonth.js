import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Col,
  Form,
  FormFeedback,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
//flatpickr
import Flatpickr from "react-flatpickr";
import * as monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";

import * as Yup from "yup";
//formik
import { useFormik } from "formik";

const SelectMonth = ({ modal, setModal, toggle }) => {
  const navigate = useNavigate();

  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      month: "",
    },
    validationSchema: Yup.object({
      month: Yup.string().required("Please select a month"),
    }),
    onSubmit: () => {
      navigate("/payroll/123/edit")
      validation.resetForm();
      setModal(false);
    },
    
  });

  const handleMonthChange = (selectedMonths) => {
    const month = selectedMonths[0];
    validation.setFieldValue("month", month);
  }

  return (
    <React.Fragment>
      <Modal id="showModal" isOpen={modal} toggle={toggle} centered>
        <ModalHeader className="bg-light p-3" toggle={toggle}>
          Select Month
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
            <Row className="mb-3">
              <Col>
                <Label htmlFor="month" className="form-label">
                  Month
                </Label>
                <Flatpickr
                  name="month"
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
                  onBlur={validation.handleBlur}
                  value={validation.values.month}
                  invalid={
                    validation.touched.month && validation.errors.month
                      ? true
                      : false
                  }
                />
                {validation.touched.month && validation.errors.month ? (
                  <FormFeedback type="invalid">
                    {validation.errors.month}
                  </FormFeedback>
                ) : null}
              </Col>
            </Row>
          </ModalBody>
          <div className="modal-footer">
            <div className="hstack gap-2 justify-content-end">
              <button
                type="button"
                className="btn btn-light"
                onClick={() => {
                  setModal(false);
                }}
              >
                Close
              </button>
              <button type="submit" className="btn btn-success">
                Run Payroll
              </button>
            </div>
          </div>
        </Form>
      </Modal>
    </React.Fragment>
  );
};

export default SelectMonth;
