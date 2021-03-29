import { evalExpression } from '../../../eval';
import { parseExpression } from '../../../parse';
import { PlainTypeTree } from '../../type/plain-type/plain-type.tree';
import { OperatorExpressionTree } from './operator-expression.tree';

test('num plus num', () => {
  const code = '1+1';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect((tree.dataType as PlainTypeTree).name).toBe('Integer');
  expect(evalExpression(tree)).toBe(2);
});

test('num plus bool', () => {
  const code = '1+ true';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect(evalExpression(tree)).toBe(2);
});

test('num plus str', () => {
  const code = '1  + "str"';
  const tree = parseExpression<OperatorExpressionTree>(code);
  expect(evalExpression(tree)).toBe('1str');
});
