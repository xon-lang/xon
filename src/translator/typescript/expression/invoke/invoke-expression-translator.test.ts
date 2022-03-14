import { parseExpression } from '../../../../util/parse';
import { getExpressionTranslator } from '../expression-translator-helper';
import { InvokeExpressionTranslator } from './invoke-expression-translator';

test('invoke', () => {
  const code = "abc[123, 'a']";
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(InvokeExpressionTranslator);
  expect(translator.toString()).toBe("abc(123, 'a')");
});
