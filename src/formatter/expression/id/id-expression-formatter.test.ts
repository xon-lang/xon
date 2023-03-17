import { getParser } from '~/analysis/parser/parser';
import { getExpressionFormatter } from '~/formatter/expression/expression-formatter-helper';
import { IdExpressionFormatter } from '~/formatter/expression/id/id-expression-formatter';
import { defaultFormatterConfig } from '~/formatter/formatter-config';

test('abc', () => {
  const code = 'abc';
  const ctx = getParser(code).expression();
  const formatter = getExpressionFormatter(ctx, defaultFormatterConfig) as IdExpressionFormatter;

  expect(formatter).toBeInstanceOf(IdExpressionFormatter);
  expect(formatter.toString()).toBe('abc');
});
