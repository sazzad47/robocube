import SweetAlert from "react-bootstrap-sweetalert";

const Alert = ({ show, type, title, message, confirmBtnText,cancelBtnText, onConfirm, onCancel }) => {

  return (
    <SweetAlert
      show={show}
      type={type}
      title={title}
      onConfirm={onConfirm}
      onCancel={onCancel}
      confirmBtnText={confirmBtnText}
      cancelBtnText={cancelBtnText}
      showCancel
      confirmBtnBsStyle="btn btn-primary"
      cancelBtnCssClass="btn btn-light"

    >
      {message}
    </SweetAlert>
  );
};

export default Alert;
