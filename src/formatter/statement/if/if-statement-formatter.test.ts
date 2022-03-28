import { parse } from '../../../util/parse';
import { defaultFormatterConfig, FormatterConfig } from '../../formatter-config';
import { getStatementFormatter } from '../statement-formatter-helper';
import { IfStatementFormatter } from './if-statement-formatter';

test('if single else single', () => {
  const code = 'if a: b else: c';
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(IfStatementFormatter);
  expect(formatter.toString()).toBe('if a: b else: c');
  expect(formatter.indent(2).toString()).toBe('    if a: b else: c');
});

test('if multiple else single', () => {
  const code = `
if a
  b
else: c
`.trim();
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(IfStatementFormatter);
  expect(formatter.toString()).toBe(
    `
if a
  b
else: c`.trim(),
  );

  expect(formatter.indent(1).toString()).toBe(
    `  if a
    b
  else: c`,
  );
});

test('if single else multiple', () => {
  const code = `
if a: b else
  c
  123
`.trim();
  const ctx = parse(code).statement();
  const formatter = getStatementFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(IfStatementFormatter);
  expect(formatter.toString()).toBe(
    `
if a: b
else
  c
  123`.trim(),
  );

  expect(formatter.indent(1).toString()).toBe(
    `  if a: b
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
    `  if a
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
  const code = 'if [1, 2,3,4]: 123';
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
]: 123`.trim(),
  );
});