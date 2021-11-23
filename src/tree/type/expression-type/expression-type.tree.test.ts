import { parseType } from '../../parse';
import { ExpressionTypeTree } from './expression-type.tree';

test('has string value', () => {
  const code = '"hi"';
  const tree = parseType<ExpressionTypeTree>(code);
  expect(tree).toBeInstanceOf(ExpressionTypeTree);

  expect(tree.toString()).toBe('"hi"');
});
