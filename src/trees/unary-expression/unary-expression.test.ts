import { parseCode, parseWrongCode } from '../../test-helper/test-parser';
import { UnaryExpressionParser } from './unary-expression.parser';
import { ExpressionParser } from '../expression/expression.parser';

test('unary plus', () => {
  const code = '+34536';
  const parser = parseCode(code, ExpressionParser)
  expect(parser.value).toBeInstanceOf(UnaryExpressionParser);
});

test('unary minus', () => {
  const code = '-1';
  const parser = parseCode(code, ExpressionParser)
  expect(parser.value).toBeInstanceOf(UnaryExpressionParser);
});

test('unary not', () => {
  const code = '!true';
  const parser = parseCode(code, ExpressionParser)
  expect(parser.value).toBeInstanceOf(UnaryExpressionParser);
});

test('no binary', () => {
  const code = '5 + 7';
  const parser = parseCode(code, ExpressionParser)
  expect(parser.value).not.toBeInstanceOf(UnaryExpressionParser);
});
