import { parseId } from '../../../util/parse';
import { IdTranslator } from '../id/id-translator';
import { getIdTranslator } from '../id/id-translator-helper';

test('id', () => {
  const code = 'abc';
  const tree = parseId(code);
  const translator = getIdTranslator(tree);

  expect(translator).toBeInstanceOf(IdTranslator);
  expect(translator.toString()).toBe('abc');
});

test('id with generics', () => {
  const code = 'abc<|Number|>';
  const tree = parseId(code);
  const translator = getIdTranslator(tree);

  expect(translator).toBeInstanceOf(IdTranslator);
  expect(translator.toString()).toBe('abc<Number>');
});
