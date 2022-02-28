import { parseStatement } from '../../../../util/parse';
import { getStatementTranslator } from '../statement-translator-helper';
import { AssignmentStatementTranslator } from './assignment-statement-translator';

test('return value', () => {
  const code = 'set a = 123';
  const tree = parseStatement(code);
  const translator = getStatementTranslator(tree);

  expect(translator).toBeInstanceOf(AssignmentStatementTranslator);
  expect(translator.toString()).toBe('const a = 123');
});
