import { ArgumentFormatter, defaultFormatterConfig, getArgumentFormatter } from '~/formatter';
import { parse } from '~/util';

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
