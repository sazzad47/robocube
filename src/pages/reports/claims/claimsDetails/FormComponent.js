import React from "react";
import { Col } from "reactstrap";

const FormComponent = () => {
  return (
    <React.Fragment>
        <form method="get">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row mb-3">
                <label className="col-form-label col-md-3">Start Date</label>
                <div className="col-md-9">
                  <input
                    type="date"
                    className="form-control"
                    name="startDate"
                  />
                </div>
              </div>
              <div className="form-group row mb-3">
                <label className="col-form-label col-md-3">End Date</label>
                <div className="col-md-9">
                  <input type="date" className="form-control" name="endDate" />
                </div>
              </div>
              <div className="form-group row mb-3">
                <div className="col-md-9 offset-md-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
    </React.Fragment>
  );
};

export default FormComponent;
