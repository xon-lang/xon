import { CommentStatementFormatter, defaultFormatterConfig, getStatementFormatter } from '~/formatter';
import { parse } from '~/util';

test('starting with spaces', () => {
  const code = '--    123';
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(CommentStatementFormatter);
  expect(formatter.toString()).toBe('--    123');
});
