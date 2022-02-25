import { parseStatement } from '../../../../util/parse';
import { IfStatementTranslator } from '../if/if-statement-translator';
import { getStatementTranslator } from '../statement-translator-helper';

test('single body', () => {
  const code = 'if 12+(45/9) :    14+(144/12) else: 2   *   4   ';
  const tree = parseStatement(code);
  const translator = getStatementTranslator(tree);

  expect(translator).toBeInstanceOf(IfStatementTranslator);
  expect(translator.toString()).toBe('if 12 + (45 / 9): 14 + (144 / 12)\nelse: 2 * 4');
});
