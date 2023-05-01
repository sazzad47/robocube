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
import {
  getEvents as onGetEvents,
  getCategories as onGetCategories,
} from "../../store/actions";
import { AddNew } from "./AddNew";

const Calender = () => {
  document.title = "Calendar | Robocube HR";
  
  const dispatch = useDispatch();
 
  const [modal, setModal] = useState(false);

  const { events, categories } = useSelector((state) => ({
    events: state.Calendar.events,
    categories: state.Calendar.categories,
  }));

  useEffect(() => {
    dispatch(onGetEvents());
    dispatch(onGetCategories());
  }, [dispatch]);


  const [checkedCategories, setCheckedCategories] = useState({
    "leave": true,
    "holiday": true,
    "birthday": true,
    "event": true,
  });

  const handleCheckboxChange = (category) => {
    setCheckedCategories({
      ...checkedCategories,
      [category.type]: !checkedCategories[category.type],
    });
  };

  const filteredEvents = events.filter(
    (item) => checkedCategories[item.type]
  );
  
  const addNew = ()=> {
    setModal(true);
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <AddNew modal = {modal} setModal = {setModal} />
        <Container fluid>
          <BreadCrumb title="Calendar" isAddNew={true} addNewFunction={addNew}  />
          <div className="container-fluid container-wrapper">
            <div className="row">
              <div className="col-xl-2 col-md-3">
                {categories &&
                  categories.map((category, i) => (
                     <div key={i} className={`custom-control ${category.type} custom-checkbox mb-2`}>
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id={`checkbox-${category.type}`}
                    checked={checkedCategories[category.type]}
                    onChange={() => handleCheckboxChange(category)}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor={`checkbox-${category.type}`}
                  >
                    {category.title}
                  </label>
                </div> 
                  ))}
                
              </div>

              <div className="col-xl-10 col-md-9">
                <FullCalendar
                  plugins={[BootstrapTheme, dayGridPlugin, interactionPlugin]}
                  initialView="dayGridMonth"
                  slotDuration={"00:15:00"}
                  handleWindowResize={true}
                  themeSystem="bootstrap"
                  headerToolbar={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,dayGridWeek,dayGridDay",
                  }}
                  events={filteredEvents}
                  editable={true}
                  selectable={true}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Calender;
