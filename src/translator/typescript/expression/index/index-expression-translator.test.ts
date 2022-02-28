import { parseExpression } from '../../../../util/parse';
import { getExpressionTranslator } from '../expression-translator-helper';
import { IndexExpressionTranslator } from './index-expression-translator';

test('two args', () => {
  const code = "abc[123, 'a']";
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(IndexExpressionTranslator);
  expect(translator.toString()).toBe("abc[123, 'a']");
});

test('one args', () => {
  const code = "abc[ 'a']";
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(IndexExpressionTranslator);
  expect(translator.toString()).toBe("abc['a']");
});

test('no args', () => {
  const code = "abc[ ]";
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(IndexExpressionTranslator);
  expect(translator.toString()).toBe("abc[]");
});
