import { evalExpression } from '../eval';
import { LiteralExpressionTree } from '../expression/literal-expression/literal-expression.tree';
import { parseTest } from '../parse';
import { AssertStatementTree } from '../statement/assert-statement/assert-statement.tree';
import { TestTree } from './test.tree';

test('has single actual and expect pair', () => {
  const code = 'test "my simple test":\n    actual: 1+1\n    expect: 2';
  const tree = parseTest(code);
  expect(tree).toBeInstanceOf(TestTree);

  expect((tree.name as LiteralExpressionTree).literal.value).toBe('my simple test');
  const assert = tree.body[0] as AssertStatementTree;
  expect(evalExpression(assert.actual)).toBe(2);
  expect(evalExpression(assert.expect)).toBe(2);
});
