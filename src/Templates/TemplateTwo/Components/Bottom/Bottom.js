import React from "react";

import Step from './../Layouts/Step';
import StepOne from './../Steps/StepOne';
import StepTwo from './../Steps/StepTwo';
import StepFour from './../Steps/StepFour';
import StepThree from './../Steps/StepThree';

function Bottom(props) {
  return (
    <div>
      <Step {...props} step={"stepOne"}>
        <StepOne {...props} />
      </Step>

      <Step {...props} step={"stepTwo"}>
        <StepTwo {...props} />
      </Step>

      <Step {...props} step={"stepThree"}>
        <StepThree {...props} />
      </Step>

      <Step {...props} step={"stepFour"}>
        <StepFour {...props} />
      </Step>
    </div>
  );
}

export default Bottom;
