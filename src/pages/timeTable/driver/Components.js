import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";

const Components = () => {
  return (
    <div className="container-fluid container-wrapper">
      <div className="row">
        <div className="col-xl-2 col-md-3 mb-4 mb-md-0">
          <div id="mydraggable" className="card">
            <div className="card-body">
              <p>
                <strong>Employees</strong>
              </p>
              <div draggable className="fc-event mb-2 p-2">
                <div id="167108877793">Cuttie</div>
              </div>
            </div>
          </div>
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
          />
        </div>
      </div>
    </div>
  );
};

export default Components;
