import React, { useEffect, useRef } from "react";

import $ from "jquery";

import "mathquill/build/mathquill.css";

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
window.jQuery = $;

require("mathquill/build/mathquill");

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line no-undef
const mathQuill = MathQuill.getInterface(2);

type EquationEditorProps = {
  onChange(latex: string): void;
  value: string;
  spaceBehavesLikeTab?: boolean;
  autoCommands: string;
  autoOperatorNames: string;
  onEnter?(): void;
};

/**
 * @typedef {EquationEditorProps} props
 * @prop {Function} onChange Triggered when content of the equation editor changes
 * @prop {string} value Content of the equation handler
 * @prop {boolean}[false] spaceBehavesLikeTab Whether spacebar should simulate tab behavior
 * @prop {string} autoCommands List of commands for which you only have to type the name of the
 * command with a \ in front of it. Examples: pi theta rho sum
 * @prop {string} autoOperatorNames List of operators for which you only have to type the name of the
 * operator with a \ in front of it. Examples: sin cos tan
 * @prop {Function} onEnter Triggered when enter is pressed in the equation editor
 * @extends {Component<EquationEditorProps>}
 */
const EquationEditor: React.FC<EquationEditorProps> = ({
  onChange,
  value,
  spaceBehavesLikeTab,
  autoCommands,
  autoOperatorNames,
  onEnter,
}) => {
  const element = useRef(null);
  // @ts-ignore
  let mathField = null;
  let ignoreEditEvents = 2; // MathJax apparently fire 2 edit events on startup.

  useEffect(() => {
    const config = {
      handlers: {
        edit: () => {
          if (ignoreEditEvents > 0) {
            ignoreEditEvents -= 1;
            return;
          }
          // @ts-ignore
          if (mathField.latex() !== value) {
            // @ts-ignore
            onChange(mathField.latex());
          }
        },
        enter: onEnter,
      },
      spaceBehavesLikeTab,
      autoCommands,
      autoOperatorNames,
    };

    mathField = mathQuill.MathField(element.current, config);
    mathField.latex(value || "");
  });

  return (
      <span ref={element} style={{ border: "0px", boxShadow: "None" }} />
  );
}

export default EquationEditor;
