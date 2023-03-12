import { getParser } from '~/compiler/parser/parser';
import { getExpressionFormatter } from '~/formatter/expression/expression-formatter-helper';
import { MethodExpressionFormatter } from '~/formatter/expression/method/method-expression-formatter';
import { defaultFormatterConfig, FormatterConfig } from '~/formatter/formatter-config';

test('has type', () => {
  const code = '(a, b: Integer) => a+b';
  const ctx = getParser(code).expression();
  const formatter = getExpressionFormatter(ctx, defaultFormatterConfig) as MethodExpressionFormatter;

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
