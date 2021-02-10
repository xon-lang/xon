# XON AST (Under Development)

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/ba6243700ff64794a9940c47a02aaf53)](https://app.codacy.com/gh/xon-lang/ast?utm_source=github.com&utm_medium=referral&utm_content=xon-lang/ast&utm_campaign=Badge_Grade_Settings)
[![npm](https://img.shields.io/npm/v/@xon/ast)](https://www.npmjs.com/package/@xon/ast)

XON AST is a library to parse XON code and to generate abstract syntax tree for it

## Usage example

```bash
npm i @xon/ast
```

`index.js`

```js
import { evalExpression, parseExpression } from '@xon/ast';

const code = '100 >> 4 |x: x^x + x |z: z^x && x^z | z + x'; // any valid xon expression
const tree = parseExpression(code); // generating ast
const result = evalExpression(tree); // something like js eval

console.log(result); // output is 46668
```

```bash
node index.js
# output is 46668
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
