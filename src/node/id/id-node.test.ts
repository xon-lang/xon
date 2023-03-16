import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { IdNode } from '~/node/id/id-node';
import { NodeType } from '~/node/node';

test('id', () => {
  const code = 'myVariable';
  const source = Source.fromText(code);
  const tree = parseExpression(source) as IdNode;

  expect(tree.type).toBe(NodeType.ID);
  expect(tree.text).toBe('myVariable');
});
