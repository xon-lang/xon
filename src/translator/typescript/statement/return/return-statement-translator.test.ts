import { parseStatement } from '../../../../util/parse';
import { getStatementTranslator } from '../statement-translator-helper';
import { ReturnStatementTranslator } from './return-statement-translator';

test('return value', () => {
  const code = 'return 123';
  const tree = parseStatement(code);
  const translator = getStatementTranslator(tree);

  expect(translator).toBeInstanceOf(ReturnStatementTranslator);
  expect(translator.toString()).toBe('return 123');
});

test('return no value', () => {
  const code = 'return';
  const tree = parseStatement(code);
  const translator = getStatementTranslator(tree);

  expect(translator).toBeInstanceOf(ReturnStatementTranslator);
  expect(translator.toString()).toBe('return');
});
