import React from "react";

const BreadCrumb = ({ title, isAddNew, addNewTitle, addNewFunction }) => {
  return (
    <React.Fragment>
      <div className="container-fluid py-2">
        <div className="row">
          <div className="col-6 my-auto">
            <h4 className="py-2 mb-0 font-weight-bold">{title}</h4>
          </div>
          {isAddNew && (
            <div className="col-6 my-auto text-right">
              <button onClick={addNewFunction} className="btn btn-primary">
                <i className="fa mr-1 fa-plus-circle"></i>{" "}
                {addNewTitle ? addNewTitle : "Add New"}
              </button>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default BreadCrumb;
