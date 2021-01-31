import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { ObjectExpressionTree } from './object-expression.tree';

test('check object', () => {
  const code = "{112, key: value, vvv, ...zzz, ['abc'+5]: 123}";
  const tree = parseExpression<ObjectExpressionTree>(code);
  expect(tree.items.length).toBe(5);
  expect(evalExpression(tree.items[0].value)).toBe(112);
  expect(evalExpression(tree.items[0].key)).toBe('112');
  expect(tree.items[0].hasSpread).toBe(false);
  expect(tree.items[1].value).toBeInstanceOf(IdExpressionTree);
  expect(evalExpression(tree.items[1].key)).toBe('key');
  expect(tree.items[1].hasSpread).toBe(false);
  expect(tree.items[2].value).toBeInstanceOf(IdExpressionTree);
  expect(evalExpression(tree.items[2].key)).toBe('vvv');
  expect(tree.items[2].hasSpread).toBe(false);
  expect(tree.items[3].value).toBeInstanceOf(IdExpressionTree);
  expect(tree.items[3].key).toBeUndefined();
  expect(tree.items[3].hasSpread).toBe(true);
  expect(evalExpression(tree.items[4].value)).toBe(123);
  expect(evalExpression(tree.items[4].key)).toBe('abc5');
  expect(tree.items[4].hasSpread).toBe(false);
});
