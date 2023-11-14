import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';
import { NodeType } from '../node-type';

test('empty object', () => {
  const text = '{}';
  const source = Source.fromText(text, null);
  const lexer = new Parser(source.text);
  const nodes = lexer.parse()[0].nodes;
  const tree = nodes[0];

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.OBJECT);
});
