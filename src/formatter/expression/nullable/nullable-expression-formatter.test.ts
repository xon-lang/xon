import { parse } from '../../../util/parse';
import { defaultFormatterConfig } from '../../formatter-config';
import { getExpressionFormatter } from '../expression-formatter-helper';
import { NullableExpressionFormatter } from './nullable-expression-formatter';

test('only nullable', () => {
  const code = 'abc?';
  const ctx = parse(code).expression();
  const formatter = getExpressionFormatter(
    ctx,
    defaultFormatterConfig,
  ) as NullableExpressionFormatter;

  expect(formatter).toBeInstanceOf(NullableExpressionFormatter);
  expect(formatter.toString()).toBe('abc?');
  expect(formatter.indent(2).toString()).toBe('    abc?');
});
