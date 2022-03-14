import { parseExpression } from '../../../../util/parse';
import { getExpressionTranslator } from '../expression-translator-helper';
import { MethodExpressionTranslator } from './method-expression-translator';

test('as type', () => {
  const code = '[a Number, b]=> a + b';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, true);

  expect(translator).toBeInstanceOf(MethodExpressionTranslator);
  expect(translator.toString()).toBe('(a: Number, b) => a + b');
});

test('as value', () => {
  const code = '[a Number, b]=>  a + b';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(MethodExpressionTranslator);
  expect(translator.toString()).toBe('(a: Number, b) => a + b');
});
