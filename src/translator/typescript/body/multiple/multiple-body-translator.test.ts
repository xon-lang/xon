import { parseBody } from '../../../../util/parse';
import { getBodyTranslator } from '../body-translator-helper';
import { MultipleBodyTranslator } from './multiple-body-translator';

test('multiple body', () => {
  const code = '\n\t123\n\t321';
  const tree = parseBody(code);
  const translator = getBodyTranslator(tree);

  expect(translator).toBeInstanceOf(MultipleBodyTranslator);
  expect(translator.toString()).toBe('123\n321');
});
