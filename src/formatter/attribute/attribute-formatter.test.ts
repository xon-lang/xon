import { parse } from '../../util/parse';
import { defaultFormatterConfig } from '../formatter-config';
import { AttributeFormatter } from './attribute-formatter';
import { getAttributeFormatter } from './attribute-formatter-helper';

test('id type', () => {
  const code = 'abc (a,b,c) Number= 123';
  const ctx = parse(code).attribute();
  const formatter = getAttributeFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(AttributeFormatter);
  expect(formatter.toString()).toBe('abc(a, b, c) Number = 123');
});

test('has no type', () => {
  const code = 'abc (a,b,c)=123';
  const ctx = parse(code).attribute();
  const formatter = getAttributeFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(AttributeFormatter);
  expect(formatter.toString()).toBe('abc(a, b, c) = 123');
});
