# TypeScript React Equation Editor

**By [Douwe den Blanken](https://nl.linkedin.com/in/douwedenblanken)
([v0xnihili](https://github.com/V0XNIHILI/))**

## Demo

To see this repository in action, a demo is available
[here](https://v0xnihili.github.io/typescript-react-equation-editor/). It is possible to type
equations here and see the output in LaTeX below it.

## How to use

When embedding the `EquationEditor` component into your project, you have four properties you have
to set. `value` and `onChange` speak for themselves, while `autoCommands` contains a list of commands
for which you only have to type the name of the command with a `\` in front of it. The same goes for
the `autoOperatorNames` but then for operators.

```tsx
import React, { useState } from "react";

import EquationEditor from "../EquationEditor";

const Example = () => {
  const [equation, updateEquation] = useState("y=x");

  return (
    <EquationEditor
      value={equation}
      onChange={updateEquation}
      autoCommands="pi theta sqrt sum prod alpha beta gamma rho sigma delta epsilon"
      autoOperatorNames="sin cos tan"
    />
  )
}

```

Below, you can find the actual code that power the equation editor (`src/components/EquationEditor/EquationEditor.tsx`). When using this snippet in your
own project, make sure to add both `mathquill` and `jquery` to your project. This will increase your
bundle size, when gzipped with 50kb.

## The component code

```tsx
import React, { Component, createRef } from "react";

import $ from "jquery";

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
        }
      },
      autoCommands,
      autoOperatorNames
    };

    this.mathField = mathQuill.MathField(this.element.current, config);
    this.mathField.latex(value || "");
  }

  render() {
    return <span className="douwe" ref={this.element} style={{ border: "0px", boxShadow: "None" }} />;
  }
}

export default EquationEditor;

```