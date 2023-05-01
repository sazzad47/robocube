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
    $(selectRef.current).select2({
      theme: "bootstrap4",
    });
  }, []);

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

            <div className="form-group row">
              <label className="col-form-label col-md-3">Type</label>
              <div className="col-md-9">
                <select
                  ref={selectRef}
                  className="form-control "
                  name="employee"
                >
                  <option value="QR Code">QR Code</option>
                  <option value="RFID">RFID</option>
                </select>
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
            <div className="form-group row mt-3">
              <div className="col-md-9 offset-md-3">
                <button type="submit" name="save" className="btn btn-primary">
                  Save
                </button>
                <Link to="/devices/list" className="btn btn-link text-muted">
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
