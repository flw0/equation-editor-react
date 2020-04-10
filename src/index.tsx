import React, { Component, createRef } from "react";

// Import JQuery, required for the functioning of the equation editor
import $ from "jquery";

// Import the styles from the Mathquill editor
import "mathquill/build/mathquill.css";

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
window.jQuery = $;

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
require("mathquill/build/mathquill");

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line no-undef
const mathQuill = MathQuill.getInterface(2);

type EquationEditorProps = {
  onChange(latex: string): void;
  value: string;
  autoCommands: string;
  autoOperatorNames: string;
};

class EquationEditor extends Component<EquationEditorProps> {
  element: any;
  mathField: any;
  ignoreEditEvents: number;

  /**
   * Element needs to be in the class format and thus requires a constructor. The steps that are run
   * in the constructor is to make sure that React can succesfully communicate with the equation
   * editor.
   * @param props Properties of this component
   */
  constructor(props: EquationEditorProps) {
    super(props);

    this.element = createRef();
    this.mathField = null;

    // MathJax apparently fire 2 edit events on startup.
    this.ignoreEditEvents = 2;
  }

  componentDidMount() {
    const { onChange, value, autoCommands, autoOperatorNames } = this.props;

    const config = {
      handlers: {
        edit: () => {
          if (this.ignoreEditEvents > 0) {
            this.ignoreEditEvents -= 1;
            return;
          }
          if (this.mathField.latex() !== value) {
            onChange(this.mathField.latex());
          }
        },
      },
      autoCommands,
      autoOperatorNames,
    };

    this.mathField = mathQuill.MathField(this.element.current, config);
    this.mathField.latex(value || "");
  }

  render() {
    return (
      <span ref={this.element} style={{ border: "0px", boxShadow: "None" }} />
    );
  }
}

export default EquationEditor;
