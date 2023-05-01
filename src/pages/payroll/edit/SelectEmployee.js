import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "reactstrap";
import $ from "jquery";
import "select2";

const SelectEmployee = ({ modal, setModal }) => {

  const navigate = useNavigate();
  
  useEffect(() => {
    $(".select2").select2({
      theme: "bootstrap4",
    });
  }, []);

  return (
    <React.Fragment>
      <Modal id="showModal" isOpen={modal} centered>
        <div
          className="modal fade show"
          id="modal-add-employee"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-modal="true"
          role="dialog"
          style={{ paddingRight: "5px", display: "block" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Employee
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={() => setModal(false)}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="alert alert-warning d-none">
                  Please select an employee
                </div>
                <div className="form-group">
                  <label className="text-danger">Employee</label>
                  <select
                    className="form-control select2"
                    name="employee"
                    required=""
                    data-select2-id="4"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id="7">
                      -
                    </option>
                  </select>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  name="add_employee"
                  onClick={() => navigate("/payroll_hock/list")}
                  className="btn btn-primary"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default SelectEmployee;
