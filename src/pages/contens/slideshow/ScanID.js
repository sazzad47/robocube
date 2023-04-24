import React from "react";
import { Card, CardBody, Col, Form, Input, Row } from "reactstrap";
import PreviewCardHeader from "../../../Components/Common/PreviewCardHeader";

const ScanID = () => {
  return (
    <React.Fragment>
      <Card>
        <PreviewCardHeader title="Scan ID" />
        <CardBody>
          <div className="live-preview">
            <Form>
              <Row>
                <Col md={12}>
                  <div className="w-100 d-flex align-items-center justify-content-center">
                    <div className="p-2 p-md-4 w-75 d-flex flex-column gap-3 align-items-end justify-content-center">
                      <Input
                        type="text"
                        className="form-control"
                        placeholder="Scan ID card"
                        id="scanID"
                      />
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  );
};

export default ScanID;
