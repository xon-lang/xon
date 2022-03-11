import { parseExpression } from '../../../../util/parse';
import { getExpressionTranslator } from '../expression-translator-helper';
import { PreprocessorExpressionTranslator } from './preprocessor-expression-translator';

test('preprocessor', () => {
  const code = '#{abc(1,2,3)}#';
  const tree = parseExpression(code);
  const translator = getExpressionTranslator(tree, false);

  expect(translator).toBeInstanceOf(PreprocessorExpressionTranslator);
  expect(translator.toString()).toBe('abc(1,2,3)');
});
