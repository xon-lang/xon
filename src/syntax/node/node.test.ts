import { parse } from '../syntax';
import { InfixNode } from './infix/infix-node';
import { IntegerNode } from './integer/integer-node';
import { $Node, TokenNode } from './node';

test('comma', () => {
  const text = '1';
  const nodes = parse(text).statements.map((x) => x.item);
  const tree = nodes[0] as IntegerNode;

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe($Node.INTEGER);
  expect(tree.text).toBe('1');
});

test('single expression', () => {
  const text = '\n  a = 1';
  const nodes = parse(text).statements.map((x) => x.item);

  expect(nodes.length).toBe(1);

  const node = nodes[0] as InfixNode;
  expect((node.left as TokenNode).text).toBe('a');
  expect(node.operator.text).toBe('=');
  expect((node.right as IntegerNode).text).toBe('1');
});

test('debug 1', () => {
  const text = 'a = 1\n b = 2\n +b';
  const nodes = parse(text).statements.map((x) => x.item);

  expect(nodes.length).toBe(1);
  expect(nodes[0].$).toBe($Node.INFIX);
  // todo fix it
  // expect(nodes[0].children?.length).toBe(2);
  // expect(nodes[0].children?.at(0)?.$).toBe(NodeType.ID_ASSIGN);
  // expect(nodes[0].children?.at(1)?.$).toBe(NodeType.PREFIX);
});

test('debug 2', () => {
  const text = 'a = 1\nb = 2\n';
  const nodes = parse(text).statements.map((x) => x.item);

  expect(nodes.length).toBe(2);
  expect(nodes[0].$).toBe($Node.INFIX);
  expect(nodes[1].$).toBe($Node.INFIX);
});

test('debug 3', () => {
  const text = `a
 b
c`.trim();
  const nodes = parse(text).statements.map((x) => x.item);

  expect(nodes.length).toBe(2);
  expect(nodes[0].$).toBe($Node.ID);
  expect(nodes[1].$).toBe($Node.ID);
});

test('debug 4', () => {
  const text = 'a\n b\n b';
  const nodes = parse(text).statements.map((x) => x.item);

  expect(nodes.length).toBe(1);
  // todo fix it
  // expect(nodes[0].children?.length).toBe(2);
});

test('multiple expression', () => {
  const text = '\n  x = 1\n  y = 2\n  z = 3';
  const nodes = parse(text).statements.map((x) => x.item);

  expect(nodes.length).toBe(3);
});

// test('import and if', () => {
//   const text = `import ('xon.os') {Path}

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
//   const text = `
// toString: [] = String
//   importStatements = this.nodes.filter[[x] = x is ImportStatementTree].map[[x] = x as ImportStatementTree]
//   importStatementsMap = {}
// `.trim();
//   const source = Source.fromText(code);
//   const node = parseBody(source);

//   expect(node.type).toBe(NodeType.BODY);
// });

// test('two if nodes', () => {
//   const text = `
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
//   const text = `
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
//   const text = `
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
//   const text = `
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
