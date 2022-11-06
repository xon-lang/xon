import {
  defaultFormatterConfig,
  FormatterConfig,
  getExpressionFormatter,
  GroupExpressionFormatter,
} from '~/formatter';
import { getParser } from '~/util';

test('integers', () => {
  const code = '([1, 2, 3])';
  const ctx = getParser(code).expression();
  const formatter = getExpressionFormatter(ctx, defaultFormatterConfig) as GroupExpressionFormatter;

  expect(formatter).toBeInstanceOf(GroupExpressionFormatter);
  expect(formatter.toString()).toBe('([1, 2, 3])');
});

test('array element in array', () => {
  const code = '([[1]])';
  const ctx = getParser(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 2;
  const formatter = getExpressionFormatter(ctx, config) as GroupExpressionFormatter;

  expect(formatter).toBeInstanceOf(GroupExpressionFormatter);
  expect(formatter.toString()).toBe(
    `
([
  [
    1
  ]
])`.trim(),
  );
});
