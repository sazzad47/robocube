import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Col } from "reactstrap";
import $ from "jquery";
import "select2";
import { Link } from "react-router-dom";

const FormComponent = () => {
  const selectRef = useRef(null);

  useEffect(() => {
    $(selectRef.current).select2();
  }, []);
  
  return (
    <React.Fragment>
      <Col xxl={6}>
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

              <div className="form-group row mb-3">
                <label className="col-form-label col-md-3">Type</label>
                <div className="col-md-9">
                  <select ref={selectRef} className="form-control " name="type">
                    <option value="">-</option>
                    <option value="Per Minute">Per Minute</option>
                    <option value="Per Hour">Per Hour</option>
                    <option value="Per Day">Per Day</option>
                    <option value="Per Month">Per Month</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-form-label col-md-3">Rate</label>
                <div className="col-md-9">
                  <input type="number" className="form-control" name="rate" />
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-4 d-flex flex-wrap">
                <div className="form-check mt-1 ms-4">
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

                <div className="form-check mt-1 ms-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkbox-EPF"
                  />
                  <label className="form-check-label" htmlFor="checkbox-EPF">
                    EPF
                  </label>
                </div>
                <div className="form-check mt-1 ms-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkbox-SOCSO"
                  />
                  <label className="form-check-label" htmlFor="checkbox-SOCSO">
                    SOCSO
                  </label>
                </div>
                <div className="form-check mt-1 ms-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkbox-EIS"
                  />
                  <label className="form-check-label" htmlFor="checkbox-EIS">
                    EIS
                  </label>
                </div>
                <div className="form-check mt-1 ms-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkbox-PCB"
                  />
                  <label className="form-check-label" htmlFor="checkbox-PCB">
                    PCB
                  </label>
                </div>

                <div className="form-check mt-1 ms-4">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkbox-HRDF"
                  />
                  <label className="form-check-label" htmlFor="checkbox-HRDF">
                    HRDF
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
                    to="/secondary/list/addition"
                    className="btn btn-link text-muted"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Col>
    </React.Fragment>
  );
};

export default FormComponent;
