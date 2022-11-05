import { ArgumentFormatter } from '@/formatter/argument/argument-formatter';
import { getArgumentFormatter } from '@/formatter/argument/argument-formatter-helper';
import { defaultFormatterConfig } from '@/formatter/formatter-config';
import { parse } from '@/util/parse';

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
