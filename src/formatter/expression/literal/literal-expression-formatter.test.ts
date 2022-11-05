import { parse } from '@/util/parse';
import { defaultFormatterConfig } from '../../formatter-config';
import { getExpressionFormatter } from '../expression-formatter-helper';
import { LiteralExpressionFormatter } from './literal-expression-formatter';

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
