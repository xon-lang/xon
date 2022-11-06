import { defaultFormatterConfig, getExpressionFormatter, IdExpressionFormatter } from '~/formatter';
import { parse } from '~/util';

test('abc', () => {
  const code = 'abc';
  const ctx = parse(code).expression();
  const formatter = getExpressionFormatter(ctx, defaultFormatterConfig) as IdExpressionFormatter;

  expect(formatter).toBeInstanceOf(IdExpressionFormatter);
  expect(formatter.toString()).toBe('abc');
});
