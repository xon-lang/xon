import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType } from '~/analysis/node';
import { Source } from '~/source/source';

test('single expression', () => {
  const text = '\n  a = 1';
  const source = Source.fromText(text);
  const scanner = new LexicalAnalysis(source.text);
  const body = scanner.body();

  expect(body.statements.length).toBe(2);
  expect(body.statements[1].nodes.length).toBe(6);
  // expect((infix.left as IdNode).text).toBe('a');
  // expect(infix.operator.text).toBe('=');
  // expect((infix.right as IntegerNode).text).toBe('1');
});

test('debug 1', () => {
  const text = 'a = 1\n b = 2\n +b';
  const source = Source.fromText(text);
  const scanner = new LexicalAnalysis(source.text);
  const body = scanner.body();

  expect(body.statements.length).toBe(1);
  expect(body.statements[0].nodes.last().$).toBe(NodeType.BODY);
});

test('debug 2', () => {
  const text = 'a = 1\nb = 2\n';
  const source = Source.fromText(text);
  const scanner = new LexicalAnalysis(source.text);
  const body = scanner.body();

  expect(body.statements.length).toBe(2);
  expect(body.statements[0].nodes[0].$).toBe(NodeType.ID);
  expect(body.statements[1].nodes[0].$).toBe(NodeType.ID);
});

test('debug 3', () => {
  const text = `a
 b
c`.trim();
  const source = Source.fromText(text);
  const scanner = new LexicalAnalysis(source.text);
  const body = scanner.body();

  expect(body.statements.length).toBe(2);
  expect(body.statements[0].nodes[0].$).toBe(NodeType.ID);
  expect(body.statements[0].nodes[2].$).toBe(NodeType.BODY);
  expect(body.statements[1].nodes[0].$).toBe(NodeType.ID);
});

test('multiple expression', () => {
  const text = '\n  x = 1\n  y = 2\n  z = 3';
  const source = Source.fromText(text);
  const scanner = new LexicalAnalysis(source.text);
  const body = scanner.body();

  expect(body.statements.length).toBe(4);
  expect(body.statements[0].nodes[0].$).toBe(NodeType.NL);
  expect(body.statements[1].nodes[0].$).toBe(NodeType.WHITESPACE);
  expect(body.statements[2].nodes[0].$).toBe(NodeType.WHITESPACE);
  expect(body.statements[3].nodes[0].$).toBe(NodeType.WHITESPACE);
});

// test('import and if', () => {
//   const code = `import ('xon.os') {Path}

// 1+1
// if e
//     7+7
// else
//   if d
//     call()
// `;
//   const source = Source.fromText(code);
//   const tree = parseBody(source);

//   expect(tree.type).toBe(NodeType.BODY);
//   expect(tree.nodes.length).toBe(4);
// });

// test('preprocessor in attribute', () => {
//   const code = `
// toString: [] = String
//   importStatements = this.statements.filter[[x] = x is ImportStatementTree].map[[x] = x as ImportStatementTree]
//   importStatementsMap = {}
// `.trim();
//   const source = Source.fromText(code);
//   const node = parseBody(source);

//   expect(node.type).toBe(NodeType.BODY);
// });

// test('two if statements', () => {
//   const code = `
// if a
//   123
// if b
//   321
// `.trim();
//   const source = Source.fromText(code);
//   const { nodes } = parseBody(source);

//   expect(nodes.length).toBe(2);
// });

// test('has comment', () => {
//   const code = `
// a := 1213

// import abc
// import def

// -- comment
// object someObjectFactory(name: String)
// `.trim();
//   const source = Source.fromText(code);
//   const tree = parseBody(source);

//   expect(tree.type).toBe(NodeType.BODY);
// });

// test('debug', () => {
//   const code = `
// abc: ABC

//   if (b is c)
//     return (SingleBodyTree(ctx))

//   if (d is e)
//     return (MultipleBodyTree(ctx))
// `;
//   const source = Source.fromText(code);
//   const { nodes } = parseBody(source);

//   expect(nodes.length).toBe(1);
// });

// test('3.xon', () => {
//   const source = Source.fromPath('src/node/body/test-files/3.xon');
//   const tree = parseBody(source);

//   expect(tree.type).toBe(NodeType.BODY);
// });

// test('1-error.xon', () => {
//   const source = Source.fromPath('src/tree/source/test-files/1-error.xon');
//   const tree = parseBody(source);

//   expect(tree).toBe(NodeType.BODY);
//   // expect(tree.issues.length).toBe(1);
//   // expect(tree.issues[0].sourceSpan.start.line).toBe(4);
//   // expect(tree.issues[0].sourceSpan.start.column).toBe(22);
//   // expect(tree.issues[0].sourceSpan.stop.line).toBe(4);
//   // expect(tree.issues[0].sourceSpan.stop.column).toBe(25);
// });

// test('2-error.xon', () => {
//   const source = Source.fromPath('src/tree/source/test-files/2-error.xon');
//   const tree = parseBody(source);

//   expect(tree).toBe(NodeType.BODY);
//   // expect(tree.issues.length).toBe(1);
//   // expect(tree.issues[0].sourceSpan.start.line).toBe(6);
//   // expect(tree.issues[0].sourceSpan.start.column).toBe(7);
//   // expect(tree.issues[0].sourceSpan.stop.line).toBe(6);
//   // expect(tree.issues[0].sourceSpan.stop.column).toBe(12);
// });

// test('multiple body', () => {
//   const code = `
// abc
//   a = 1
// xyz()
//   x = 0
//   y = 1
//   z = 2
//   `;
//   const source = Source.fromText(code);
//   const { nodes } = parseBody(source);

//   expect(nodes.length).toBe(2);

//   const body1 = nodes[0] as LadderNode;
//   expect(body1.$).toBe(NodeType.LADDER);
//   expect(body1.header.$).toBe(NodeType.ID);
//   expect(body1.body.nodes.length).toBe(1);

//   const body2 = nodes[1] as LadderNode;
//   expect(body2.$).toBe(NodeType.LADDER);
//   expect(body2.header.$).toBe(NodeType.INVOKE);
//   expect(body2.body.nodes.length).toBe(3);
// });
