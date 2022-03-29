import { parse } from '../../../util/parse';
import { defaultFormatterConfig } from '../../formatter-config';
import { getExpressionFormatter } from '../expression-formatter-helper';
import { IdExpressionFormatter } from './id-expression-formatter';

test('abc', () => {
  const code = 'abc';
  const ctx = parse(code).expression();
  const formatter = getExpressionFormatter(ctx, defaultFormatterConfig) as IdExpressionFormatter;

  expect(formatter).toBeInstanceOf(IdExpressionFormatter);
  expect(formatter.toString()).toBe('abc');
});
