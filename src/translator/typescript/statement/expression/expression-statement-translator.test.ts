import { parseStatement } from '../../../../util/parse';
import { getStatementTranslator } from '../statement-translator-helper';
import { ExpressionStatementTranslator } from './expression-statement-translator';

test('invoke statement', () => {
  const code = 'abc[1,2,3]';
  const tree = parseStatement(code);
  const translator = getStatementTranslator(tree);

  expect(translator).toBeInstanceOf(ExpressionStatementTranslator);
  expect(translator.toString()).toBe('abc(1, 2, 3)');
});
