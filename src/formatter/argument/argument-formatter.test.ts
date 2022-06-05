import { parse } from '../../util/parse';
import { defaultFormatterConfig } from '../formatter-config';
import { ArgumentFormatter } from './argument-formatter';
import { getArgumentFormatter } from './argument-formatter-helper';

test('name value', () => {
  const code = 'a= 123';
  const ctx = parse(code).argument();
  const formatter = getArgumentFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ArgumentFormatter);
  expect(formatter.toString()).toBe('a = 123');
  expect(formatter.indent(2).toString()).toBe('a = 123');
});

test('value', () => {
  const code = '123';
  const ctx = parse(code).argument();
  const formatter = getArgumentFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(ArgumentFormatter);
  expect(formatter.toString()).toBe('123');
  expect(formatter.indent(2).toString()).toBe('123');
});
