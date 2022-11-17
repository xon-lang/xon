import { getExpressionFormatter } from '~/formatter/expression/expression-formatter-helper';
import { MethodExpressionFormatter } from '~/formatter/expression/method/method-expression-formatter';
import { FormatterConfig, defaultFormatterConfig } from '~/formatter/formatter-config';
import { getParser } from '~/util/parse';

test('has type', () => {
  const code = '(a, b: Integer) => a+b';
  const ctx = getParser(code).expression();
  const formatter = getExpressionFormatter(
    ctx,
    defaultFormatterConfig,
  ) as MethodExpressionFormatter;

  expect(formatter).toBeInstanceOf(MethodExpressionFormatter);
  expect(formatter.toString()).toBe('(a, b: Integer) => a + b');
});

test('has no type', () => {
  const code = '(a, b: Integer) => a+b';
  const ctx = getParser(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 2;
  const formatter = getExpressionFormatter(ctx, config) as MethodExpressionFormatter;

  expect(formatter).toBeInstanceOf(MethodExpressionFormatter);
  expect(formatter.toString()).toBe(
    `(
  a,
  b: Integer,
) => a + b`.trim(),
  );
});
