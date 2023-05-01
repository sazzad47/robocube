import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "./DataTable";
import AddNew from "./AddNew";
import { useState } from "react";

const Slideshow = () => {
  document.title = "Contents-Slideshow | Robocube HR";

  const [modal, setModal] = useState(false);

  const addNew = () => {
    setModal(true);
  };
  return (
    <React.Fragment>
      <AddNew modal={modal} setModal={setModal} />
      <div className="page-content">
        <Container fluid>
          <BreadCrumb
            title="Slideshow"
            isAddNew={true}
            addNewFunction={addNew}
          />
          <DataTable />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Slideshow;
