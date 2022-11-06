import {
  defaultFormatterConfig,
  getExpressionFormatter,
  NullableExpressionFormatter,
} from '~/formatter';
import { getParser } from '~/util';
test('only nullable', () => {
  const code = 'abc?';
  const ctx = getParser(code).expression();
  const formatter = getExpressionFormatter(
    ctx,
    defaultFormatterConfig,
  ) as NullableExpressionFormatter;

  expect(formatter).toBeInstanceOf(NullableExpressionFormatter);
  expect(formatter.toString()).toBe('abc?');
});
