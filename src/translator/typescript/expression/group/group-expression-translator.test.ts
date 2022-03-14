import { parseExpression } from '../../../../util/parse';
import { getExpressionTranslator } from '../expression-translator-helper';
import { GroupExpressionTranslator } from './group-expression-translator';

test('minus operator', () => {
  const code = '(- 123)';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(GroupExpressionTranslator);
  expect(translator.toString()).toBe('(-123)');
});
