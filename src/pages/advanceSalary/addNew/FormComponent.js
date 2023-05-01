import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "select2";
import { useEffect } from "react";

const FormComponent = () => {
 
  useEffect(() => {
    $(".select2").select2({
      theme: "bootstrap4",
    });
  }, []);

  return (
    <React.Fragment>
      <div className="container-fluid container-wrapper">
        <form method="post">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-form-label col-md-3 text-danger">
                  Employee
                </label>
                <div className="col-md-9">
                  <select
                    className="form-control select2"
                    name="employee"
                    required=""
                    data-select2-id="1"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id="3">
                      -
                    </option>
                    <option value="166804835212">Amirah</option>
                    <option value="167108877793">Cuttie</option>
                    <option value="167108913646">Jacky</option>
                    <option value="167763914983">Lafar</option>
                    <option value="167783056568">Gorilia</option>
                    <option value="167783091726">Lilly</option>
                    <option value="167990984395">Imp_student</option>
                    <option value="167991003789">a kao</option>
                    <option value="167991105435">ah kau</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <hr className="mb-4" />

          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-form-label col-md-3 text-danger">
                  Subject
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    required=""
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-form-label col-md-3 text-danger">
                  Total Amount
                </label>
                <div className="col-md-9">
                  <input
                    type="number"
                    className="form-control"
                    name="total"
                    required=""
                  />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-form-label col-md-3 text-danger">
                  Deduction Month
                </label>
                <div className="col-md-9">
                  <input
                    type="month"
                    className="form-control"
                    name="date_deduction"
                    required=""
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-form-label col-md-3 text-danger">
                  Status
                </label>
                <div className="col-md-9">
                  <select
                    className="form-control select2"
                    name="status"
                    required=""
                    data-select2-id="4"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id="6">
                      -
                    </option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                    <option value="paid">Paid</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <hr className="mb-4" />

          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-form-label col-md-3">Remark</label>
                <div className="col-md-9">
                  <textarea
                    className="form-control"
                    name="remark"
                    rows="4"
                  ></textarea>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-9 offset-md-3">
                  <button type="submit" name="save" className="btn btn-primary">
                    Save
                  </button>
                  <Link
                    to="/advance/list"
                    className="btn btn-link text-muted"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FormComponent;
