import React from "react";
import { Col } from "reactstrap";

const FormComponent = () => {

  return (
    <React.Fragment>
      <Col xxl={6}>
        <form method="get">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row mb-3">
                <label className="col-form-label col-md-3">Date</label>
                <div className="col-md-9">
                  <input type="date" className="form-control" name="date" />
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
      </Col>
    </React.Fragment>
  );
};

export default FormComponent;
