import { parseBody } from '~/analysis/parser/parser';
import { BodyNode } from '~/node/body/body-node';
import { IdNode } from '~/node/id/id-node';
import { InfixNode } from '~/node/infix/infix-node';
import { IntegerNode } from '~/node/integer/integer-node';
import { LadderNode } from '~/node/ladder/ladder-node';
import { NodeType } from '~/node/node';
import { Source } from '~/source/source';

test('debug', () => {
  const code = 'a = 1\n b = 2\n +b';
  const source = Source.fromText(code);
  const tree = parseBody(source) as BodyNode;

  expect(tree.type).toBe(NodeType.BODY);
  expect(tree.nodes.length).toBe(1);
  expect(tree.nodes[0].type).toBe(NodeType.LADDER);
  expect((tree.nodes[0] as LadderNode).body.nodes.length).toBe(2);
  expect((tree.nodes[0] as LadderNode).body.nodes[0].type).toBe(NodeType.INFIX);
  expect((tree.nodes[0] as LadderNode).body.nodes[1].type).toBe(NodeType.PREFIX);
});

test('debug 2', () => {
  const code = 'a = 1\nb = 2';
  const source = Source.fromText(code);
  const tree = parseBody(source) as BodyNode;

  expect(tree.type).toBe(NodeType.BODY);
  expect(tree.nodes.length).toBe(2);
});

test('debug 3', () => {
  const code = 'a = 1\n b = 2\nc = 3';
  const source = Source.fromText(code);
  const tree = parseBody(source) as BodyNode;

  expect(tree.type).toBe(NodeType.BODY);
  expect(tree.nodes.length).toBe(2);
  expect(tree.nodes[0].type).toBe(NodeType.LADDER);
  expect(tree.nodes[1].type).toBe(NodeType.INFIX);
});

test('single expression', () => {
  const code = '\n  a = 1';
  const source = Source.fromText(code);
  const tree = parseBody(source) as BodyNode;

  expect(tree.type).toBe(NodeType.BODY);
  const infix = tree.nodes[0] as InfixNode;
  expect((infix.left as IdNode).text).toBe('a');
  expect(infix.operator.text).toBe('=');
  expect((infix.right as IntegerNode).text).toBe('1');
});

test('multiple expression', () => {
  const code = '\n  x = 1\n  y = 2\n  z = 3';
  const source = Source.fromText(code);
  const tree = parseBody(source) as BodyNode;

  expect(tree.type).toBe(NodeType.BODY);
  expect(tree.nodes.length).toBe(3);
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

test('two if statements', () => {
  const code = `
if a
  123
if b
  321
`.trim();
  const source = Source.fromText(code);
  const tree = parseBody(source);

  expect(tree.type).toBe(NodeType.BODY);
});

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

test('debug', () => {
  const code = `
abc: ABC

  if (b is c)
    return (SingleBodyTree(ctx))

  if (d is e)
    return (MultipleBodyTree(ctx))
`;
  const source = Source.fromText(code);
  const tree = parseBody(source);

  expect(tree.type).toBe(NodeType.BODY);
});

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

test('multiple body', () => {
  const code = `
abc
  a = 1
xyz()
  x = 0
  y = 1
  z = 2
  `;
  const source = Source.fromText(code);
  const tree = parseBody(source);

  expect(tree.type).toBe(NodeType.BODY);
  expect(tree.nodes.length).toBe(2);

  const body1 = tree.nodes[0] as LadderNode;
  expect(body1.type).toBe(NodeType.LADDER);
  expect(body1.header.type).toBe(NodeType.ID);
  expect(body1.body.nodes.length).toBe(1);

  const body2 = tree.nodes[1] as LadderNode;
  expect(body2.type).toBe(NodeType.LADDER);
  expect(body2.header.type).toBe(NodeType.INVOKE);
  expect(body2.body.nodes.length).toBe(3);
});
