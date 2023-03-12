import { getParser } from '~/compiler/parser/parser';
import { defaultFormatterConfig } from '~/formatter/formatter-config';
import { DeclarationStatementFormatter } from '~/formatter/statement/declaration/declaration-statement-formatter';
import { getStatementFormatter } from '~/formatter/statement/statement-formatter-helper';

test('parameter', () => {
  const code = 'abc : Number =  2';
  const ctx = getParser(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(DeclarationStatementFormatter);
  expect(formatter.toString()).toBe('abc: Number = 2');
  expect(formatter.indent(2).toString()).toBe('abc: Number = 2');
});
