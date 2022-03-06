import { parseExpression } from '../../../../util/parse';
import { getExpressionTranslator } from '../expression-translator-helper';
import { PrefixExpressionTranslator } from './prefix-expression-translator';

test('minus operator', () => {
  const code = '- 123';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(PrefixExpressionTranslator);
  expect(translator.toString()).toBe('-123');
});

test('not operator', () => {
  const code = '!  123';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(PrefixExpressionTranslator);
  expect(translator.toString()).toBe('!123');
});
