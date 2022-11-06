import {
  defaultFormatterConfig,
  getExpressionFormatter,
  LiteralExpressionFormatter,
} from '~/formatter';
import { parse } from '~/util';

test('integer', () => {
  const code = '123';
  const ctx = parse(code).expression();
  const formatter = getExpressionFormatter(
    ctx,
    defaultFormatterConfig,
  ) as LiteralExpressionFormatter;

  expect(formatter).toBeInstanceOf(LiteralExpressionFormatter);
  expect(formatter.toString()).toBe('123');
});
