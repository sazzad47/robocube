import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Col } from "reactstrap";
import $ from "jquery";
import "select2";
import ConfirmationModal from "../../../../Components/Common/ConfirmationModal";

const FormComponent = ({ setData }) => {
  const selectRef = useRef(null);

  const [confirmModal, setConfirmModal] = useState(false);

  useEffect(() => {
    $(selectRef.current).select2();
  }, []);

  return (
    <React.Fragment>
      <ConfirmationModal
        show={confirmModal}
        text="Are you sure want to recheck all timetable?"
        primaryCmd="No"
        secondaryCmd="Yes"
        onPrimaryCmd={() => setConfirmModal(false)}
        onSecondaryCmd={() => setConfirmModal(false)}
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
                    onClick={() => setConfirmModal(true)}
                    className="btn btn-secondary ms-2"
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
