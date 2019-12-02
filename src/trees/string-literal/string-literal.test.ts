import { parseCode, parseWrongCode } from '../../test-helper/test-parser';
import { StringLiteralParser } from './string-literal.parser';

test('correct string', () => {
  const code = '"some string"';
  const parser = parseCode(code, StringLiteralParser)
  expect(parser.value).toBe(code.replace(/\"/g, ''));
});

test('incorrect string', () => {
  const code = "'some string'";
  parseWrongCode(code, StringLiteralParser);
});
