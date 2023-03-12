import { getParser } from '~/compiler/parser/parser';
import { defaultFormatterConfig, FormatterConfig } from '~/formatter/formatter-config';
import { ReturnStatementFormatter } from '~/formatter/statement/return/return-statement-formatter';
import { getStatementFormatter } from '~/formatter/statement/statement-formatter-helper';

test('return integer', () => {
  const code = 'return 123';
  const ctx = getParser(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ReturnStatementFormatter);
  expect(formatter.toString()).toBe('return 123');
  expect(formatter.indent(2).toString()).toBe('return 123');
});

test('return no value', () => {
  const code = 'return';
  const ctx = getParser(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ReturnStatementFormatter);
  expect(formatter.toString()).toBe('return');
  expect(formatter.indent(2).toString()).toBe('return');
});

test('return array', () => {
  const code = 'return [1,2,3]';
  const ctx = getParser(code).statement();
  const config = new FormatterConfig();
  config.printWidth = 5;
  const formatter = getStatementFormatter(ctx, config);

  expect(formatter).toBeInstanceOf(ReturnStatementFormatter);
  expect(formatter.toString()).toBe(
    `
return [
  1,
  2,
  3,
]
  `.trim(),
  );
  expect(formatter.indent(2).toString()).toBe(
    `return [
      1,
      2,
      3,
    ]`,
  );
});
