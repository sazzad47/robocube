import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Col } from "reactstrap";
import $ from "jquery";
import "select2";
import Alert from "../../../../Components/Common/Alert";

const FormComponent = ({ setData }) => {
  const selectRef = useRef(null);

  const [alertUser, setAlertUser] = useState(false);

  useEffect(() => {
    $(selectRef.current).select2({
      theme: "bootstrap4",
    });
  }, []);

  return (
    <React.Fragment>
      <Alert
        show={alertUser}
        type="warning"
        onConfirm={() => setAlertUser(false)}
        onCancel={() => setAlertUser(false)}
        confirmBtnText="Yes"
        cancelBtnText="No"
        message="Are you sure want to recheck all timetable?"
      />
      <Col xxl={6}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setData(true);
          }}
        >
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row mb-3">
                <label className="col-form-label col-md-3">Month</label>
                <div className="col-md-9">
                  <input type="month" className="form-control" name="month" />
                </div>
              </div>

              <div className="form-group row mb-3">
                <label className="col-form-label col-md-3">Employee</label>
                <div className="col-md-9">
                  <select
                    ref={selectRef}
                    className="form-control "
                    name="employee"
                  >
                    <option value="">-</option>
                    <option value="166804835212">Amirah</option>
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

              <div className="form-group row mb-3">
                <div className="col-md-9 offset-md-3">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => setAlertUser(true)}
                    className="btn btn-secondary ml-2"
                  >
                    Check All
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
