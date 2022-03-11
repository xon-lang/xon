import { parseExpression } from '../../../../util/parse';
import { getExpressionTranslator } from '../expression-translator-helper';
import { MemberExpressionTranslator } from '../member/member-expression-translator';
import { NullableExpressionTranslator } from './nullable-expression-translator';

test('member', () => {
  const code = 'abc?.def';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(MemberExpressionTranslator);
  expect(translator.toString()).toBe('abc?.def');
});

test('type', () => {
  const code = 'Number?';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(NullableExpressionTranslator);
  expect(translator.toString()).toBe('Number?');
});
