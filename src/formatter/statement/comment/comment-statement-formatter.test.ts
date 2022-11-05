import { defaultFormatterConfig } from '@/formatter/formatter-config';
import { CommentStatementFormatter } from '@/formatter/statement/comment/comment-statement-formatter';
import { getStatementFormatter } from '@/formatter/statement/statement-formatter-helper';
import { parse } from '@/util/parse';

test('starting with spaces', () => {
  const code = '--    123';
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(CommentStatementFormatter);
  expect(formatter.toString()).toBe('--    123');
});
