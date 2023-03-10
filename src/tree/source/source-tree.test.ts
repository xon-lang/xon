import { BodyableExpressionTree } from '~/tree/expression/bodyable/bodyable-expression-tree';
import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';
import { TokenExpressionTree } from '~/tree/expression/token/token-expression-tree';
import { SourceTree } from '~/tree/source/source-tree';
import { parseSource, parseSourceFile } from '~/util/parse';

// test('import and if', () => {
//   const code = `import ('xon.os') {Path}

// 1+1
// if e
//     7+7
// else
//   if d
//     call()
// `;
//   const tree = parseSource(code);

//   expect(tree).toBeInstanceOf(SourceTree);
//   expect(tree.children.length).toBe(4);
// });

test('preprocessor in attribute', () => {
  const code = `
toString: [] = String
  importStatements = this.statements.filter[[x] = x is ImportStatementTree].map[[x] = x as ImportStatementTree]
  importStatementsMap = {}
`.trim();
  const tree = parseSource(code);

  expect(tree).toBeInstanceOf(SourceTree);
});

// test('two if statements', () => {
//   const code = `
// if a
//   123
// if b
//   321
// `.trim();
//   const tree = parseSource(code);

//   expect(tree).toBeInstanceOf(SourceTree);
// });

// test('has comment', () => {
//   const code = `
// a := 1213

// import abc
// import def

// -- comment
// object someObjectFactory(name: String)
// `.trim();
//   const tree = parseSource(code);

//   expect(tree).toBeInstanceOf(SourceTree);
// });

// test('debug', () => {
//   const code = `
// abc: ABC

//   if (b is c)
//     return (SingleBodyTree(ctx))

//   if (d is e)
//     return (MultipleBodyTree(ctx))
// `;
//   const tree = parseSource(code);

//   expect(tree).toBeInstanceOf(SourceTree);
// });

test('3.xon', () => {
  const tree = parseSourceFile('src/tree/source/test-files/3.xon');

  expect(tree).toBeInstanceOf(SourceTree);
});

// test('1-error.xon', () => {
//   const tree = parseSourceFile('src/tree/source/test-files/1-error.xon');

//   expect(tree).toBeInstanceOf(SourceTree);
//   expect(tree.issues.length).toBe(1);
//   expect(tree.issues[0].sourceSpan.start.line).toBe(4);
//   expect(tree.issues[0].sourceSpan.start.column).toBe(22);
//   expect(tree.issues[0].sourceSpan.stop.line).toBe(4);
//   expect(tree.issues[0].sourceSpan.stop.column).toBe(25);
// });

// test('2-error.xon', () => {
//   const tree = parseSourceFile('src/tree/source/test-files/2-error.xon');

//   expect(tree).toBeInstanceOf(SourceTree);
//   expect(tree.issues.length).toBe(1);
//   expect(tree.issues[0].sourceSpan.start.line).toBe(6);
//   expect(tree.issues[0].sourceSpan.start.column).toBe(7);
//   expect(tree.issues[0].sourceSpan.stop.line).toBe(6);
//   expect(tree.issues[0].sourceSpan.stop.column).toBe(12);
// });

test('multiple body', () => {
  const code = `
abc
  a = 1
xyz()
  x = 0
  y = 1
  z = 2
  `;
  const tree = parseSource(code);

  expect(tree).toBeInstanceOf(SourceTree);
  expect(tree.expressions.length).toBe(2);

  const body1 = tree.expressions[0] as BodyableExpressionTree;
  expect(body1).toBeInstanceOf(BodyableExpressionTree);
  expect(body1.expression).toBeInstanceOf(TokenExpressionTree);
  expect(body1.body.source.expressions.length).toBe(1);

  const body2 = tree.expressions[1] as BodyableExpressionTree;
  expect(body2).toBeInstanceOf(BodyableExpressionTree);
  expect(body2.expression).toBeInstanceOf(InvokeExpressionTree);
  expect(body2.body.source.expressions.length).toBe(3);
});
