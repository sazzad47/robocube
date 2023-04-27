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
        activeStep={2}
      />
    </React.Fragment>
  );
};

export default Steps;
