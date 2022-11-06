import {
  defaultFormatterConfig,
  getExpressionFormatter,
  LiteralExpressionFormatter,
} from '~/formatter';
import { getParser } from '~/util';

test('integer', () => {
  const code = '123';
  const ctx = getParser(code).expression();
  const formatter = getExpressionFormatter(
    ctx,
    defaultFormatterConfig,
  ) as LiteralExpressionFormatter;

  expect(formatter).toBeInstanceOf(LiteralExpressionFormatter);
  expect(formatter.toString()).toBe('123');
});
