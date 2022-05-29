import { parse } from '../../../util/parse';
import { defaultFormatterConfig } from '../../formatter-config';
import { getStatementFormatter } from '../statement-formatter-helper';
import { DefinitionStatementFormatter } from './definition-statement-formatter';

test('has type', () => {
  const code = 'object Integer (a,b,c) Number\n  abc';
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(DefinitionStatementFormatter);
  expect(formatter.toString()).toBe('object Integer(a, b, c) Number\n  abc');
});
