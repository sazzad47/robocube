import React from "react";
import Flatpickr from "react-flatpickr";
import { Link } from "react-router-dom";
import {
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
} from "reactstrap";

import * as Yup from "yup";
import { useFormik } from "formik";

import {
  addNewEvent as onAddNewEvent,
  updateEvent as onUpdateEvent,
} from "../../store/actions";
import { useDispatch } from "react-redux";

export const CreateEventModal = (props) => {
  const {
    event,
    selectedDay,
    selectedNewDay,
    setSelectedDay,
    setSelectedNewDay,
    setDeleteModal,
    modal,
    isEdit,
    isEditButton,
    setIsEditButton,
    toggle,
  } = props;
  const dispatch = useDispatch();
  // events validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      title: (event && event.title) || "",
      category: (event && event.category) || "",
      location: (event && event.location) || "",
      description: (event && event.description) || "",
      defaultDate: (event && event.defaultDate) || "",
      datetag: (event && event.datetag) || "",
    },

    validationSchema: Yup.object({
      title: Yup.string().required("Please Enter Your Event Name"),
      category: Yup.string().required("Please Select Your Category"),
    }),
    onSubmit: (values) => {
      var updatedDay = "";
      if (selectedNewDay) {
        updatedDay = new Date(selectedNewDay[1]);
        updatedDay.setDate(updatedDay.getDate() + 1);
      }

      if (isEdit) {
        const updateEvent = {
          id: event.id,
          title: values.title,
          className: values.category,
          start: selectedNewDay ? selectedNewDay[0] : event.start,
          end: selectedNewDay ? updatedDay : event.end,
          location: values.location,
          description: values.description,
        };
        // update event
        dispatch(onUpdateEvent(updateEvent));
        validation.resetForm();
      } else {
        const newEvent = {
          id: Math.floor(Math.random() * 100),
          title: values["title"],
          start: selectedDay ? selectedNewDay[0] : new Date(),
          end: selectedDay ? updatedDay : new Date(),
          className: values.category,
          location: values["location"],
          description: values["description"],
        };
        // save new event
        dispatch(onAddNewEvent(newEvent));
        validation.resetForm();
      }
      setSelectedDay(null);
      setSelectedNewDay(null);
      toggle();
    },
  });

  const submitOtherEvent = () => {
    document.getElementById("form-event").classList.remove("view-event");

    document
      .getElementById("event-title")
      .classList.replace("d-none", "d-block");
    document
      .getElementById("event-category")
      .classList.replace("d-none", "d-block");
    document
      .getElementById("event-start-date")
      .parentNode.classList.remove("d-none");
    document
      .getElementById("event-start-date")
      .classList.replace("d-none", "d-block");
    document
      .getElementById("event-location")
      .classList.replace("d-none", "d-block");
    document
      .getElementById("event-description")
      .classList.replace("d-none", "d-block");
    document
      .getElementById("event-start-date-tag")
      .classList.replace("d-block", "d-none");
    document
      .getElementById("event-location-tag")
      .classList.replace("d-block", "d-none");
    document
      .getElementById("event-description-tag")
      .classList.replace("d-block", "d-none");

    setIsEditButton(true);
  };
  return (
    <Modal isOpen={modal} id="event-modal" centered>
      <ModalHeader
        toggle={toggle}
        tag="h5"
        className="p-3 bg-soft-info modal-title"
      >
        {!!isEdit ? "Edit Event" : "Add Event"}
      </ModalHeader>
      <ModalBody>
        <Form
          className={
            !!isEdit ? "needs-validation view-event" : "needs-validation"
          }
          name="event-form"
          id="form-event"
          onSubmit={(e) => {
            e.preventDefault();
            validation.handleSubmit();
            return false;
          }}
        >
          {!!isEdit ? (
            <div className="text-end">
              <Link
                to="#"
                className="btn btn-sm btn-soft-primary"
                id="edit-event-btn"
                onClick={(e) => {
                  e.preventDefault();
                  submitOtherEvent();
                  return false;
                }}
              >
                Edit
              </Link>
            </div>
          ) : null}

          <div className="event-details">
            <div className="d-flex mb-2">
              <div className="flex-grow-1 d-flex align-items-center">
                <div className="flex-shrink-0 me-3">
                  <i className="ri-calendar-event-line text-muted fs-16"></i>
                </div>
                <div className="flex-grow-1">
                  <h6
                    className="d-block fw-semibold mb-0"
                    id="event-start-date-tag"
                  >
                    {event ? event.datetag : ""}
                  </h6>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center mb-2">
              <div className="flex-shrink-0 me-3">
                <i className="ri-map-pin-line text-muted fs-16"></i>
              </div>
              <div className="flex-grow-1">
                <h6 className="d-block fw-semibold mb-0">
                  {" "}
                  <span id="event-location-tag">
                    {event && event.location !== undefined
                      ? event.location
                      : "No Location"}
                  </span>
                </h6>
              </div>
            </div>
            <div className="d-flex mb-3">
              <div className="flex-shrink-0 me-3">
                <i className="ri-discuss-line text-muted fs-16"></i>
              </div>
              <div className="flex-grow-1">
                <p
                  className="d-block text-muted mb-0"
                  id="event-description-tag"
                >
                  {event && event.description !== undefined
                    ? event.description
                    : "No Description"}
                </p>
              </div>
            </div>
          </div>
          <Row className="event-form">
          <Col xs={12}>
              <div className="mb-3">
                <Label className="form-label">Title</Label>
                <Input
                  className={
                    !!isEdit ? "form-control d-none" : "form-control d-block"
                  }
                  placeholder="Enter event name"
                  type="text"
                  name="title"
                  id="event-title"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.title || ""}
                />
                {validation.touched.title && validation.errors.title ? (
                  <FormFeedback type="invalid">
                    {validation.errors.title}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
            <Col xs={12}>
              <div className="mb-3">
                <Label className="form-label">Type</Label>
                <Input
                  className={
                    !!isEdit ? "form-select d-none" : "form-select d-block"
                  }
                  name="category"
                  id="event-category"
                  type="select"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.category || ""}
                >
                  <option value="bg-soft-danger">Leave</option>
                  <option value="bg-soft-success">Holyday</option>
                  <option value="bg-soft-primary">Birthday</option>
                  <option value="bg-soft-info">Event</option>
          
                </Input>
                {validation.touched.category && validation.errors.category ? (
                  <FormFeedback type="invalid">
                    {validation.errors.category}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
            
            <Col xs={12}>
              <div className="mb-3">
                <Label>Event Date</Label>
                <div
                  className={!!isEdit ? "input-group d-none" : "input-group"}
                >
                  <Flatpickr
                    className="form-control"
                    id="event-start-date"
                    name="defaultDate"
                    placeholder="Select Date"
                    value={validation.values.defaultDate || ""}
                    options={{
                      mode: "range",
                      dateFormat: "Y-m-d",
                    }}
                    onChange={(date) => {
                      setSelectedNewDay(date);
                    }}
                  />
                  <span className="input-group-text">
                    <i className="ri-calendar-event-line"></i>
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div className="mb-3">
                <Label htmlFor="event-location">Location</Label>
                <div>
                  <Input
                    type="text"
                    className={
                      !!isEdit ? "form-control d-none" : "form-control d-block"
                    }
                    name="location"
                    id="event-location"
                    placeholder="Event location"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.location || ""}
                  />
                  {validation.touched.location && validation.errors.location ? (
                    <FormFeedback type="invalid">
                      {validation.errors.location}
                    </FormFeedback>
                  ) : null}
                </div>
              </div>
            </Col>
            <Col xs={12}>
              <div className="mb-3">
                <Label className="form-label">Description</Label>
                <textarea
                  className={
                    !!isEdit ? "form-control d-none" : "form-control d-block"
                  }
                  id="event-description"
                  name="description"
                  placeholder="Enter a description"
                  rows="3"
                  onChange={validation.handleChange}
                  onBlur={validation.handleBlur}
                  value={validation.values.description || ""}
                ></textarea>
                {validation.touched.description &&
                validation.errors.description ? (
                  <FormFeedback type="invalid">
                    {validation.errors.description}
                  </FormFeedback>
                ) : null}
              </div>
            </Col>
          </Row>
          <div className="hstack gap-2 justify-content-end">
            {!!isEdit && (
              <button
                type="button"
                className="btn btn-soft-danger"
                id="btn-delete-event"
                onClick={() => setDeleteModal(true)}
              >
                <i className="ri-close-line align-bottom"></i> Delete
              </button>
            )}
            {isEditButton && (
              <button
                type="submit"
                className="btn btn-success"
                id="btn-save-event"
              >
                {!!isEdit ? "Edit Event" : "Add Event"}
              </button>
            )}
          </div>
        </Form>
      </ModalBody>
    </Modal>
  );
};
