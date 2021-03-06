import React, { CSSProperties } from "react";

// Styling ---------------------------------------------------------------

const footerStyle: CSSProperties = {
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.87)",
  color: "white",
  textAlign: "center",
};

// Actual code -----------------------------------------------------------

const Footer = () => (
  <div style={footerStyle}>
    <p>
      <code>^</code> → Superscript, <code>_</code> → Subscript, <code>int</code>{" "}
      → Integral, <code>sum</code> → Summation, <code>prod</code> → Product,{" "}
      <code>sqrt</code> → Square root, <code>bar</code> → Bar over letter,{" "}
      <code>alpha, beta, ... omega</code> → Small Greek letter,{" "}
      <code>Alpha, Beta, ... Omega</code> → Capital Greek letter
    </p>
  </div>
);

export default Footer;
