import React, { useState, CSSProperties } from "react";

// Import Equation Editor component --------------------------------------

import EquationEditor from "equation-editor-react";

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
  const [equation, setEquation] = useState("y=x");

  return (
    <div style={equationWrapperStyle}>
      <EquationEditor
        value={equation}
        onChange={setEquation}
        autoCommands="bar overline sqrt sum prod int alpha beta gamma delta epsilon zeta eta theta iota kappa lambda mu nu xi omikron pi rho sigma tau upsilon phi chi psi omega Alpha Beta Gamma Aelta Epsilon Zeta Eta Theta Iota Kappa Lambda Mu Nu Xi Omikron Pi Rho Sigma Tau Upsilon Phi Chi Psi Omega rangle langle otimes neq leq ll geq gg approx dagger angle and or infty"
        autoOperatorNames="sin cos tan"
        onEnter={() => window.alert("You pressed enter!")}
      />
      <p style={equationOutputStyle}>
        <code>{equation}</code>
      </p>
    </div>
  );
};

export default Page;
