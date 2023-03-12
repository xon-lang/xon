import { getParser } from '~/compiler/parser/parser';
import { ParametersFormatter } from '~/formatter/declarations/declarations-formatter';
import { getDeclarationsFormatter } from '~/formatter/declarations/declarations-formatter-helper';
import { defaultFormatterConfig, FormatterConfig } from '~/formatter/formatter-config';

test('variables', () => {
  const code = '[a, b, c]';
  const ctx = getParser(code).declarations();
  const formatter = getDeclarationsFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ParametersFormatter);
  expect(formatter?.toString()).toBe('[a, b, c]');
});

test('variables with indent', () => {
  const code = '[a, b, c]';
  const ctx = getParser(code).declarations();
  const config = new FormatterConfig();
  config.printWidth = 3;
  const formatter = getDeclarationsFormatter(ctx, config);

  expect(formatter).toBeInstanceOf(ParametersFormatter);
  expect(formatter?.toString()).toBe(
    `
[
  a,
  b,
  c,
]`.trim(),
  );

  expect(formatter?.indent(2).toString()).toBe(
    `[
      a,
      b,
      c,
    ]`,
  );
});

test('brace', () => {
  const code = '{c, a, b}';
  const ctx = getParser(code).declarations();
  const formatter = getDeclarationsFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ParametersFormatter);
  expect(formatter?.toString()).toBe('{a, b, c}');
});
