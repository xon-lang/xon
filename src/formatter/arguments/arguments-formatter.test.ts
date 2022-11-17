import { ArgumentsFormatter } from '~/formatter/arguments/arguments-formatter';
import { getArgumentsFormatter } from '~/formatter/arguments/arguments-formatter-helper';
import { FormatterConfig, defaultFormatterConfig } from '~/formatter/formatter-config';
import { getParser } from '~/util/parse';

test('integers', () => {
  const code = '[1, 2, 3]';
  const ctx = getParser(code).arguments();
  const formatter = getArgumentsFormatter(ctx, defaultFormatterConfig) as ArgumentsFormatter;

  expect(formatter).toBeInstanceOf(ArgumentsFormatter);
  expect(formatter.toString()).toBe('[1, 2, 3]');
});

test('integers with indent', () => {
  const code = '[1, 2, 3]';
  const ctx = getParser(code).arguments();
  const config = new FormatterConfig();
  config.printWidth = 3;
  const formatter = getArgumentsFormatter(ctx, config) as ArgumentsFormatter;

  expect(formatter).toBeInstanceOf(ArgumentsFormatter);
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
  const ctx = getParser(code).arguments();
  const config = new FormatterConfig();
  config.printWidth = 30;
  const formatter = getArgumentsFormatter(ctx, config) as ArgumentsFormatter;

  expect(formatter).toBeInstanceOf(ArgumentsFormatter);
  expect(formatter.toString()).toBe('[1, [2], 3]');
});

test('array element in array', () => {
  const code = '[[1]]';
  const ctx = getParser(code).arguments();
  const config = new FormatterConfig();
  config.printWidth = 2;
  const formatter = getArgumentsFormatter(ctx, config) as ArgumentsFormatter;

  expect(formatter).toBeInstanceOf(ArgumentsFormatter);
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
