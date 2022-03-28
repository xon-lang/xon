import { parse } from '../../../util/parse';
import { defaultFormatterConfig, FormatterConfig } from '../../formatter-config';
import { getExpressionFormatter } from '../expression-formatter-helper';
import { MethodExpressionFormatter } from './method-expression-formatter';

test('has type', () => {
  const code = '(a, b Integer) Number => a+b';
  const ctx = parse(code).expression();
  const formatter = getExpressionFormatter(
    ctx,
    defaultFormatterConfig,
  ) as MethodExpressionFormatter;

  expect(formatter).toBeInstanceOf(MethodExpressionFormatter);
  expect(formatter.toString()).toBe('(a, b Integer) Number => a + b');
  expect(formatter.indent(2).toString()).toBe('    (a, b Integer) Number => a + b');
});

test('has no type', () => {
  const code = '(a, b Integer) => a+b';
  const ctx = parse(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 2;
  const formatter = getExpressionFormatter(ctx, config) as MethodExpressionFormatter;

  expect(formatter).toBeInstanceOf(MethodExpressionFormatter);
  expect(formatter.toString()).toBe(`(a, b Integer) => a + b`.trim());
});
