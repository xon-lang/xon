import { parseLiteral } from '../../parse';
import { NullLiteralTree } from './null-literal.tree';

test('has null value', () => {
  const code = 'null';
  const tree = parseLiteral<NullLiteralTree>(code);
  expect(tree).toBeInstanceOf(NullLiteralTree);

  expect(tree.value).toBe(null);
});
