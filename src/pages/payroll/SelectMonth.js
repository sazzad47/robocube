import React from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "reactstrap";

const SelectMonth = ({ modal, setModal }) => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Modal id="showModal" isOpen={modal} centered>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/payroll_hock/edit/123");
          }}
          className="modal fade show"
          id="modal-run"
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
                  Select Month
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span onClick={() => setModal(false)}>×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="alert alert-warning d-none">
                  Please select a month
                </div>
                <div className="form-group">
                  <label className="text-danger">Month</label>
                  <input
                    type="month"
                    className="form-control"
                    name="month"
                    value="2023-05"
                    required=""
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" name="save" className="btn btn-primary">
                  Run Payroll
                </button>
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default SelectMonth;
