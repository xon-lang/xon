import {
  BodyFormatter,
  defaultFormatterConfig,
  FormatterConfig,
  getBodyFormatter,
} from '~/formatter';
import { getParser } from '~/util';

test('integer', () => {
  const code = '\n  123';
  const ctx = getParser(code).body();
  const formatter = getBodyFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(BodyFormatter);
  expect(formatter.toString()).toBe('\n  123');
  expect(formatter.indent(2).toString()).toBe('\n      123');
});

test('contains new line', () => {
  const code = `\n  [1, [2
  ], 3]`;
  const ctx = getParser(code).body();
  const config = new FormatterConfig();
  config.printWidth = 8;
  const formatter = getBodyFormatter(ctx, config);

  expect(formatter).toBeInstanceOf(BodyFormatter);
  expect(formatter.toString()).toBe(`\n  [
    1,
    [2],
    3,
  ]`);
  expect(formatter.indent(2).toString()).toBe(`\n      [
        1,
        [2],
        3,
      ]`);
});

test('several body', () => {
  const code = `  
  if a


    123

    456



  if b

    321
    654`;
  const ctx = getParser(code).body();
  const formatter = getBodyFormatter(ctx, defaultFormatterConfig) as BodyFormatter;

  expect(formatter).toBeInstanceOf(BodyFormatter);
  expect(formatter.toString()).toBe(`
  if a
    123

    456

  if b
    321
    654`);
});
