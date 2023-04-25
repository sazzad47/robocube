import React from "react";
import { useState } from "react";
import {
  Col,
  Form,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";
//flatpickr
import Flatpickr from "react-flatpickr";
import * as monthSelectPlugin from "flatpickr/dist/plugins/monthSelect";

const SelectMonth = ({ modal, setModal, toggle }) => {
  const [month, setMonth] = useState("");

  function handleMonthChange(selectedMonths) {
    const month = selectedMonths[0];
    setMonth(month);
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
            toggle();
            return false;
          }}
        >
          <ModalBody>
            <Row className="mb-3">
              <Col>
                <Label htmlFor="deductionMonth" className="form-label">
                  Month
                </Label>
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
                  value={month}
                />
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
