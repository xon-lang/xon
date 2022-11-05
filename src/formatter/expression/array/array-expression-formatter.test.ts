import { ArrayExpressionFormatter } from '@/formatter/expression/array/array-expression-formatter';
import { getExpressionFormatter } from '@/formatter/expression/expression-formatter-helper';
import { defaultFormatterConfig, FormatterConfig } from '@/formatter/formatter-config';
import { parse } from '@/util/parse';

test('integers', () => {
  const code = '[1, 2, 3]';
  const ctx = parse(code).expression();
  const formatter = getExpressionFormatter(ctx, defaultFormatterConfig) as ArrayExpressionFormatter;

  expect(formatter).toBeInstanceOf(ArrayExpressionFormatter);
  expect(formatter.toString()).toBe('[1, 2, 3]');
});

test('integers', () => {
  const code = '[1, 2, 3]';
  const ctx = parse(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 3;
  const formatter = getExpressionFormatter(ctx, config) as ArrayExpressionFormatter;

  expect(formatter).toBeInstanceOf(ArrayExpressionFormatter);
  expect(formatter.toString()).toBe(
    `
[
  1,
  2,
  3,
]`.trim(),
  );

  expect(formatter.indent(2).toString()).toBe(
    `[
      1,
      2,
      3,
    ]`,
  );
});

test('contains new line', () => {
  const code = `[1, [2
  ], 3]`;
  const ctx = parse(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 30;
  const formatter = getExpressionFormatter(ctx, config) as ArrayExpressionFormatter;

  expect(formatter).toBeInstanceOf(ArrayExpressionFormatter);
  expect(formatter.toString()).toBe(`[1, [2], 3]`);
});

test('array element in array', () => {
  const code = '[[1]]';
  const ctx = parse(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 2;
  const formatter = getExpressionFormatter(ctx, config) as ArrayExpressionFormatter;

  expect(formatter).toBeInstanceOf(ArrayExpressionFormatter);
  expect(formatter.toString()).toBe(
    `
[
  [
    1
  ]
]`.trim(),
  );
});
