import React from "react";
import { useState } from "react";
import $ from "jquery";
import "select2";
import { useEffect } from "react";

const FormComponent = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    $(".select2").select2({
      theme: "bootstrap4",
    });

    // Bind Select2 onChange event
    $('.select2').on('change', function() {
      setSelectedEmployee($(this).val());
    });

    return () => {
      // Destroy Select2 when the component is unmounted
      $('.select2').select2('destroy');
    };

  }, []);


  return (
    <React.Fragment>
      <div className="container-fluid container-wrapper">
        <form method="post">
          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-form-label col-md-3 text-danger">
                  Employee
                </label>
                <div className="col-md-9">
                  <select
                    className="form-control select2 "
                    name="employee"
                    required=""
                    data-select2-id="1"
                    tabIndex="-1"
                    aria-hidden="true"
                    value={selectedEmployee}
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
              </div>
              {selectedEmployee !== null && (
                <div className="form-group row">
                  <label className="col-form-label col-md-3 text-danger">
                    Location
                  </label>
                  <div className="col-md-9">
                    <select
                      className="form-control select2"
                      name="location"
                      required=""
                      data-select2-id="4"
                      tabIndex="-1"
                      aria-hidden="true"
                    >
                      <option value="" data-select2-id="6">
                        -
                      </option>
                    </select>
                  </div>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FormComponent;
