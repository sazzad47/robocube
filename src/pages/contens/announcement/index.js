import React from "react";
import {
  Col,
  Container,
  Row,
} from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import DataTable from "./DataTable";
import { useNavigate } from "react-router-dom";

const Announcement = () => {
  document.title = "Contents-Announcement | Robocube HR";
  
  const naviagte = useNavigate();

  const addNew = ()=> {
    naviagte("/content/add/announcement")
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Announcement" isAddNew={true} addNewFunction={addNew} />
          
              <DataTable/>
        
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Announcement;

