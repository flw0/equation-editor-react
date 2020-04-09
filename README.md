# TypeScript React Equation Editor

**By [Douwe den Blanken](https://nl.linkedin.com/in/douwedenblanken)
([v0xnihili](https://github.com/V0XNIHILI/))**

## Demo

To see this repository in action, a demo is available
[here](https://flw0.github.io/equation-editor-react/). It is possible to type
equations here and see the output in LaTeX below it.

## How to use

When embedding the `EquationEditor` component into your project, you have four properties you have
to set. `value` and `onChange` speak for themselves, while `autoCommands` contains a list of commands
for which you only have to type the name of the command with a `\` in front of it. The same goes for
the `autoOperatorNames` but then for operators.

```tsx
import React, { useState } from "react";

import EquationEditor from "equation-editor-react";

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