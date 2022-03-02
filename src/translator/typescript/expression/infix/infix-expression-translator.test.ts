import { parseExpression } from '../../../../util/parse';
import { getExpressionTranslator } from '../expression-translator-helper';
import { InfixExpressionTranslator } from './infix-expression-translator';

test('num plus num', () => {
  const code = '123+321';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(InfixExpressionTranslator);
  expect(translator.toString()).toBe('123 + 321');
});

test('num pow num', () => {
  const code = '123^321.123';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(InfixExpressionTranslator);
  expect(translator.toString()).toBe('123 ^ 321.123');
});
