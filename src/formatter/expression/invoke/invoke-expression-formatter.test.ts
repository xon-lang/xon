import { parse } from '../../../util/parse';
import { defaultFormatterConfig, FormatterConfig } from '../../formatter-config';
import { getExpressionFormatter } from '../expression-formatter-helper';
import { InvokeExpressionFormatter } from './invoke-expression-formatter';

test('abc', () => {
  const code = 'abc(1, 2, 3)';
  const ctx = parse(code).expression();
  const formatter = getExpressionFormatter(
    ctx,
    defaultFormatterConfig,
  ) as InvokeExpressionFormatter;

  expect(formatter).toBeInstanceOf(InvokeExpressionFormatter);
  expect(formatter.toString()).toBe('abc(1, 2, 3)');
});

test('restricted width', () => {
  const code = 'abc[1, 2, 3]';
  const ctx = parse(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 3;
  const formatter = getExpressionFormatter(ctx, config) as InvokeExpressionFormatter;

  expect(formatter).toBeInstanceOf(InvokeExpressionFormatter);
  expect(formatter.toString()).toBe(
    `
abc[
  1,
  2,
  3,
]`.trim(),
  );

  expect(formatter.indent(2).toString()).toBe(
    `abc[
      1,
      2,
      3,
    ]`,
  );
});

test('contains new line', () => {
  const code = `(abc)[1, [2
  ], 3]`;
  const ctx = parse(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 30;
  const formatter = getExpressionFormatter(ctx, config) as InvokeExpressionFormatter;

  expect(formatter).toBeInstanceOf(InvokeExpressionFormatter);
  expect(formatter.toString()).toBe(`(abc)[1, [2], 3]`);
});

test('array element in array', () => {
  const code = '(a+b/c)([1])';
  const ctx = parse(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 2;
  const formatter = getExpressionFormatter(ctx, config) as InvokeExpressionFormatter;

  expect(formatter).toBeInstanceOf(InvokeExpressionFormatter);
  expect(formatter.toString()).toBe(
    `
(a + b / c)(
  [
    1
  ]
)`.trim(),
  );
});

test('array instance', () => {
  const code = '[1, 2, 3](1, 2)';
  const ctx = parse(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 6;
  const formatter = getExpressionFormatter(ctx, config) as InvokeExpressionFormatter;

  expect(formatter).toBeInstanceOf(InvokeExpressionFormatter);
  expect(formatter.toString()).toBe(
    `
[
  1,
  2,
  3,
](
  1,
  2,
)`.trim(),
  );
});
