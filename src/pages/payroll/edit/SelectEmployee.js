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
import Select from "react-select";

//formik
import { useFormik } from "formik";

const SelectEmployee = ({ modal, setModal, toggle }) => {
  const navigate = useNavigate();

  const employees = [
    { label: "John Doe", value: "John Doe" },
    { label: "Jane Smith", value: "Jane Smith" },
    { label: "Bob Johnson", value: "Bob Johnson" },
    { label: "Alice Lee", value: "Alice Lee" },
    { label: "Mike Davis", value: "Mike Davis" },
    // add more employee objects as needed
  ];
  const validation = useFormik({
    enableReinitialize: true,

    initialValues: {
      employee: "",
    },

    onSubmit: () => {
      navigate("/payroll");
      validation.resetForm();
      setModal(false);
    },
  });

  const handleSelectEmployee = (data) => {
    validation.setFieldValue("employee", data);
  };

  return (
    <React.Fragment>
      <Modal id="showModal" isOpen={modal} toggle={toggle} centered>
        <ModalHeader className="bg-light p-3" toggle={toggle}>
          Add Employee
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
                <Label htmlFor="employee" className="form-label">
                  Employee
                </Label>
                <Select
                  name="employee"
                  defaultValue={employees[0]}
                  value={validation.values.employee}
                  onChange={handleSelectEmployee}
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
              <button
                disabled={!validation.values.employee}
                type="submit"
                className="btn btn-success"
              >
                Add
              </button>
            </div>
          </div>
        </Form>
      </Modal>
    </React.Fragment>
  );
};

export default SelectEmployee;
