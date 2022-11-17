import { getExpressionFormatter } from '~/formatter/expression/expression-formatter-helper';
import { PreprocessorExpressionFormatter } from '~/formatter/expression/preprocessor/preprocessor-expression-formatter';
import { FormatterConfig, defaultFormatterConfig } from '~/formatter/formatter-config';
import { getParser } from '~/util/parse';

test('integer', () => {
  const code = '#{123}';
  const ctx = getParser(code).expression();
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
  const ctx = getParser(code).expression();
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
  const ctx = getParser(code).expression();
  const config = new FormatterConfig();
  config.printWidth = 3;
  const formatter = getExpressionFormatter(ctx, config) as PreprocessorExpressionFormatter;

  expect(formatter).toBeInstanceOf(PreprocessorExpressionFormatter);
  expect(formatter.toString()).toBe(`#{
    123
         
    
      }`);
});
