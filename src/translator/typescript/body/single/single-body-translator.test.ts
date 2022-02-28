import { parseBody } from '../../../../util/parse';
import { getBodyTranslator } from '../body-translator-helper';
import { SingleBodyTranslator } from './single-body-translator';

test('single body', () => {
  const code = '= abc';
  const tree = parseBody(code);
  const translator = getBodyTranslator(tree);

  expect(translator).toBeInstanceOf(SingleBodyTranslator);
  expect(translator.toString()).toBe('abc');
});
