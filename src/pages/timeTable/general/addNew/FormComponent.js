import React, { useState } from "react";
import { Link } from "react-router-dom";

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

  const handleDayChange = (e, day, field) => {

    const value = e.target.value;

    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        [field]: value,
      },
    }));
  };

  const handleReset = (day, checked) => {
    setSchedule((prevSchedule) => ({
      ...prevSchedule,
      [day]: {
        ...prevSchedule[day],
        from: checked ? "" : prevSchedule[day].from,
        to: checked ? "" : prevSchedule[day].to,
        reset: checked,
      },
      
    }));
  };
  
  console.log('schedule', schedule)
  return (
    <React.Fragment>
      <div className="container-fluid container-wrapper">
        <form method="post">
          <div className="row">
            <div className="col-md-6">
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

              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="form-group row"
                  id="group-timetable-7"
                >
                  <label
                    htmlFor={day.toLowerCase()}
                    className="col-md-3 col-form-label"
                  >
                    {day}
                  </label>
                  <div className="col-md-9">
                    <div className="input-group mb-2">
                      <input
                        name={`${day.toLowerCase()}From`}
                        id={`datepicker-${day.toLowerCase()}-input`}
                        onChange={(e)=> handleDayChange(e, day, "from")}
                        value={schedule[day].from}
                        disabled={schedule[day].reset}
                        type="time"
                        className="form-control form-control-timetable"
                      />
                      <input
                        type="time"
                        className="form-control form-control-timetable"
                        name={`${day.toLowerCase()}To`}
                        id={`datepicker-${day.toLowerCase()}-input`}
                        onChange={(e)=> handleDayChange(e, day, "to")}
                        value={schedule[day].to}
                        disabled={schedule[day].reset}
                      />
                    </div>
                    <div className="custom-control custom-checkbox">
                      <input
                        className="custom-control-input checkbox-rest"
                        name={`reset-${day}`}
                        type="checkbox"
                        id={`reset-${day}`}
                        onChange={(e) => handleReset(day, e.target.checked)}
                        checked={schedule[day].reset}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor={`reset-${day}`}
                      >
                        Reset
                      </label>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-md-6">
              <div className="form-group mb-4">
                <div className="custom-control custom-checkbox mt-1">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="checkbox-active"
                    name="active"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="checkbox-active"
                  >
                    Active
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group row">
                <label className="col-form-label col-md-3">Remark</label>
                <div className="col-md-9">
                  <textarea
                    className="form-control"
                    name="remark"
                    rows="4"
                  ></textarea>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-md-9 offset-md-3">
                  <button type="submit" name="save" className="btn btn-primary">
                    Save
                  </button>
                  <Link
                    to="/timetable/list"
                    className="btn btn-link text-muted"
                  >
                    Cancel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default FormComponent;