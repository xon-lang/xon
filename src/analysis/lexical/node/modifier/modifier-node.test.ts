import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { NodeType } from '~/analysis/node';
import { InvokeNode } from '~/analysis/syntax/node/invoke/invoke-node';
import { PrefixNode } from '~/analysis/syntax/node/prefix/prefix-node';
import { syntaxNode } from '~/analysis/syntax/syntax-analysis';
import { Source } from '~/source/source';

test('infix modifier', () => {
  const text = 'infix';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].$).toBe(NodeType.MODIFIER);
  expect(tokens[0].text).toBe('infix');
});

// test('prefix modifier', () => {
//   const code = 'prefix +';
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as PrefixNode;

//   expect(tree.$).toBe(NodeType.PREFIX);
//   expect(tree.operator.text).toBe('prefix');
//   expect((tree.value as OperatorNode).text).toBe('+');
// });

// test('method declaration', () => {
//   const code = 'infix +(a, b)';
//   const source = Source.fromText(code);
//   const tree = syntaxNode(source) as InvokeNode;

//   expect(tree.$).toBe(NodeType.INVOKE);
//   expect(tree.array.parameters.length).toBe(2);
//   expect(tree.array.parameters.at(0)?.$).toBe(NodeType.ID);
//   expect((tree.array.parameters[0] as IdNode).text).toBe('a');
//   expect(tree.array.parameters.at(1)?.$).toBe(NodeType.ID);
//   expect((tree.array.parameters[1] as IdNode).text).toBe('b');
//   expect(tree.instance.$).toBe(NodeType.PREFIX);

//   const prefix = tree.instance as PrefixNode;
//   expect(prefix.$).toBe(NodeType.PREFIX);
//   expect(prefix.operator.text).toBe('infix');
//   expect(prefix.value.$).toBe(NodeType.OPERATOR);
//   expect((prefix.value as OperatorNode).text).toBe('+');
// });
