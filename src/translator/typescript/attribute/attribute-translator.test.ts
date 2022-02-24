import { parseParameter } from '../../../util/parse';
import { ParameterTranslator } from '../parameter/parameter-translator';
import { getParameterTranslator } from '../parameter/parameter-translator-helper';

test('id', () => {
  const code = 'a';
  const tree = parseParameter(code);
  const translator = getParameterTranslator(tree);

  expect(translator).toBeInstanceOf(ParameterTranslator);
  expect(translator.toString()).toBe('a: any');
});

test('id type', () => {
  const code = 'a Number';
  const tree = parseParameter(code);
  const translator = getParameterTranslator(tree);

  expect(translator).toBeInstanceOf(ParameterTranslator);
  expect(translator.toString()).toBe('a: Number');
});

test('id type body', () => {
  const code = 'a Number: 123';
  const tree = parseParameter(code);
  const translator = getParameterTranslator(tree);

  expect(translator).toBeInstanceOf(ParameterTranslator);
  expect(translator.toString()).toBe('a: Number = 123');
});
