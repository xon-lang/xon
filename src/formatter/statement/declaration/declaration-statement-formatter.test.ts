import { parse } from '../../../util/parse';
import { defaultFormatterConfig } from '../../formatter-config';
import { getStatementFormatter } from '../statement-formatter-helper';
import { DeclarationStatementFormatter } from './declaration-statement-formatter';

test('parameter', () => {
  const code = 'abc : Number =  2';
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(DeclarationStatementFormatter);
  expect(formatter.toString()).toBe('abc: Number = 2');
  expect(formatter.indent(2).toString()).toBe('abc: Number = 2');
});
