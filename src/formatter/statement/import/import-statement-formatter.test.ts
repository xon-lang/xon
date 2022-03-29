import { parse } from '../../../util/parse';
import { defaultFormatterConfig } from '../../formatter-config';
import { getStatementFormatter } from '../statement-formatter-helper';
import { ImportStatementFormatter } from './import-statement-formatter';

test('members', () => {
  const code = 'import a: b, c';
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ImportStatementFormatter);
  expect(formatter.toString()).toBe('import a: b, c');
  expect(formatter.indent(2).toString()).toBe('import a: b, c');
});

test('no members', () => {
  const code = 'import a.b.c';
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ImportStatementFormatter);
  expect(formatter.toString()).toBe('import a.b.c');
  expect(formatter.indent(2).toString()).toBe('import a.b.c');
});
