import { parseStatement } from '../../../../util/parse';
import { getStatementTranslator } from '../statement-translator-helper';
import { IfStatementTranslator } from './if-statement-translator';

test('single body', () => {
  const code = 'if a: do()\nelse: done()';
  const tree = parseStatement(code);
  const translator = getStatementTranslator(tree);

  expect(translator).toBeInstanceOf(IfStatementTranslator);
  expect(translator.toString()).toBe('if (a) do()\n else done()');
});
