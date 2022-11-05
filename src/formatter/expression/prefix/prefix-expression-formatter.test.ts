import { getExpressionFormatter } from '@/formatter/expression/expression-formatter-helper';
import { PrefixExpressionFormatter } from '@/formatter/expression/prefix/prefix-expression-formatter';
import { defaultFormatterConfig, FormatterConfig } from '@/formatter/formatter-config';
import { parse } from '@/util/parse';

test('plus', () => {
  const code = '+([1, 2, 3])';
  const ctx = parse(code).expression();
  const formatter = getExpressionFormatter(
    ctx,
    defaultFormatterConfig,
  ) as PrefixExpressionFormatter;

  expect(formatter).toBeInstanceOf(PrefixExpressionFormatter);
  expect(formatter.toString()).toBe('+([1, 2, 3])');
});

test('pow', () => {
  const code = '^([1, 2, 3])';
  const ctx = parse(code).expression();
  const formatter = getExpressionFormatter(
    ctx,
    defaultFormatterConfig,
  ) as PrefixExpressionFormatter;

  expect(formatter).toBeInstanceOf(PrefixExpressionFormatter);
  expect(formatter.toString()).toBe('^([1, 2, 3])');
});

test('array element in array', () => {
  const code = '+([[1]])';
  const ctx = parse(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 2;
  const formatter = getExpressionFormatter(ctx, config) as PrefixExpressionFormatter;

  expect(formatter).toBeInstanceOf(PrefixExpressionFormatter);
  expect(formatter.toString()).toBe(
    `
+([
  [
    1
  ]
])`.trim(),
  );
});

test('contains array in as argument', () => {
  const code = '+ (2 + 3 + [4, 5, 6])';
  const ctx = parse(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 8;
  const formatter = getExpressionFormatter(ctx, config) as PrefixExpressionFormatter;

  expect(formatter).toBeInstanceOf(PrefixExpressionFormatter);
  expect(formatter.toString()).toBe(`+(2 + 3 + [
  4,
  5,
  6,
])`);
});
