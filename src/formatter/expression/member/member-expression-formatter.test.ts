import { FormatterConfig, getExpressionFormatter, MemberExpressionFormatter } from '~/formatter';
import { getParser } from '~/util';

test('properties only', () => {
  const code = `a.b.c
  .    d.efg.hij`;
  const ctx = getParser(code).expression();
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
  const code = 'a.b.c(a).dom';
  const ctx = getParser(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 8;
  const formatter = getExpressionFormatter(ctx, config) as MemberExpressionFormatter;

  expect(formatter).toBeInstanceOf(MemberExpressionFormatter);
  expect(formatter.toString()).toBe(
    `
a
  .b
  .c(a)
  .dom`.trim(),
  );
});

test('members with method broken call', () => {
  const code = `a.b \\
  .c(a)
    . 
      dom`;
  const ctx = getParser(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 4;
  const formatter = getExpressionFormatter(ctx, config) as MemberExpressionFormatter;

  expect(formatter).toBeInstanceOf(MemberExpressionFormatter);
  expect(formatter.toString()).toBe(
    `
a
  .b
  .c(
    a
  )
  .dom`.trim(),
  );
});

test('nullable property', () => {
  const code = 'abc?.def';
  const ctx = getParser(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 2;
  const formatter = getExpressionFormatter(ctx, config) as MemberExpressionFormatter;

  expect(formatter).toBeInstanceOf(MemberExpressionFormatter);
  expect(formatter.toString()).toBe(
    `abc?
  .def`.trim(),
  );
});
