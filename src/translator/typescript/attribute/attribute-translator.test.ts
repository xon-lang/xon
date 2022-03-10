import { parseAttribute } from '../../../util/parse';
import { AttributeTranslator } from './attribute-translator';
import { getAttributeTranslator } from './attribute-translator-helper';

test('id', () => {
  const code = 'a';
  const tree = parseAttribute(code);
  const translator = getAttributeTranslator(tree);

  expect(translator).toBeInstanceOf(AttributeTranslator);
  expect(translator.toString()).toBe('a');
});

test('id type', () => {
  const code = 'a Number';
  const tree = parseAttribute(code);
  const translator = getAttributeTranslator(tree);

  expect(translator).toBeInstanceOf(AttributeTranslator);
  expect(translator.toString()).toBe('a: Number');
});

test('id type body', () => {
  const code = 'a Number = 123';
  const tree = parseAttribute(code);
  const translator = getAttributeTranslator(tree);

  expect(translator).toBeInstanceOf(AttributeTranslator);
  expect(translator.toString()).toBe('a: Number = 123');
});

test('method with no body', () => {
  const code = 'toString() String';
  const tree = parseAttribute(code);
  const translator = getAttributeTranslator(tree);

  expect(translator).toBeInstanceOf(AttributeTranslator);
  expect(translator.toString()).toBe("toString(): String {\n  throw new Error('Not implemented')\n}");
});
