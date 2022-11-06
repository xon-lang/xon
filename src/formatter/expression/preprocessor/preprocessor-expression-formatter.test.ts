import {
  defaultFormatterConfig,
  FormatterConfig,
  getExpressionFormatter,
  PreprocessorExpressionFormatter,
} from '~/formatter';
import { parse } from '~/util';

test('integer', () => {
  const code = '#{123}';
  const ctx = parse(code).expression();
  const formatter = getExpressionFormatter(
    ctx,
    defaultFormatterConfig,
  ) as PreprocessorExpressionFormatter;

  expect(formatter).toBeInstanceOf(PreprocessorExpressionFormatter);
  expect(formatter.toString()).toBe('#{123}');
});

test('new line', () => {
  const code = `#{
    123
}`;
  const ctx = parse(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 3;
  const formatter = getExpressionFormatter(ctx, config) as PreprocessorExpressionFormatter;

  expect(formatter).toBeInstanceOf(PreprocessorExpressionFormatter);
  expect(formatter.toString()).toBe(`#{
    123
}`);
});

test('new lines', () => {
  const code = `#{
    123
         
    
      }`;
  const ctx = parse(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 3;
  const formatter = getExpressionFormatter(ctx, config) as PreprocessorExpressionFormatter;

  expect(formatter).toBeInstanceOf(PreprocessorExpressionFormatter);
  expect(formatter.toString()).toBe(`#{
    123
         
    
      }`);
});
