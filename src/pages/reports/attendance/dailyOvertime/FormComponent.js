import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Col } from "reactstrap";
import $ from "jquery";
import "select2";

const FormComponent = () => {
  const selectRef = useRef(null);

  useEffect(() => {
    $(selectRef.current).select2({
      theme: "bootstrap4"
    });
  }, []);

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
