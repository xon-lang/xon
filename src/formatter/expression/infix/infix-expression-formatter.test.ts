import { getParser } from '~/analysis/syntax/syntax-analysis';
import { getExpressionFormatter } from '~/formatter/expression/expression-formatter-helper';
import { InfixExpressionFormatter } from '~/formatter/expression/infix/infix-expression-formatter';
import { defaultFormatterConfig, FormatterConfig } from '~/formatter/formatter-config';

test('plus', () => {
  const code = 'a+([1, 2, 3])';
  const ctx = getParser(code).expression();
  const formatter = getExpressionFormatter(ctx, defaultFormatterConfig) as InfixExpressionFormatter;

  expect(formatter).toBeInstanceOf(InfixExpressionFormatter);
  expect(formatter.toString()).toBe('a + ([1, 2, 3])');
});

test('pow', () => {
  const code = 'a^([1, 2, 3])';
  const ctx = getParser(code).expression();
  const formatter = getExpressionFormatter(ctx, defaultFormatterConfig) as InfixExpressionFormatter;

  expect(formatter).toBeInstanceOf(InfixExpressionFormatter);
  expect(formatter.toString()).toBe('a^([1, 2, 3])');
});

test('array element in array', () => {
  const code = '1+([[1]])';
  const ctx = getParser(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 2;
  const formatter = getExpressionFormatter(ctx, config) as InfixExpressionFormatter;

  expect(formatter).toBeInstanceOf(InfixExpressionFormatter);
  expect(formatter.toString()).toBe(
    `
1 + ([
  [
    1
  ]
])`.trim(),
  );
});

test('contains array in as argument', () => {
  const code = '1 + 2 + 3 + [4, 5, 6]';
  const ctx = getParser(code).expression();
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
