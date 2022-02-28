import { parseStatement } from '../../../../util/parse';
import { getStatementTranslator } from '../statement-translator-helper';
import { ImportStatementTranslator } from './import-statement-translator';

test('single body', () => {
  const code = 'import abc: ABC';
  const tree = parseStatement(code);
  const translator = getStatementTranslator(tree);

  expect(translator).toBeInstanceOf(ImportStatementTranslator);
  expect(translator.toString()).toBe('import { ABC } from abc');
});
