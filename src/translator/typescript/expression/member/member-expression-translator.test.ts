import { parseExpression } from '../../../../util/parse';
import { getExpressionTranslator } from '../expression-translator-helper';
import { MemberExpressionTranslator } from './member-expression-translator';

test('member', () => {
  const code = 'abc.def';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(MemberExpressionTranslator);
  expect(translator.toString()).toBe('abc.def');
});
