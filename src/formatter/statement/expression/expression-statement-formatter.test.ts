import { parse } from '../../../util/parse';
import { defaultFormatterConfig } from '../../formatter-config';
import { getStatementFormatter } from '../statement-formatter-helper';
import { ExpressionStatementFormatter } from './expression-statement-formatter';

test('only nullable', () => {
  const code = 'if a: b else: c';
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ExpressionStatementFormatter);
  // expect(formatter.toString()).toBe('abc?');
  // expect(formatter.indent(2).toString()).toBe('    abc?');
});
