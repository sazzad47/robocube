import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col } from "reactstrap";
import { blocks } from "../../common/data";

const Blocks = () => {
  return (
    <React.Fragment>
      {blocks.map((item, key) => (
        <Col xl={3} md={3} key={key}>
          <Link to={`${item.link}`}>
            <Card className="">
              <CardBody>
                <div className="gap-3 d-flex flex-column align-items-center justify-content-center">
                  <div className="avatar-sm flex-shrink-0">
                    <span
                      className={
                        "avatar-title rounded fs-3 bg-soft-" + item.bgcolor
                      }
                    >
                      <i className={`text-${item.bgcolor} ${item.icon}`}></i>
                    </span>
                  </div>
                  <h5> {item.label} </h5>
                </div>
              </CardBody>
            </Card>
          </Link>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default Blocks;
