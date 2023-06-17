import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { NodeType, Token } from '~/analysis/node';
import { Source } from '~/source/source';

test('infix modifier', () => {
  const text = 'infix';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const tokens = lexer.body().statements[0].tokens as Token[];

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
