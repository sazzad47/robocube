import React from "react";
import { Link } from "react-router-dom";

const FormComponent = () => {
  return (
    <React.Fragment>
        <form method="post">
          <div className="row">
            <div className="col-md-6 d-flex flex-column gap-3">
              <div className="form-group row">
                <label className="col-form-label col-md-3 text-danger">
                  Title
                </label>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    required=""
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-4 mt-3 mt-md-0 d-flex">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkbox-active"
                  />
                  <label className="form-check-label" htmlFor="checkbox-active">
                    Active
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group row mt-0 mt-md-3">
                <label className="col-form-label col-md-3">Remark</label>
                <div className="col-md-9">
                  <textarea
                    className="form-control"
                    name="remark"
                    rows="4"
                  ></textarea>
                </div>
              </div>

              <div className="form-group row mt-3">
                <div className="col-md-9 offset-md-3">
                  <button type="submit" name="save" className="btn btn-primary">
                    Save
                  </button>
                  <Link
                    to="/secondary/list/claim_type"
                    className="btn btn-link text-muted"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
    </React.Fragment>
  );
};

export default FormComponent;
