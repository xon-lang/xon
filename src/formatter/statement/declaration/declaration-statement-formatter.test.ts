import {
  DeclarationStatementFormatter,
  defaultFormatterConfig,
  getStatementFormatter,
} from '~/formatter';
import { getParser } from '~/util';

test('parameter', () => {
  const code = 'abc : Number =  2';
  const ctx = getParser(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(DeclarationStatementFormatter);
  expect(formatter.toString()).toBe('abc: Number = 2');
  expect(formatter.indent(2).toString()).toBe('abc: Number = 2');
});
