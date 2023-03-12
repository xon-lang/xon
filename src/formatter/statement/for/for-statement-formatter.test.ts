import { defaultFormatterConfig } from '~/formatter/formatter-config';
import { ForStatementFormatter } from '~/formatter/statement/for/for-statement-formatter';
import { getStatementFormatter } from '~/formatter/statement/statement-formatter-helper';
import { getParser } from '~/parser/parser';

test('value index', () => {
  const code = 'for val in [a,b,c]\n  make()';
  const ctx = getParser(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ForStatementFormatter);
  expect(formatter.toString()).toBe('for val in [a, b, c]\n  make()');
  expect(formatter.indent(2).toString()).toBe('for val in [a, b, c]\n      make()');
});

test('value', () => {
  const code = 'for val in [a,b,c]\n  make()';
  const ctx = getParser(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ForStatementFormatter);
  expect(formatter.toString()).toBe('for val in [a, b, c]\n  make()');
  expect(formatter.indent(2).toString()).toBe('for val in [a, b, c]\n      make()');
});

test('no value and index', () => {
  const code = 'for [a,b,c]\n  make()';
  const ctx = getParser(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ForStatementFormatter);
  expect(formatter.toString()).toBe('for [a, b, c]\n  make()');
  expect(formatter.indent(2).toString()).toBe('for [a, b, c]\n      make()');
});
