import { defaultFormatterConfig, ForStatementFormatter, getStatementFormatter } from '~/formatter';
import { parse } from '~/util';

test('value index', () => {
  const code = 'for val in [a,b,c]\n  make()';
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ForStatementFormatter);
  expect(formatter.toString()).toBe('for val in [a, b, c]\n  make()');
  expect(formatter.indent(2).toString()).toBe('for val in [a, b, c]\n      make()');
});

test('value', () => {
  const code = 'for val in [a,b,c]\n  make()';
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ForStatementFormatter);
  expect(formatter.toString()).toBe('for val in [a, b, c]\n  make()');
  expect(formatter.indent(2).toString()).toBe('for val in [a, b, c]\n      make()');
});

test('no value and index', () => {
  const code = 'for [a,b,c]\n  make()';
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ForStatementFormatter);
  expect(formatter.toString()).toBe('for [a, b, c]\n  make()');
  expect(formatter.indent(2).toString()).toBe('for [a, b, c]\n      make()');
});
