import React, { useState, CSSProperties } from "react";

// Import Equation Editor component --------------------------------------

import EquationEditor from "../EquationEditor";

// Styling ---------------------------------------------------------------

const equationWrapperStyle: CSSProperties = {
  fontSize: "24px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const equationOutputStyle: CSSProperties = {
  fontSize: "16px",
  color: "rgb(232, 62, 140)",
  textAlign: "center"
};

// Actual code -----------------------------------------------------------

const Page = () => {
  const [equation, updateEquation] = useState("y=x");

  return (
    <div style={equationWrapperStyle}>
      <EquationEditor
        value={equation}
        onChange={updateEquation}
        autoCommands="pi theta sqrt sum prod alpha beta gamma rho sigma delta epsilon"
        autoOperatorNames="sin cos tan"
      />
      <p style={equationOutputStyle}>
        <code>{equation}</code>
      </p>
    </div>
  );
};

export default Page;
