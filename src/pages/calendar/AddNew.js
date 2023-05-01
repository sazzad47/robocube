import React from "react";
import { useEffect } from "react";
import { Modal } from "reactstrap";
import $ from "jquery";
import "select2";
import { useState } from "react";

export const AddNew = (props) => {
  const { modal, setModal } = props;

  const [type, setType] = useState("event");
  const [sameDay, setSameDay] = useState(false);

  useEffect(() => {
    $(".select2").select2({
      theme: "bootstrap4",
    });
  }, []);

  return (
    <Modal isOpen={modal} id="event-modal" centered>
      <form
        method="post"
        className="modal fade show"
        id="modal-add"
        aria-modal="true"
        role="dialog"
        style={{ display: "block", paddingRight: "5px" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add Event
              </h5>
              <button
                type="button"
                className="close"
                onClick={() => setModal(false)}
              >
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label className="text-danger">Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  required=""
                />
                <div className="custom-control custom-radio custom-control-inline mt-2">
                  <input
                    type="radio"
                    id="radio-type-holiday"
                    name="type"
                    className="custom-control-input"
                    value="holiday"
                    onChange={(e) => setType(e.target.value)}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="radio-type-holiday"
                  >
                    Holiday
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline mt-2">
                  <input
                    type="radio"
                    id="radio-type-event"
                    name="type"
                    className="custom-control-input"
                    value="event"
                    checked={type === "event"}
                    onChange={(e) => setType(e.target.value)}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="radio-type-event"
                  >
                    Event
                  </label>
                </div>
              </div>

              {type === "holiday" && (
                <div className="form-group" id="ot-sec">
                  <label className="text-danger">OT Rate</label>
                  <select
                    className="form-control select2"
                    name="ot_rate"
                    data-select2-id="1"
                    tabIndex="-1"
                    aria-hidden="true"
                  >
                    <option value="" data-select2-id="3">
                      -
                    </option>
                    <option value="166839477839">OT Per Day</option>
                  </select>
                </div>
              )}

              <div className="form-group" id="section-date_start">
                <label>Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date_start"
                  value="2023-05-01"
                  data-end="2023-05-02"
                />
                <div className="custom-control custom-checkbox mt-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="checkbox-same_day"
                    checked={sameDay}
                    onChange={(e) => setSameDay(e.target.checked)}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="checkbox-same_day"
                  >
                    Same Day
                  </label>
                </div>
              </div>

              {!sameDay && (
                <div className="form-group" id="section-date_end">
                  <label>End</label>
                  <input type="date" className="form-control" name="date_end" />
                </div>
              )}

              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="remark"
                ></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button type="submit" name="save" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};
