import { parseTest } from '../parse';
import { ExpressionStatementTree } from '../statement/expression-statement/expression-statement.tree';
import { TestTree } from './test.tree';

test('1', () => {
  const code = 'test "abc":\n    log(222)';
  const tree = parseTest(code);
  expect(tree).toBeInstanceOf(TestTree);

  expect(tree.expression.toString()).toBe('"abc"');
  expect(tree.body.length).toBe(1);
  expect(tree.body[0]).toBeInstanceOf(ExpressionStatementTree);
});

test('2', () => {
  const code = 'test:\n    log(222)';
  const tree = parseTest(code);
  expect(tree).toBeInstanceOf(TestTree);

  expect(tree.expression).toBeNull();
  expect(tree.body.length).toBe(1);
  expect(tree.body[0]).toBeInstanceOf(ExpressionStatementTree);
});
