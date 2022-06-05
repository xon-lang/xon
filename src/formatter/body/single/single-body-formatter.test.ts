import { parse } from '../../../util/parse';
import { defaultFormatterConfig, FormatterConfig } from '../../formatter-config';
import { getBodyFormatter } from '../body-formatter-helper';
import { SingleBodyFormatter } from './single-body-formatter';

test('assign', () => {
  const code = '=123';
  const ctx = parse(code).body();
  const formatter = getBodyFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(SingleBodyFormatter);
  expect(formatter.toString()).toBe('= 123');
  expect(formatter.indent(2).toString()).toBe('= 123');
});

test('contains new line', () => {
  const code = `= [1, [2
  ], 3]`;
  const ctx = parse(code).body();
  const config = new FormatterConfig();
  config.printWidth = 5;
  const formatter = getBodyFormatter(ctx, config);

  expect(formatter).toBeInstanceOf(SingleBodyFormatter);
  expect(formatter.toString()).toBe(`= [
  1,
  [2],
  3,
]`);
  expect(formatter.indent(2).toString()).toBe(`= [
      1,
      [2],
      3,
    ]`);
});
