import React from "react";
import { Col, Row } from "reactstrap";

const BreadCrumb = ({ title, isAddNew, addNewTitle, addNewFunction }) => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12}>
          <div className="d-sm-flex align-items-center justify-content-between">
            <h4 className="mb-sm-0 fw-bold">{title}</h4>

            {isAddNew && (
              <div className="col-sm-auto ms-auto">
                <button onClick={addNewFunction} className="fs-16 d-flex align-items-center gap-2 btn btn-primary">
                <i className='fa mr-1 fa-plus-circle'></i>{" "}

                  <div>{addNewTitle ? addNewTitle : "Add New"}</div>
                </button>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default BreadCrumb;
