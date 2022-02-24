import { parseExpression } from '../../../../util/parse';
import { getExpressionTranslator } from '../expression-translator-helper';
import { IdExpressionTranslator } from './id-expression-translator';

test('id', () => {
  const code = 'abc';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(IdExpressionTranslator);
  expect(translator.toString()).toBe('abc');
});

test('id with generics', () => {
  const code = 'abc<|Number|>';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(IdExpressionTranslator);
  expect(translator.toString()).toBe('abc<Number>');
});
