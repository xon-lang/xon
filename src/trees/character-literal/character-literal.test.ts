import { parseCode } from '../../test-helper/test-parser';
import { CharacterLiteralParser } from './character-literal.parser';

test('a char', () => {
  const code = "'a'";
  const parser = parseCode(code, CharacterLiteralParser)
  expect(parser.value).toBe(code.replace(/\'/g, ''));
});
