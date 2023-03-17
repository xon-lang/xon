import { getParser } from '~/analysis/parser/parser';
import { defaultFormatterConfig } from '~/formatter/formatter-config';
import { ExpressionStatementFormatter } from '~/formatter/statement/expression/expression-statement-formatter';
import { getStatementFormatter } from '~/formatter/statement/statement-formatter-helper';

test('expression', () => {
  const code = 'abc?.def( )';
  const ctx = getParser(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ExpressionStatementFormatter);
  expect(formatter.toString()).toBe('abc?.def()');
  expect(formatter.indent(2).toString()).toBe('abc?.def()');
});
