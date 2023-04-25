import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import listPlugin from "@fullcalendar/list";
import { Card, CardBody, CardHeader } from "reactstrap";

const Calendar = () => {
 
  return (
    <React.Fragment>
      <Card className="card-h-100">
        <CardHeader>
          <h4 className="card-title mb-0">Calendar</h4>
        </CardHeader>
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
          />
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default Calendar;
