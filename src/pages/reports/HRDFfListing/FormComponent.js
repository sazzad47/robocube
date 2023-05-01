import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import $ from "jquery";
import "select2";

const FormComponent = () => {
  const selectRef = useRef(null);

  useEffect(() => {
    $(selectRef.current).select2({
      theme: "bootstrap4",
    });
  }, []);

  return (
    <React.Fragment>
      <form method="get">
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
              </div>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default FormComponent;
