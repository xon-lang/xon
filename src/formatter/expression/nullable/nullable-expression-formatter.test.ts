import { getExpressionFormatter } from '@/formatter/expression/expression-formatter-helper';
import { NullableExpressionFormatter } from '@/formatter/expression/nullable/nullable-expression-formatter';
import { defaultFormatterConfig } from '@/formatter/formatter-config';
import { parse } from '@/util/parse';
test('only nullable', () => {
  const code = 'abc?';
  const ctx = parse(code).expression();
  const formatter = getExpressionFormatter(
    ctx,
    defaultFormatterConfig,
  ) as NullableExpressionFormatter;

  expect(formatter).toBeInstanceOf(NullableExpressionFormatter);
  expect(formatter.toString()).toBe('abc?');
});
