import { getExpressionFormatter } from '~/formatter/expression/expression-formatter-helper';
import { LiteralExpressionFormatter } from '~/formatter/expression/literal/literal-expression-formatter';
import { defaultFormatterConfig } from '~/formatter/formatter-config';
import { getParser } from '~/parser/parser';

test('integer', () => {
  const code = '123';
  const ctx = getParser(code).expression();
  const formatter = getExpressionFormatter(ctx, defaultFormatterConfig) as LiteralExpressionFormatter;

  expect(formatter).toBeInstanceOf(LiteralExpressionFormatter);
  expect(formatter.toString()).toBe('123');
});
