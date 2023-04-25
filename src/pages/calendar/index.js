import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Card, CardBody, Container, Row, Col } from "reactstrap";

//calendar
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import listPlugin from "@fullcalendar/list";

//redux
import { useSelector, useDispatch } from "react-redux";

import BreadCrumb from "../../Components/Common/BreadCrumb";
import DeleteModal from "../../Components/Common/DeleteModal";

import {
  getEvents as onGetEvents,
  getCategories as onGetCategories,
  deleteEvent as onDeleteEvent,
  resetCalendar,
} from "../../store/actions";
import { CreateEventModal } from "./Components";

const Calender = () => {
  const dispatch = useDispatch();
  const [event, setEvent] = useState({});
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedNewDay, setSelectedNewDay] = useState(0);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditButton, setIsEditButton] = useState(true);

  const { events, categories, isEventUpdated } = useSelector((state) => ({
    events: state.Calendar.events,
    categories: state.Calendar.categories,
    isEventUpdated: state.Calendar.isEventUpdated,
  }));
  useEffect(() => {
    dispatch(onGetEvents());
    dispatch(onGetCategories());
  }, [dispatch]);

  useEffect(() => {
    if (isEventUpdated) {
      setIsEdit(false);
      setEvent({});
      setTimeout(() => {
        dispatch(resetCalendar("isEventUpdated", false));
      }, 500);
    }
  }, [dispatch, isEventUpdated]);

  /**
   * Handling the modal state
   */
  const toggle = () => {
    if (modal) {
      setModal(false);
      setEvent(null);
      setIsEdit(false);
      setIsEditButton(true);
    } else {
      setModal(true);
    }
  };
  /**
   * Handling date click on calendar
   */

  const handleDateClick = (arg) => {
    const date = arg["date"];
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const currectDate = new Date();
    const currentHour = currectDate.getHours();
    const currentMin = currectDate.getMinutes();
    const currentSec = currectDate.getSeconds();
    const modifiedDate = new Date(
      year,
      month,
      day,
      currentHour,
      currentMin,
      currentSec
    );

    const modifiedData = { ...arg, date: modifiedDate };

    setSelectedNewDay(date);
    setSelectedDay(modifiedData);
    toggle();
  };

  const str_dt = function formatDate(date) {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var d = new Date(date),
      month = "" + monthNames[d.getMonth()],
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [day + " " + month, year].join(",");
  };

  const date_r = function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
    return [year, month, day].join("-");
  };

  /**
   * Handling click on event on calendar
   */
  const handleEventClick = (arg) => {
    const event = arg.event;

    const st_date = event.start;
    const ed_date = event.end;
    const r_date =
      ed_date == null
        ? str_dt(st_date)
        : str_dt(st_date) + " to " + str_dt(ed_date);
    const er_date =
      ed_date == null
        ? date_r(st_date)
        : date_r(st_date) + " to " + date_r(ed_date);

    setEvent({
      id: event.id,
      title: event.title,
      start: event.start,
      end: event.end,
      className: event.classNames,
      category: event.classNames[0],
      location: event._def.extendedProps.location,
      description: event._def.extendedProps.description,
      defaultDate: er_date,
      datetag: r_date,
    });

    setIsEdit(true);
    setIsEditButton(false);
    toggle();
  };
  /**
   * On delete event
   */
  const handleDeleteEvent = () => {
    dispatch(onDeleteEvent(event));
    setDeleteModal(false);
    toggle();
  };

  const [checkedCategories, setCheckedCategories] = useState({
    "bg-soft-primary": true,
    "bg-soft-info": true,
    "bg-soft-success": true,
    "bg-soft-danger": true,
  });

  const handleCheckboxChange = (category) => {
    setCheckedCategories({
      ...checkedCategories,
      [category.className]: !checkedCategories[category.className],
    });
  };

  const filteredEvents = events.filter(
    (item) => checkedCategories[item.className]
  );

  document.title = "Calendar | Robocube HR";

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Calendar" />
          <Row>
            <Col xs={12}>
              <Row>
                <Col xl={3}>
                  <Card className="card-h-100">
                    <CardBody>
                      <button
                        className="btn btn-primary w-100"
                        id="btn-new-event"
                        onClick={toggle}
                      >
                        <i className="mdi mdi-plus"></i> Create New Event
                      </button>

                      <div id="external-events">
                        {categories &&
                          categories.map((category) => (
                            <div
                              className={`d-flex gap-3 align-items-center bg-soft-${category.type} external-event text-${category.type}`}
                              key={"cat-" + category.id}
                            >
                              <input
                                id="hideEvent"
                                type="checkbox"
                                className={`bg-soft-${category.type} text-${category.type}`}
                                checked={checkedCategories[category.className]}
                                onChange={() => handleCheckboxChange(category)}
                              />
                              <label className="p-0 m-0" htmlFor="hideEvent">
                                {category.title}
                              </label>
                            </div>
                          ))}
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col xl={9}>
                  <Card className="card-h-100">
                    <CardBody>
                      <FullCalendar
                        plugins={[
                          BootstrapTheme,
                          dayGridPlugin,
                          interactionPlugin,
                          listPlugin,
                        ]}
                        initialView="dayGridMonth"
                        slotDuration={"00:15:00"}
                        handleWindowResize={true}
                        themeSystem="bootstrap"
                        headerToolbar={{
                          left: "prev,next today",
                          center: "title",
                          right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
                        }}
                        events={filteredEvents}
                        editable={true}
                        selectable={true}
                        dateClick={handleDateClick}
                        eventClick={handleEventClick}
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
              <CreateEventModal
                event={event}
                selectedDay={selectedDay}
                selectedNewDay={selectedNewDay}
                setSelectedDay={setSelectedDay}
                setSelectedNewDay={setSelectedNewDay}
                setDeleteModal={setDeleteModal}
                modal={modal}
                isEdit={isEdit}
                isEditButton={isEditButton}
                setIsEditButton={setIsEditButton}
                toggle={toggle}
              />
              <div style={{ clear: "both" }}></div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Calender.propTypes = {
  events: PropTypes.any,
  categories: PropTypes.array,
  className: PropTypes.string,
  onGetEvents: PropTypes.func,
  onAddNewEvent: PropTypes.func,
  onUpdateEvent: PropTypes.func,
  onDeleteEvent: PropTypes.func,
  onGetCategories: PropTypes.func,
};

export default Calender;
