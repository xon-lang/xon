import { parseCode, parseWrongCode } from '../../test-helper/test-parser';
import { FloatLiteralParser } from './float-literal.parser';

test('positive number', () => {
  const code = '123.123';
  const parser = parseCode(code, FloatLiteralParser)
  expect(parser.value).toBe(code);
});

test('zero number', () => {
  const code = '0.0';
  const parser = parseCode(code, FloatLiteralParser)
  expect(parser.value).toBe(code);
});

test('underscore in number', () => {
  const code = '5_999_245.15463_64';
  const parser = parseCode(code, FloatLiteralParser)
  expect(parser.value).toBe('5999245.1546364');
});

test('no underscore at the start', () => {
  const code = '_123.2535';
  parseWrongCode(code, FloatLiteralParser)
});

test('no underscore at the end', () => {
  const code = '123_.2647_';
  parseWrongCode(code, FloatLiteralParser)
});

test('no several underscores', () => {
  const code = '123_4567__321.0';
  parseWrongCode(code, FloatLiteralParser)
});