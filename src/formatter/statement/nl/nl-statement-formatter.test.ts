import { parse } from '../../../util/parse';
import { defaultFormatterConfig } from '../../formatter-config';
import { getStatementFormatter } from '../statement-formatter-helper';
import { NlStatementFormatter } from './nl-statement-formatter';

test('starting with spaces', () => {
  const code = '   \n\n\n   ';
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(NlStatementFormatter);
  expect(formatter.toString()).toBe('\n\n');
});
