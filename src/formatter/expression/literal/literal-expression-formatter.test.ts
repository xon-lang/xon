import { getExpressionFormatter } from '@/formatter/expression/expression-formatter-helper';
import { LiteralExpressionFormatter } from '@/formatter/expression/literal/literal-expression-formatter';
import { defaultFormatterConfig } from '@/formatter/formatter-config';
import { parse } from '@/util/parse';

test('integer', () => {
  const code = '123';
  const ctx = parse(code).expression();
  const formatter = getExpressionFormatter(
    ctx,
    defaultFormatterConfig,
  ) as LiteralExpressionFormatter;

  expect(formatter).toBeInstanceOf(LiteralExpressionFormatter);
  expect(formatter.toString()).toBe('123');
});
