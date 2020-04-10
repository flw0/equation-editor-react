<img src="demo/public/logo192.png" style="margin: auto; width: 192px; display: block; margin-top: 24px">

# Equation Editor for React Applications

**By [Douwe den Blanken](https://nl.linkedin.com/in/douwedenblanken)
([v0xnihili](https://github.com/V0XNIHILI/))**

## Demo

To see this package in action, a demo is available
[here](https://flw0.github.io/equation-editor-react/). It is possible to type
an equation and see the output in LaTeX underneath the editor in pink.

## Usage

When embedding the `EquationEditor` component into your project, you have four properties you have
to set. `value` and `onChange` speak for themselves, while [`autoCommands`](http://docs.mathquill.com/en/latest/Config/#autocommands) contains a list of commands
for which you only have to type the name of the command with a `\` in front of it. The same goes for
the [`autoOperatorNames`](http://docs.mathquill.com/en/latest/Config/#autooperatornames) but then for operators.

```tsx
import React, { useState } from "react";

import EquationEditor from "equation-editor-react";

const Example = () => {
  const [equation, setEquation] = useState("y=x");

  console.log(equation);

  return (
    <EquationEditor
      value={equation}
      onChange={setEquation}
      autoCommands="pi theta sqrt sum prod alpha beta gamma rho"
      autoOperatorNames="sin cos tan"
    />
  )
};

export default Example;

```

## License

[MIT](./LICENSE)