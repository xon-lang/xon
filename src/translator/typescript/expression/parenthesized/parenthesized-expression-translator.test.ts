import { parseExpression } from '../../../../util/parse';
import { getExpressionTranslator } from '../expression-translator-helper';
import { ParenthesizedExpressionTranslator } from './parenthesized-expression-translator';

test('minus operator', () => {
  const code = '(- 123)';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(ParenthesizedExpressionTranslator);
  expect(translator.toString()).toBe('(-123)');
});
