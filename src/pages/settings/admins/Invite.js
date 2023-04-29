import React from "react";
import { Form, Modal, ModalBody, ModalHeader } from "reactstrap";

const Invite = ({ modal, toggle, setModal }) => {
  return (
    <React.Fragment>
      <Modal id="showModal" isOpen={modal} toggle={toggle}>
        <ModalHeader className="p-3 border-bottom" toggle={toggle}>
          <h5 className="modal-title">Invite Admin</h5>
        </ModalHeader>
        <Form
          className="tablelist-form"
          onSubmit={(e) => {
            e.preventDefault();
            toggle();
            return false;
          }}
        >
          <ModalBody>
            <div id="group-search">
              <div className="form-group">
                <label className="text-danger">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  required=""
                />
              </div>
            </div>
            <div className="w-full text-start mt-3">
              <button
                className="btn btn-warning text-dark"
                onClick={() => setModal(false)}
                type="button"
              >
                Send
              </button>
            </div>
          </ModalBody>
        </Form>
      </Modal>
    </React.Fragment>
  );
};

export default Invite;
