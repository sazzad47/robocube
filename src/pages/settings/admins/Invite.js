import React from "react";
import { Form, Modal, ModalBody, ModalHeader } from "reactstrap";

const Invite = ({ modal, toggle, setModal }) => {
  return (
    <React.Fragment>
      <Modal id="showModal" isOpen={modal} toggle={toggle}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Invite Admin
            </h5>
          </div>
          <div className="modal-body">
            <div id="group-search">
              <div className="form-group">
                <label className="text-danger">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="username"
                  required=""
                />
              </div>

              <button
                className="btn btn-warning"
                onClick={()=> setModal(false)}
                type="button"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default Invite;
