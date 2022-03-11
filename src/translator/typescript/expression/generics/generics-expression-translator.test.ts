import { parseExpression } from '../../../../util/parse';
import { getExpressionTranslator } from '../expression-translator-helper';
import { GenericsExpressionTranslator } from './generics-expression-translator';

test('id with generics', () => {
  const code = 'abc<|Number|>';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(GenericsExpressionTranslator);
  expect(translator.toString()).toBe('abc<Number>');
});
