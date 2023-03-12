import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { NodeType } from '~/node/node';

test('id', () => {
  const code = 'myVariable';
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.type).toBe(NodeType.ID);
  expect(source.nodeText(tree)).toBe('myVariable');
});
