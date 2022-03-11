import { parseStatement } from '../../../../util/parse';
import { getStatementTranslator } from '../statement-translator-helper';
import { PreprocessorStatementTranslator } from './preprocessor-statement-translator';

test('preprocessor', () => {
  const code = '#{abc(1,2,3)}';
  const tree = parseStatement(code);
  const translator = getStatementTranslator(tree);

  expect(translator).toBeInstanceOf(PreprocessorStatementTranslator);
  expect(translator.toString()).toBe('abc(1,2,3)');
});
