import { evaluate } from '../../util/evaluate';
import { parseExpression } from '../../util/parse';
import { IdExpressionTree } from '../id/id-expression-tree';
import { InfixExpressionTree } from './infix-expression-tree';

test('num plus num', () => {
  const code = '1+1';
  const tree = parseExpression<InfixExpressionTree>(code);
  expect(tree).toBeInstanceOf(InfixExpressionTree);

  expect(evaluate(tree)).toBe(2);
});

test('num plus str', () => {
  const code = '1  + "str"';
  const tree = parseExpression<InfixExpressionTree>(code);
  expect(tree).toBeInstanceOf(InfixExpressionTree);

  expect(evaluate(tree)).toBe('1str');
});

test('has several relational operators', () => {
  const code = 'a<b>c';
  const tree = parseExpression<InfixExpressionTree>(code);
  expect(tree).toBeInstanceOf(InfixExpressionTree);

  expect(tree.left).toBeInstanceOf(InfixExpressionTree);
  expect(tree.right).toBeInstanceOf(IdExpressionTree);

  const left = tree.left as InfixExpressionTree;
  expect(left.id.text).toBe('<');
  expect((left.left as IdExpressionTree).id.name.text).toBe('a');
  expect((left.right as IdExpressionTree).id.name.text).toBe('b');

  const right = tree.right as IdExpressionTree;
  expect(right.id.name.text).toBe('c');
});
