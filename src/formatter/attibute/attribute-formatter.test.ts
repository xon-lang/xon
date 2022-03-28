import { parse } from '../../util/parse';
import { defaultFormatterConfig } from '../formatter-config';
import { AttributeFormatter } from './attribute-formatter';
import { getAttributeFormatter } from './attribute-formatter-helper';

test('id type', () => {
  const code = 'a 123';
  const ctx = parse(code).attribute();
  const formatter = getAttributeFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(AttributeFormatter);
  // expect(formatter.toString()).toBe('a 123');
  // expect(formatter.indent(2).toString()).toBe('    a 123');
});
