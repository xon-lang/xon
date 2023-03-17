import { getParser } from '~/analysis/parser/parser';
import { DeclarationFormatter } from '~/formatter/declaration/declaration-formatter';
import { getParameterFormatter } from '~/formatter/declaration/declaration-formatter-helper';
import { defaultFormatterConfig } from '~/formatter/formatter-config';

test('id type', () => {
  const code = 'a: 123';
  const ctx = getParser(code).declaration();
  const formatter = getParameterFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(DeclarationFormatter);
  expect(formatter.toString()).toBe('a: 123');
  expect(formatter.indent(2).toString()).toBe('a: 123');
});

test('parameters', () => {
  const code = '{a: Number = 0, b: Number, c = 0}: ABC = [1, 2, 3]';
  const ctx = getParser(code).declaration();
  const formatter = getParameterFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(DeclarationFormatter);
  expect(formatter.toString()).toBe('{a: Number = 0, b: Number, c = 0}: ABC = [1, 2, 3]');
  expect(formatter.indent(2).toString()).toBe('{a: Number = 0, b: Number, c = 0}: ABC = [1, 2, 3]');
});

test('params with result type', () => {
  const code = 'a(b: Number): 123 = 123';
  const ctx = getParser(code).declaration();
  const formatter = getParameterFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(DeclarationFormatter);
  expect(formatter.toString()).toBe('a(b: Number): 123 = 123');
});

test('params with no result type', () => {
  const code = 'a(b: Number):  = 123';
  const ctx = getParser(code).declaration();
  const formatter = getParameterFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(DeclarationFormatter);
  expect(formatter.toString()).toBe('a(b: Number) := 123');
});

test('has type', () => {
  const code = 'object Integer (a,b,c): Number\n  abc';
  const ctx = getParser(code).declaration();
  const formatter = getParameterFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(DeclarationFormatter);
  expect(formatter.toString()).toBe('object Integer(a, b, c): Number\n  abc');
});

test('has no type and no attributes', () => {
  const code = 'object Integer (a,b,c)';
  const ctx = getParser(code).declaration();
  const formatter = getParameterFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(DeclarationFormatter);
  expect(formatter.toString()).toBe('object Integer(a, b, c)');
});
