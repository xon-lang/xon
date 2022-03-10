import { parseDefinition } from '../../../util/parse';
import { DefinitionTranslator } from './definition-translator';
import { getDefinitionTranslator } from './definition-translator-helper';

test('tree model', () => {
  const code = `
model Tree Object
  toString() String
`.trim();
  const tree = parseDefinition(code);
  const translator = getDefinitionTranslator(tree);

  expect(translator).toBeInstanceOf(DefinitionTranslator);
  console.log(translator.toString());

  expect(translator.toString()).toBe(
    `
export class Tree extends Object {
  toString(): String {
    throw new Error('Not implemented')
  }
}
  `.trim(),
  );
});
