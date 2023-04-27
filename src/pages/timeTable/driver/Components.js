import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import { Card, CardBody, Col, Row } from "reactstrap";

const Components = () => {
  return (
    <Row className="mt-3">
      <Col md={3}>
        <Card>
          <CardBody>
            <div className="d-flex flex-column">
              <h6 className="fw-bold">Employees</h6>
              <div className="bg-primary text-start text-white p-2" draggable>
                Cuttie
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col md={9}>
        <FullCalendar
          plugins={[
            BootstrapTheme,
            dayGridPlugin,
            interactionPlugin,
          ]}
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
      </Col>
    </Row>
  );
};

export default Components;
