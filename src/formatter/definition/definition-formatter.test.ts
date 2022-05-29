import { parse } from '../../util/parse';
import { defaultFormatterConfig } from '../formatter-config';
import { DefinitionFormatter } from './definition-formatter';
import { getDefinitionFormatter } from './definition-formatter-helper';

test('has type', () => {
  const code = 'object Integer (a,b,c) Number\n  abc';
  const ctx = parse(code).definition();
  const formatter = getDefinitionFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(DefinitionFormatter);
  expect(formatter.toString()).toBe('object Integer(a, b, c) Number\n  abc');
});

test('has no type and no attributes', () => {
  const code = 'object Integer (a,b,c)';
  const ctx = parse(code).definition();
  const formatter = getDefinitionFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(DefinitionFormatter);
  expect(formatter.toString()).toBe('object Integer(a, b, c)');
});
