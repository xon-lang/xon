import { parseExpression } from '~/compiler/parser/parser';
import { Source } from '~/compiler/source/source';
import { NodeType } from '~/node/node';

test('comma', () => {
  const code = ',';
  const source = Source.fromText(code);
  const tree = parseExpression(source);

  expect(tree.type).toBe(NodeType.COMMA);
  expect(source.nodeText(tree)).toBe(',');
});
