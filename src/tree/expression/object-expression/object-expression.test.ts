import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { ObjectExpressionTree } from './object-expression.tree';

test('check object', () => {
  const code = '{ key: 112, v:vvv}';
  const tree = parseExpression<ObjectExpressionTree>(code);
  expect(tree.items.length).toBe(2);
  expect(tree.items[0].key).toBe('key');
  expect(evalExpression(tree.items[0].value)).toBe(112);
  expect(tree.items[1].key).toBe('v');
  expect(tree.items[1].value).toBeInstanceOf(IdExpressionTree);
  expect((tree.items[1].value as IdExpressionTree).name).toBe('vvv');
});
