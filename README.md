# XON AST (Under Development)

[![npm](https://img.shields.io/npm/v/@xon/ast)](https://www.npmjs.com/package/@xon/ast)

XON AST is a library to parse XON code and to generate abstract syntax tree for it

## Usage example

```js
import { evalExpression, parseExpression } from '@xon/ast';

const code = '100 >> 4 |x: x^x + x |z: z^x && x^z | z + x'; // any valid xon expression
const tree = parseExpression(code); // generating ast
const result = evalExpression(tree); // something like js eval

console.log(result); // output is 46668
```

## Development requirements

If the following command:

```bash
brew upgrade git
```

return `Error: git not installed` do the next pls:

```bash
brew install git
```

Node.js v12+

## Generate grammar

```bash
npm run grammar
```

## Run tests

```bash
npm t
```

## Documentation is not ready yet
