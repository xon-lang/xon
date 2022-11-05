import { defaultFormatterConfig } from '@/formatter/formatter-config';
import { SourceFormatter } from '@/formatter/source/source-formatter';
import { getSourceFormatter } from '@/formatter/source/source-formatter-helper';
import { parse } from '@/util/parse';
import fs from 'fs';

test('has type', () => {
  const code = 'object Integer (a,b,c)  :   Number\n  abc\n\n\n\ndef\n';
  const ctx = parse(code).source();
  const formatter = getSourceFormatter(ctx, defaultFormatterConfig);

  expect(formatter).toBeInstanceOf(SourceFormatter);
  expect(formatter.toString()).toBe('object Integer(a, b, c): Number\n  abc\n\ndef\n');
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
