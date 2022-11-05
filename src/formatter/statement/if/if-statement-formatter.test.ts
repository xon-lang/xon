import { defaultFormatterConfig, FormatterConfig } from '@/formatter/formatter-config';
import { IfStatementFormatter } from '@/formatter/statement/if/if-statement-formatter';
import { getStatementFormatter } from '@/formatter/statement/statement-formatter-helper';
import { parse } from '@/util/parse';

test('if single else single', () => {
  const code = 'if a\n  b\nelse\n  c';
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(IfStatementFormatter);
  expect(formatter.toString()).toBe('if a\n  b\nelse\n  c');
  expect(formatter.indent(2).toString()).toBe('if a\n      b\n    else\n      c');
});

test('if multiple else single', () => {
  const code = `
if a
  b
else
  c
`.trim();
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(IfStatementFormatter);
  expect(formatter.toString()).toBe(
    `
if a
  b
else
  c`.trim(),
  );

  expect(formatter.indent(1).toString()).toBe(
    `if a
    b
  else
    c`,
  );
});

test('if single else multiple', () => {
  const code = `
if a
  b
else
  c
  123
`.trim();
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(IfStatementFormatter);
  expect(formatter.toString()).toBe(
    `
if a
  b
else
  c
  123`.trim(),
  );

  expect(formatter.indent(1).toString()).toBe(
    `if a
    b
  else
    c
    123`,
  );
});

test('if multiple else multiple', () => {
  const code = `
if a
  b
  c
  123
else
  e
  d
  456+789
`.trim();
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(IfStatementFormatter);
  expect(formatter.toString()).toBe(
    `
if a
  b
  c
  123
else
  e
  d
  456 + 789
  `.trim(),
  );

  expect(formatter.indent(1).toString()).toBe(
    `if a
    b
    c
    123
  else
    e
    d
    456 + 789`,
  );
});

test('if has long array condition', () => {
  const code = 'if [1, 2,3,4]\n  123';
  const ctx = parse(code).statement();
  const config = new FormatterConfig();
  config.printWidth = 5;
  const formatter = getStatementFormatter(ctx, config);

  expect(formatter).toBeInstanceOf(IfStatementFormatter);
  expect(formatter.toString()).toBe(
    `
if [
  1,
  2,
  3,
  4,
]
  123`.trim(),
  );
});
