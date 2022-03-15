import { evaluate } from '../../../util/evaluate';
import { parseExpression } from '../../../util/parse';
import { IdExpressionTree } from '../id/id-expression-tree';
import { InfixExpressionTree } from './infix-expression-tree';

test('several operands with different priorities', () => {
  const code = '1+1+2^5*2/2';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(evaluate(tree)).toBe(34);
});

test('num plus str', () => {
  const code = "1  + 'str'";
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(evaluate(tree)).toBe('1str');
});

test('has several relational operators', () => {
  const code = 'a<b>c';
  const tree = parseExpression(code) as InfixExpressionTree;

  expect(tree).toBeInstanceOf(InfixExpressionTree);
  expect(tree.left).toBeInstanceOf(InfixExpressionTree);
  expect(tree.right).toBeInstanceOf(IdExpressionTree);

  const left = tree.left as InfixExpressionTree;
  expect(left.name.text).toBe('<');
  expect((left.left as IdExpressionTree).name.text).toBe('a');
  expect((left.right as IdExpressionTree).name.text).toBe('b');

  const right = tree.right as IdExpressionTree;
  expect(right.name.text).toBe('c');
});
