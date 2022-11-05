import { getExpressionFormatter } from '@/formatter/expression/expression-formatter-helper';
import { IdExpressionFormatter } from '@/formatter/expression/id/id-expression-formatter';
import { defaultFormatterConfig } from '@/formatter/formatter-config';
import { parse } from '@/util/parse';

test('abc', () => {
  const code = 'abc';
  const ctx = parse(code).expression();
  const formatter = getExpressionFormatter(ctx, defaultFormatterConfig) as IdExpressionFormatter;

  expect(formatter).toBeInstanceOf(IdExpressionFormatter);
  expect(formatter.toString()).toBe('abc');
});
