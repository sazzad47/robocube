import React from "react";
import $ from "jquery";
import "select2";
import { useEffect } from "react";

const NewRequest = () => {
  useEffect(() => {
    $(".select2").select2({
      theme: "bootstrap4",
    });
  }, []);

  return (
    <React.Fragment>
      <div className="col-md-3">
        <div className="card mb-4">
          <div className="card-body font-weight-bold pb-0">New Request</div>
          <div className="card-body">
            <form
              method="post"
              encType="multipart/form-data"
              onSubmit="Loading(1)"
            >
              <div className="form-group">
                <label className="text-danger">Employee</label>
                <select
                  className="form-control select2"
                  onChange="show_leave_balance()"
                  name="user"
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

              <div className="alert alert-warning">
                Make sure the employees have been activated and joined
              </div>

              <div className="form-group">
                <label className="text-danger">Leave Type</label>
                <select
                  className="form-control select2"
                  onChange="show_leave_balance()"
                  name="leave_type"
                  required=""
                  data-select2-id="4"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <option value="" data-select2-id="6">
                    -
                  </option>
                  <option value="162843765711">Sick Leave</option>
                  <option value="163014486258">Annual Leave</option>
                  <option value="163021224487">Unpaid Leave</option>
                  <option value="163021225254">Paid Leave</option>
                  <option value="167565514056">Annual Leave 2</option>
                </select>

                <small
                  id="leave_balance_container"
                  className="d-none form-text text-muted"
                >
                  Your leave balance:{" "}
                  <span className="font-weight-bold" id="leave_balance"></span>
                </small>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Start</label>
                    <input
                      type="date"
                      className="form-control mb-2"
                      name="date_start"
                    />
                    <div
                      className="btn-group btn-group-toggle"
                      data-toggle="buttons"
                    >
                      <label className="btn btn-sm btn-outline-secondary border border-secondary active">
                        <input
                          type="radio"
                          name="date_start_days"
                          id="option1"
                          value="all day"
                        />{" "}
                        All Day
                      </label>
                      <label className="btn btn-sm btn-outline-secondary border border-secondary">
                        <input
                          type="radio"
                          name="date_start_days"
                          id="option2"
                          value="AM"
                        />{" "}
                        AM
                      </label>
                      <label className="btn btn-sm btn-outline-secondary border border-secondary">
                        <input
                          type="radio"
                          name="date_start_days"
                          id="option3"
                          value="PM"
                        />{" "}
                        PM
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>End</label>
                    <input
                      type="date"
                      className="form-control mb-2"
                      name="date_end"
                    />
                    <div
                      className="btn-group btn-group-toggle"
                      data-toggle="buttons"
                    >
                      <label
                        name="date_end_days_lbl"
                        className="btn btn-sm btn-outline-secondary border border-secondary active disabled"
                      >
                        <input type="radio" name="date_end_days" id="option1" />{" "}
                        All Day
                      </label>
                      <label
                        name="date_end_days_lbl"
                        className="btn btn-sm btn-outline-secondary border border-secondary disabled"
                      >
                        <input type="radio" name="date_end_days" id="option2" />{" "}
                        AM
                      </label>
                      <label
                        name="date_end_days_lbl"
                        className="btn btn-sm btn-outline-secondary border border-secondary disabled"
                      >
                        <input type="radio" name="date_end_days" id="option3" />{" "}
                        PM
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="text-danger">Reason</label>
                <textarea
                  className="form-control"
                  name="reason"
                  rows="4"
                  required=""
                ></textarea>
              </div>

              <div className="form-group">
                <label>File</label>
                <input type="file" className="form-control-file" name="file" />
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="approve"
                    id="checkbox-approve"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="checkbox-approve"
                  >
                    Check to approve the request automatically
                  </label>
                </div>
              </div>

              <div className="form-group">
                <button className="btn btn-primary" name="save">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewRequest;
