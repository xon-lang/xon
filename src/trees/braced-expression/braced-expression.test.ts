import { parseCode } from '../../test-helper/test-parser';
import { BracedExpressionParser } from './braced-expression.parser';
import { ExpressionParser } from '../expression/expression.parser';

test('one braced expression', () => {
  const code = '(1+1)';
  const parser = parseCode(code, ExpressionParser)
  expect(parser.value).toBeInstanceOf(BracedExpressionParser);
  expect(parser.toPlain().type).toBe('BinaryExpression');
});

test('several braced expression', () => {
  const code = '(((-123)))';
  const parser = parseCode(code, ExpressionParser)
  expect(parser.value).toBeInstanceOf(BracedExpressionParser);
  expect(parser.toPlain().type).toBe('UnaryExpression');
});
