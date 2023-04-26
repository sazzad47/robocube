import React from "react";
import Stepper from "react-stepper-horizontal";

const Steps = () => {
  return (
    <React.Fragment>
      <Stepper
        steps={[
          { title: "Select a Month" },
          { title: "Review & Confirm" },
          { title: "Payment & Submission" },
        ]}
        activeStep={1}
      />
      <div className="mt-5">
        <p className="w-100 p-3 bg-soft-warning text-dark">
          You are viewing the payroll of April, 2023. Make sure the employee
          is active and joined.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Steps;
