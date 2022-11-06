import { getExpressionFormatter } from '~/formatter/expression/expression-formatter-helper';
import { GroupExpressionFormatter } from '~/formatter/expression/group/group-expression-formatter';
import { defaultFormatterConfig, FormatterConfig } from '~/formatter/formatter-config';
import { getParser } from '~/util/parse';

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
