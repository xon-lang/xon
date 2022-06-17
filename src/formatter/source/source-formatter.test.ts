import fs from 'fs';
import { parse } from '../../util/parse';
import { defaultFormatterConfig } from '../formatter-config';
import { SourceFormatter } from './source-formatter';
import { getSourceFormatter } from './source-formatter-helper';

test('has type', () => {
  const code = 'object Integer (a,b,c)is Number\n  abc\n\n\n\ndef\n';
  const ctx = parse(code).source();
  const formatter = getSourceFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(SourceFormatter);
  expect(formatter.toString()).toBe('object Integer(a, b, c) is Number\n  abc\n\ndef\n');
});

test('1.xon', () => {
  const code = fs.readFileSync('src/formatter/source/test-files/1.source.xon').toString();
  const ctx = parse(code).source();
  const formatter = getSourceFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(SourceFormatter);
  fs.writeFileSync('src/formatter/source/test-files/1.actual.xon', formatter.toString());
  const expectString = fs.readFileSync('src/formatter/source/test-files/1.expect.xon').toString();
  expect(formatter.toString()).toBe(expectString);
});
