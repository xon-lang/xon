import { parseCode, parseWrongCode } from '../../test-helper/test-parser';
import { BooleanLiteralParser } from './boolean-literal.parser';

test('check true', () => {
  const code = "true";
  const parser = parseCode(code, BooleanLiteralParser)
  expect(parser.value).toBe(code);
});

test('check false', () => {
  const code = "false";
  const parser = parseCode(code, BooleanLiteralParser)
  expect(parser.value).toBe(code);
});

test('no True', () => {
  const code = "True";
  parseWrongCode(code, BooleanLiteralParser)
});
