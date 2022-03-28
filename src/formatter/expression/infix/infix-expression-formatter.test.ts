import { parse } from '../../../util/parse';
import { defaultFormatterConfig, FormatterConfig } from '../../formatter-config';
import { getExpressionFormatter } from '../expression-formatter-helper';
import { InfixExpressionFormatter } from './infix-expression-formatter';

test('plus', () => {
  const code = 'a+([1, 2, 3])';
  const ctx = parse(code).expr();
  const formatter = getExpressionFormatter(ctx, defaultFormatterConfig) as InfixExpressionFormatter;

  expect(formatter).toBeInstanceOf(InfixExpressionFormatter);
  expect(formatter.toString()).toBe('a + ([1, 2, 3])');
  expect(formatter.indent(2).toString()).toBe('    a + ([1, 2, 3])');
});

test('pow', () => {
  const code = 'a^([1, 2, 3])';
  const ctx = parse(code).expr();
  const formatter = getExpressionFormatter(ctx, defaultFormatterConfig) as InfixExpressionFormatter;

  expect(formatter).toBeInstanceOf(InfixExpressionFormatter);
  expect(formatter.toString()).toBe('a^([1, 2, 3])');
  expect(formatter.indent(2).toString()).toBe('    a^([1, 2, 3])');
});

test('array element in array', () => {
  const code = '1+([[1]])';
  const ctx = parse(code).expr();
  const config = new FormatterConfig();
  config.printWidth = 2;
  const formatter = getExpressionFormatter(ctx, config) as InfixExpressionFormatter;

  expect(formatter).toBeInstanceOf(InfixExpressionFormatter);
  expect(formatter.toString()).toBe(
    `
1 + ([
  [
    1,
  ],
])`.trim(),
  );
});

test('contains array in as argument', () => {
  const code = `1 + 2 + 3 + [4, 5, 6]`;
  const ctx = parse(code).expr();
  const config = new FormatterConfig();
  config.printWidth = 8;
  const formatter = getExpressionFormatter(ctx, config) as InfixExpressionFormatter;

  expect(formatter).toBeInstanceOf(InfixExpressionFormatter);
  expect(formatter.toString()).toBe(`1 + 2 + 3 + [
  4,
  5,
  6,
]`);
});
