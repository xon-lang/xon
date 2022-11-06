import {
  defaultFormatterConfig,
  ExpressionStatementFormatter,
  getStatementFormatter,
} from '~/formatter';
import { getParser } from '~/util';

test('expression', () => {
  const code = 'abc?.def( )';
  const ctx = getParser(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ExpressionStatementFormatter);
  expect(formatter.toString()).toBe('abc?.def()');
  expect(formatter.indent(2).toString()).toBe('abc?.def()');
});
