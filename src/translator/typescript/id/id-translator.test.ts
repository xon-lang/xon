import { parseExpression } from '../../../../util/parse';
import { getExpressionTranslator } from '../expression-translator-helper';
import { MethodExpressionTranslator } from './id-translator';

test('member', () => {
  const code = '(a Number, b) a + b';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree);

  expect(translator).toBeInstanceOf(MethodExpressionTranslator);
  expect(translator.translate()).toBe('(a: Number, b: any) => a + b');
});
