import { parseCode } from '../../test-helper/test-parser';
import { StringLiteralParser } from './string-literal.parser';

test('some string', () => {
  const code = '"some string"';
  const parser = parseCode(code, StringLiteralParser)
  expect(parser.value).toBe(code.replace(/\"/g, ''));
});
