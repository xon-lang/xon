import { parseExpression } from '../../../../util/parse';
import { getExpressionTranslator } from '../expression-translator-helper';
import { LiteralExpressionTranslator } from './literal-expression-translator';

test('integer', () => {
  const code = '123';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(LiteralExpressionTranslator);
  expect(translator.toString()).toBe('123');
});

test('string', () => {
  const code = "'abc'";
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(LiteralExpressionTranslator);
  expect(translator.toString()).toBe("'abc'");
});
