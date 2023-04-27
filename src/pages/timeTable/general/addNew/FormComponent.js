import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Col, Input, Label, Row } from "reactstrap";

import Flatpickr from "react-flatpickr";
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const FormComponent = () => {
  const [schedule, setSchedule] = useState({
    Sunday: { from: null, to: null, reset: true },
    Monday: { from: null, to: null, reset: true },
    Tuesday: { from: null, to: null, reset: true },
    Wednesday: { from: null, to: null, reset: true },
    Thursday: { from: null, to: null, reset: true },
    Friday: { from: null, to: null, reset: true },
    Saturday: { from: null, to: null, reset: true },
  });

  const handleDayChange = (day, field) => (value) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        [field]: value[0],
      },
    }));
  };

  const handleReset = (day, checked) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        reset: !prevSchedule[day].reset,
        from: checked ? null : prevSchedule[day].from,
        to: checked ? null : prevSchedule[day].to,
      },
    }));
  };

  return (
    <React.Fragment>
      <form onSubmit={(e) => e.preventDefault()}>
        <Row>
          <Col md={6}>
            <div className="my-3">
              <Row className="mb-3">
                <Col lg={3}>
                  <Label htmlFor="title" className="form-label">
                    Title
                  </Label>
                </Col>
                <Col lg={9}>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    className="form-control"
                    placeholder="Enter title"
                  />
                </Col>
              </Row>
              {daysOfWeek.map((day) => (
                <Row key={day} className="mb-3">
                  <Col lg={3}>
                    <Label htmlFor={day.toLowerCase()} className="form-label">
                      {day}
                    </Label>
                  </Col>
                  <Col lg={9}>
                    <div className="d-flex">
                      <Flatpickr
                        name={`${day.toLowerCase()}From`}
                        className="form-control"
                        id={`datepicker-${day.toLowerCase()}-input`}
                        placeholder="Select a starting date"
                        options={{
                          noCalendar: true,
                          enableTime: true,
                          altFormat: "G:i K",
                          dateFormat: "G:i K",
                        }}
                        onChange={handleDayChange(day, "from")}
                        value={schedule[day].from}
                        disabled={schedule[day].reset}
                      />
                      <Flatpickr
                        name={`${day.toLowerCase()}To`}
                        className="form-control"
                        id={`datepicker-${day.toLowerCase()}-input`}
                        placeholder="Select an ending date"
                        options={{
                          noCalendar: true,
                          enableTime: true,
                          altFormat: "G:i K",
                          dateFormat: "G:i K",
                        }}
                        onChange={handleDayChange(day, "to")}
                        value={schedule[day].to}
                        disabled={schedule[day].reset}
                      />
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name={`reset-${day}`}
                        type="checkbox"
                        id={`reset-${day}`}
                        onChange={(e) => handleReset(day, e.target.checked)}
                        checked={schedule[day].reset}
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`cardtableCheck${day}`}
                      ></label>
                    </div>
                  </Col>
                </Row>
              ))}

              <Row className="mb-3">
                <Col lg={3}></Col>
                <Col lg={9}>
                  <div className="form-check d-block d-md-none">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="cardtableCheck03"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="cardtableCheck03"
                    >
                      Active
                    </label>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col lg={3}>
                  <Label htmlFor="remark" className="form-label">
                    Remark
                  </Label>
                </Col>
                <Col lg={9}>
                  <Input
                    type="textarea"
                    rows="4"
                    name="remark"
                    id="remark"
                    className="form-control"
                    placeholder="Enter remark"
                  />
                </Col>
              </Row>
              <div className="d-flex gap-4 justify-content-end align-items-center">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
                <Link className="text-dark" to="/timetable/general">
                  Cancel
                </Link>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="form-check my-3 d-none d-md-block">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="cardtableCheck03"
              />
              <label className="form-check-label" htmlFor="cardtableCheck03">
                Active
              </label>
            </div>
          </Col>
        </Row>
      </form>
    </React.Fragment>
  );
};

export default FormComponent;
