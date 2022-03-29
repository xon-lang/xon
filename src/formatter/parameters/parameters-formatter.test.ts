import { parse } from '../../util/parse';
import { defaultFormatterConfig, FormatterConfig } from '../formatter-config';
import { ParametersFormatter } from './parameters-formatter';
import { getParametersFormatter } from './parameters-formatter-helper';

test('integers', () => {
  const code = '[1, 2, 3]';
  const ctx = parse(code).parameters();
  const formatter = getParametersFormatter(ctx, defaultFormatterConfig) as ParametersFormatter;

  expect(formatter).toBeInstanceOf(ParametersFormatter);
  expect(formatter.toString()).toBe('[1, 2, 3]');
});

test('integers', () => {
  const code = '[1, 2, 3]';
  const ctx = parse(code).parameters();
  const config = new FormatterConfig();
  config.printWidth = 3;
  const formatter = getParametersFormatter(ctx, config) as ParametersFormatter;

  expect(formatter).toBeInstanceOf(ParametersFormatter);
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
  const ctx = parse(code).parameters();
  const config = new FormatterConfig();
  config.printWidth = 30;
  const formatter = getParametersFormatter(ctx, config) as ParametersFormatter;

  expect(formatter).toBeInstanceOf(ParametersFormatter);
  expect(formatter.toString()).toBe(`[1, [2], 3]`);
});

test('array element in array', () => {
  const code = '[[1]]';
  const ctx = parse(code).parameters();
  const config = new FormatterConfig();
  config.printWidth = 2;
  const formatter = getParametersFormatter(ctx, config) as ParametersFormatter;

  expect(formatter).toBeInstanceOf(ParametersFormatter);
  expect(formatter.toString()).toBe(
    `
[
  [
    1
  ]
]`.trim(),
  );
  expect(formatter.indent(2).toString()).toBe(
    `[
      [
        1
      ]
    ]`.trim(),
  );
});
