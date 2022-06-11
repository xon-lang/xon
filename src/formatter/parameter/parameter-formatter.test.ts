import { parse } from '../../util/parse';
import { defaultFormatterConfig } from '../formatter-config';
import { ParameterFormatter } from './parameter-formatter';
import { getParameterFormatter } from './parameter-formatter-helper';

test('id type', () => {
  const code = 'a: 123';
  const ctx = parse(code).parameter();
  const formatter = getParameterFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ParameterFormatter);
  expect(formatter.toString()).toBe('a: 123');
  expect(formatter.indent(2).toString()).toBe('a: 123');
});

test('parameters', () => {
  const code = '{a: Number = 0, b: Number, c = 0}: ABC = [1, 2, 3]';
  const ctx = parse(code).parameter();
  const formatter = getParameterFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ParameterFormatter);
  expect(formatter.toString()).toBe('{a: Number = 0, b: Number, c = 0}: ABC = [1, 2, 3]');
  expect(formatter.indent(2).toString()).toBe('{a: Number = 0, b: Number, c = 0}: ABC = [1, 2, 3]');
});
