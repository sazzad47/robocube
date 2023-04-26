import React from "react";
import { Progress } from "reactstrap";

const Steps = () => {
  return (
    <React.Fragment>
      <div className="live-preview mb-3">
        <Progress multi className="progress-step-arrow progress-info">
          <Progress bar value="35">
            Select a Month
          </Progress>
          <Progress bar value="35">
            Review & Confirm
          </Progress>
          <Progress bar value="35" color="light" className="text-dark">
            Payment & Submission
          </Progress>
        </Progress>
      </div>
      <div>
        <p className="w-100 p-3 bg-soft-warning text-dark">
          You are viewing the payroll of April, 2023. Make sure the employeers
          has active and joined.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Steps;
