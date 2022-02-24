import { parseExpression } from '../../../../util/parse';
import { getExpressionTranslator } from '../expression-translator-helper';
import { ArrayExpressionTranslator } from './array-expression-translator';

test('array mixed', () => {
  const code = "[123,'abc']";
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(ArrayExpressionTranslator);
  expect(translator.toString()).toBe("[123, 'abc']");
});
