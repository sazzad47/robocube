import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Col } from "reactstrap";
import $ from "jquery";
import "select2";

const FormComponent = () => {
  const otMinuteSelectRef = useRef(null);
  const otHourSelectRef = useRef(null);
  const otDaySelectRef = useRef(null);
  const deductionMinuteSelectRef = useRef(null);
  const deductionHourSelectRef = useRef(null);
  const deductionDaySelectRef = useRef(null);

  useEffect(() => {
    $(otMinuteSelectRef.current).select2();
    $(otHourSelectRef.current).select2();
    $(otDaySelectRef.current).select2();
    $(deductionMinuteSelectRef.current).select2();
    $(deductionHourSelectRef.current).select2();
    $(deductionDaySelectRef.current).select2();
  }, []);

  return (
    <React.Fragment>
      <Col xxl={6}>
        <form method="post">
          <div className="row">
            <div className="col-md-6 d-flex flex-column gap-2">
              <div className="form-group row">
                <label className="col-md-3">OT (Minute)</label>
                <div className="col-md-9">
                  <select
                    ref={otMinuteSelectRef}
                    className="form-control "
                    name="otMinute"
                  >
                    <option value="">-</option>
                    <option value="166839467441">OT Per Hour</option>
                    <option value="166839477839">OT Per Day</option>
                    <option value="166839465724" selected="">
                      OT Per Minute
                    </option>
                    <option value="167763767312">Allowance</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3">OT (Hour)</label>
                <div className="col-md-9">
                  <select
                    ref={otHourSelectRef}
                    className="form-control "
                    name="otHour"
                  >
                    <option value="">-</option>
                    <option value="166839467441" selected="">
                      OT Per Hour
                    </option>
                    <option value="166839477839">OT Per Day</option>
                    <option value="166839465724">OT Per Minute</option>
                    <option value="167763767312">Allowance</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3">OT (Day)</label>
                <div className="col-md-9">
                  <select
                    ref={otDaySelectRef}
                    className="form-control "
                    name="otDay"
                  >
                    <option value="">-</option>
                    <option value="166839467441">OT Per Hour</option>
                    <option value="166839477839" selected="">
                      OT Per Day
                    </option>
                    <option value="166839465724">OT Per Minute</option>
                    <option value="167763767312">Allowance</option>
                  </select>
                </div>
              </div>
              <hr className="my-4" />
              <div className="form-group row">
                <label className="col-md-3">Deduction (Minute)</label>
                <div className="col-md-9">
                  <select
                    ref={deductionMinuteSelectRef}
                    className="form-control "
                    name="deductionMinute"
                  >
                    <option value="">-</option>
                    <option value="166839467441">Deduction Per Hour</option>
                    <option value="166839477839">Deduction Per Day</option>
                    <option value="166839465724" selected="">
                      Deduction Per Minute
                    </option>
                    <option value="167763767312">Allowance</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3">Deduction (Hour)</label>
                <div className="col-md-9">
                  <select
                    ref={deductionHourSelectRef}
                    className="form-control "
                    name="deductionHour"
                  >
                    <option value="">-</option>
                    <option value="166839467441">Deduction Per Hour</option>
                    <option value="166839477839">Deduction Per Day</option>
                    <option value="166839465724" selected="">
                      Deduction Per Minute
                    </option>
                    <option value="167763767312">Allowance</option>
                  </select>
                </div>
              </div>
              <div className="form-group row">
                <label className="col-md-3">Deduction (Day)</label>
                <div className="col-md-9">
                  <select
                    ref={deductionDaySelectRef}
                    className="form-control "
                    name="deductionDay"
                  >
                    <option value="">-</option>
                    <option value="166839467441">Deduction Per Hour</option>
                    <option value="166839477839">Deduction Per Day</option>
                    <option value="166839465724" selected="">
                      Deduction Per Minute
                    </option>
                    <option value="167763767312">Allowance</option>
                  </select>
                </div>
              </div>
              <hr className="my-4" />
              <div className="form-group row">
                <label className="col-md-3">HRDF</label>
                <div className="col-md-9">
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="hrdf"
                      value="1"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row">
                <div className="offset-md-3 col-md-9">
                  <button type="submit" className="btn btn-primary" name="save">
                    Save
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
