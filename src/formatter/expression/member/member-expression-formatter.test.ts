import { parse } from '../../../util/parse';
import { FormatterConfig } from '../../formatter-config';
import { getExpressionFormatter } from '../expression-formatter-helper';
import { MemberExpressionFormatter } from './member-expression-formatter';

test('properties only', () => {
  const code = `a.b.c.d.efg.hij`;
  const ctx = parse(code).expr();
  const config = new FormatterConfig();
  config.printWidth = 5;
  const formatter = getExpressionFormatter(ctx, config) as MemberExpressionFormatter;

  expect(formatter).toBeInstanceOf(MemberExpressionFormatter);
  expect(formatter.toString()).toBe(
    `a
  .b
  .c
  .d
  .efg
  .hij`.trim(),
  );
});

test('members with method call', () => {
  const code = `a.b.c(a).dom`;
  const ctx = parse(code).expr();
  const config = new FormatterConfig();
  config.printWidth = 5;
  const formatter = getExpressionFormatter(ctx, config) as MemberExpressionFormatter;

  expect(formatter).toBeInstanceOf(MemberExpressionFormatter);
  console.log(formatter.toString());

  expect(formatter.toString()).toBe(
    `a.b.c(
  a,
).dom`.trim(),
  );
});

test('nullable property', () => {
  const code = 'abc?.def';
  const ctx = parse(code).expr();
  const config = new FormatterConfig();
  config.printWidth = 2;
  const formatter = getExpressionFormatter(ctx, config) as MemberExpressionFormatter;

  expect(formatter).toBeInstanceOf(MemberExpressionFormatter);
  expect(formatter.toString()).toBe(
    `abc?
  .def`.trim(),
  );
});
