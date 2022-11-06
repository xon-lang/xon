import {
  defaultFormatterConfig,
  getExpressionFormatter,
  NullableExpressionFormatter,
} from '~/formatter';
import { parse } from '~/util';
test('only nullable', () => {
  const code = 'abc?';
  const ctx = parse(code).expression();
  const formatter = getExpressionFormatter(
    ctx,
    defaultFormatterConfig,
  ) as NullableExpressionFormatter;

  expect(formatter).toBeInstanceOf(NullableExpressionFormatter);
  expect(formatter.toString()).toBe('abc?');
});
