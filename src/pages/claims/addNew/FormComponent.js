import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "select2";
import { AddNewModal } from "./AddNewModal";

const FormComponent = () => {

  const [modal, setModal] = useState(false);

  useEffect(() => {
    $(".select2").select2({
      theme: "bootstrap4",
    });
  }, []);

  return (
    <React.Fragment>
      <AddNewModal modal={modal} setModal={setModal} />
      <div className="container-fluid container-wrapper">
        <form method="post" onSubmit="Loading(1)">
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
                    ';
                    <option value="166804835212">Amirah</option>
                    <option value="167108877793">Cuttie</option>
                    <option value="167108913646">Jacky</option>
                    <option value="167763914983">Lafar</option>
                    <option value="167783056568">Gorilia</option>
                    <option value="167783091726">Lilly</option>
                    <option value="167990984395">Imp_student</option>
                    <option value="167991003789">a kao</option>
                    <option value="167991105435">ah kau</option>{" "}
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-form-label col-md-3 text-danger">
                  Date
                </label>
                <div className="col-md-9">
                  <input
                    type="date"
                    className="form-control"
                    name="date_submission"
                    value="2023-05-01"
                    required=""
                  />
                </div>
              </div>

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
                <label className="col-form-label col-md-3">Status</label>
                <div className="col-md-9">
                  <select
                    className="form-control select2"
                    name="status"
                    data-select2-id="4"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                    <option value="pending" selected="" data-select2-id="6">
                      Pending
                    </option>
                  </select>
                </div>
              </div>

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
            </div>
          </div>

          <table className="table table-bordered mt-3 mb-4">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>No</th>
                <th>Description</th>
                <th style={{ width: "15%" }}>Claim Type</th>
                <th style={{ width: "15%" }}>Payment Method</th>
                <th style={{ width: "15%" }}>Merchant</th>
                <th className="text-right" style={{ width: "15%" }}>
                  Amount ($)
                </th>
              </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
              <tr>
                <td colSpan="6" className="text-center">
                  <div onClick={()=> setModal(true)} className="btn btn-link">
                    <i className="fa fa-fw fa-plus-circle"></i> Add New
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>

          <div className="row">
            <div className="col-md-6 offset-md-6">
              <div className="form-group row">
                <input type="hidden" name="total" value="0" />
                <label className="form-control-label col-md-4 font-weight-bold">
                  Total ($)
                </label>
                <label
                  className="form-control-label col-md-4 offset-md-4 text-right font-weight-bold"
                  data-label="total"
                >
                  0.00
                </label>
              </div>
            </div>
          </div>

          <hr className="mb-4" />

          <div className="row">
            <div className="col-md-12 text-right">
              <div className="form-group row">
                <div className="col-md-9 offset-md-3">
                  <Link to="/claims/list" className="btn btn-link text-muted">
                    Cancel
                  </Link>
                  <button type="submit" name="save" className="btn btn-primary">
                    Save
                  </button>
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
