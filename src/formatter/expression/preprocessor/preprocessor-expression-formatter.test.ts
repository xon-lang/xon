import { parse } from '../../../util/parse';
import { defaultFormatterConfig, FormatterConfig } from '../../formatter-config';
import { getExpressionFormatter } from '../expression-formatter-helper';
import { PreprocessorExpressionFormatter } from './preprocessor-expression-formatter';

test('integer', () => {
  const code = '#{123}';
  const ctx = parse(code).expr();
  const formatter = getExpressionFormatter(
    ctx,
    defaultFormatterConfig,
  ) as PreprocessorExpressionFormatter;

  expect(formatter).toBeInstanceOf(PreprocessorExpressionFormatter);
  expect(formatter.toString()).toBe('#{123}');
  expect(formatter.indent(2).toString()).toBe('    #{123}');
});

test('new line', () => {
  const code = `#{
    123
}`;
  const ctx = parse(code).expr();
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
  const ctx = parse(code).expr();
  const config = new FormatterConfig();
  config.printWidth = 3;
  const formatter = getExpressionFormatter(ctx, config) as PreprocessorExpressionFormatter;

  expect(formatter).toBeInstanceOf(PreprocessorExpressionFormatter);
  expect(formatter.toString()).toBe(`#{
    123
         
    
      }`);
});
