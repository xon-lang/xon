import { ParametersFormatter } from '@/formatter/declarations/declarations-formatter';
import { getDeclarationsFormatter } from '@/formatter/declarations/declarations-formatter-helper';
import { defaultFormatterConfig, FormatterConfig } from '@/formatter/formatter-config';
import { parse } from '@/util/parse';

test('variables', () => {
  const code = '[a, b, c]';
  const ctx = parse(code).declarations();
  const formatter = getDeclarationsFormatter(ctx, defaultFormatterConfig) as ParametersFormatter;

  expect(formatter).toBeInstanceOf(ParametersFormatter);
  expect(formatter.toString()).toBe('[a, b, c]');
});

test('variables with indent', () => {
  const code = '[a, b, c]';
  const ctx = parse(code).declarations();
  const config = new FormatterConfig();
  config.printWidth = 3;
  const formatter = getDeclarationsFormatter(ctx, config) as ParametersFormatter;

  expect(formatter).toBeInstanceOf(ParametersFormatter);
  expect(formatter.toString()).toBe(
    `
[
  a,
  b,
  c,
]`.trim(),
  );

  expect(formatter.indent(2).toString()).toBe(
    `[
      a,
      b,
      c,
    ]`,
  );
});

test('brace', () => {
  const code = '{c, a, b}';
  const ctx = parse(code).declarations();
  const formatter = getDeclarationsFormatter(ctx, defaultFormatterConfig) as ParametersFormatter;

  expect(formatter).toBeInstanceOf(ParametersFormatter);
  expect(formatter.toString()).toBe('{a, b, c}');
});
