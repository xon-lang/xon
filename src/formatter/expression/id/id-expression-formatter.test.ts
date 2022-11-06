import { defaultFormatterConfig, getExpressionFormatter, IdExpressionFormatter } from '~/formatter';
import { getParser } from '~/util';

test('abc', () => {
  const code = 'abc';
  const ctx = getParser(code).expression();
  const formatter = getExpressionFormatter(ctx, defaultFormatterConfig) as IdExpressionFormatter;

  expect(formatter).toBeInstanceOf(IdExpressionFormatter);
  expect(formatter.toString()).toBe('abc');
});
