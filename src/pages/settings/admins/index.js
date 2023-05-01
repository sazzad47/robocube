import React from "react";
import { Container } from "reactstrap";
import BreadCrumb from "../../../Components/Common/BreadCrumb";
import Datatable from "./Datatable";
import Invite from "./Invite";
import { useState } from "react";
import { useCallback } from "react";

const AllAdmins = () => {
  document.title = "All Admins | Robocube HR";

  const [inviteModal, setInviteModal] = useState(false);

  const toggle = useCallback(() => {
    if (inviteModal) {
      setInviteModal(false);
    } else {
      setInviteModal(true);
    }
  }, [inviteModal]);

  return (
    <React.Fragment>
      <div className="page-content">
        <Invite modal={inviteModal} toggle={toggle} setModal={setInviteModal} />
        <Container fluid>
          <BreadCrumb
            title="All Admins"
            isAddNew={true}
            addNewTitle="Invite Admin"
            addNewFunction={() => setInviteModal(true)}
          />
          <div className="container-fluid container-wrapper">
            <Datatable />
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AllAdmins;
