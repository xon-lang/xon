import { parse } from '../../../util/parse';
import { defaultFormatterConfig } from '../../formatter-config';
import { getBodyFormatter } from '../body-formatter-helper';
import { SingleBodyFormatter } from './single-body-formatter';

test('id type', () => {
  const code = ': 123';
  const ctx = parse(code).body();
  const formatter = getBodyFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(SingleBodyFormatter);
  // expect(formatter.toString()).toBe('a 123');
  // expect(formatter.indent(2).toString()).toBe('    a 123');
});
