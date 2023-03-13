// import { parseExpression } from '~/compiler/parser/parser';
// import { Source } from '~/compiler/source/source';
// import { NodeType } from '~/node/node';

// test('open paren', () => {
//   const code = '(';
//   const source = Source.fromText(code);
//   const tree = parseExpression(source);

//   expect(tree.type).toBe(NodeType.OPEN);
//   expect(source.nodeText(tree)).toBe('(');
// });

// test('open bracket', () => {
//   const code = '[';
//   const source = Source.fromText(code);
//   const tree = parseExpression(source);

//   expect(tree.type).toBe(NodeType.OPEN);
//   expect(source.nodeText(tree)).toBe('[');
// });

// test('open brace', () => {
//   const code = '{';
//   const source = Source.fromText(code);
//   const tree = parseExpression(source);

//   expect(tree.type).toBe(NodeType.OPEN);
//   expect(source.nodeText(tree)).toBe('{');
// });
