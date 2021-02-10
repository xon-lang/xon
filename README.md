# XON Abstract Syntax Tree

[![npm](https://img.shields.io/npm/v/@xon/ast)](https://www.npmjs.com/package/@xon/ast)
[![Hits-of-Code](https://hitsofcode.com/github/xon-lang/ast)](https://hitsofcode.com/github/xon-lang/ast/view)

[![codebeat badge](https://codebeat.co/badges/23a2e0a2-b327-4715-a1b1-8a81c821a785)](https://codebeat.co/projects/github-com-xon-lang-ast-master)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/109836fff75345ca91f3d94e106798a8)](https://www.codacy.com/gh/xon-lang/ast/dashboard)
[![Codacy Badge](https://app.codacy.com/project/badge/Coverage/109836fff75345ca91f3d94e106798a8)](https://www.codacy.com/gh/xon-lang/ast/dashboard)

XON AST is a library to parse XON code and to generate abstract syntax tree for it

## Usage example

```bash
npm i -S @xon/ast
```

`index.js`

```js
import { evalExpression, parseExpression } from '@xon/ast';

const code = '2 + 2 |x: x^x + x |z: z^x && x^z | z + x + 1'; // any valid xon expression
const tree = parseExpression(code); // generating ast
const result = evalExpression(tree); // something like js eval

console.log(result);
```

```bash
node index.js
# output is 256
```

## Development requirements

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
