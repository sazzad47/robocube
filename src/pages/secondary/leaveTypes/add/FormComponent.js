import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

const FormComponent = () => {
  const [dayType, setDayType] = useState("custom");

  const handleDayTypeChange = (event) => {
    setDayType(event.target.value);
  };

  const yearFields = [];
  for (let i = 0; i <= 10; i++) {
    const fieldName = `${i}year`;
    yearFields.push(
      <div className="form-group row" key={fieldName}>
        <label className="col-form-label col-md-3">{i} Year</label>
        <div className="col-md-9">
          <input type="number" className="form-control" name={fieldName} />
        </div>
      </div>
    );
  }

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

              <div className="form-group row">
                <label className="col-form-label col-md-3">Day Type</label>
                <div className="col-md-9 my-auto">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="dayType"
                      id="dayType1"
                      value="custom"
                      checked={dayType === "custom"}
                      onChange={handleDayTypeChange}
                    />
                    <label className="form-check-label" htmlFor="dayType1">
                      Custom
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="dayType"
                      id="dayType2"
                      value="working-experience-based"
                      checked={dayType === "working-experience-based"}
                      onChange={handleDayTypeChange}
                    />
                    <label className="form-check-label" htmlFor="dayType2">
                      Working Experience Based
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <label className="col-form-label col-md-3">Due Date</label>
                <div className="col-md-9">
                  <input type="date" className="form-control" name="dueDate" />
                </div>
              </div>
              {dayType === "working-experience-based" ? (
                yearFields
              ) : (
                <div className="form-group row">
                  <label className="col-form-label col-md-3">Day(s)</label>
                  <div className="col-md-9">
                    <input type="number" className="form-control" name="days" />
                  </div>
                </div>
              )}
            </div>

            <div className="col-md-6">
              <div className="form-group mb-4 mt-3 mt-md-1 d-flex">
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
                    to="/secondary/list/leave_type"
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
