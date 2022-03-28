import { parse } from '../../util/parse';
import { defaultFormatterConfig } from '../formatter-config';
import { AttributeFormatter } from './attribute-formatter';
import { getParameterFormatter } from './attribute-formatter-helper';

test('id type', () => {
  const code = 'a 123';
  const ctx = parse(code).parameter();
  const formatter = getParameterFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(AttributeFormatter);
  expect(formatter.toString()).toBe('a 123');
  expect(formatter.indent(2).toString()).toBe('    a 123');
});
