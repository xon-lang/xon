import { parse } from '../../util/parse';
import { defaultFormatterConfig, FormatterConfig } from '../formatter-config';
import { ParametersFormatter } from './parameters-formatter';
import { getParametersFormatter } from './parameters-formatter-helper';

test('integers', () => {
  const code = '[a, b, c]';
  const ctx = parse(code).parameters();
  const formatter = getParametersFormatter(ctx, defaultFormatterConfig) as ParametersFormatter;

  expect(formatter).toBeInstanceOf(ParametersFormatter);
  expect(formatter.toString()).toBe('[a, b, c]');
});

test('integers', () => {
  const code = '[a, b, c]';
  const ctx = parse(code).parameters();
  const config = new FormatterConfig();
  config.printWidth = 3;
  const formatter = getParametersFormatter(ctx, config) as ParametersFormatter;

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
