import { parse } from '../../../util/parse';
import { defaultFormatterConfig, FormatterConfig } from '../../formatter-config';
import { getExpressionFormatter } from '../expression-formatter-helper';
import { GroupExpressionFormatter } from './group-expression-formatter';

test('integers', () => {
  const code = '([1, 2, 3])';
  const ctx = parse(code).expr();
  const formatter = getExpressionFormatter(ctx, defaultFormatterConfig) as GroupExpressionFormatter;

  expect(formatter).toBeInstanceOf(GroupExpressionFormatter);
  expect(formatter.toString()).toBe('([1, 2, 3])');
  expect(formatter.indent(2).toString()).toBe('    ([1, 2, 3])');
});

test('array element in array', () => {
  const code = '([[1]])';
  const ctx = parse(code).expr();
  const config = new FormatterConfig();
  config.printWidth = 2;
  const formatter = getExpressionFormatter(ctx, config) as GroupExpressionFormatter;

  expect(formatter).toBeInstanceOf(GroupExpressionFormatter);
  expect(formatter.toString()).toBe(
    `
([
  [
    1,
  ],
])`.trim(),
  );
});
