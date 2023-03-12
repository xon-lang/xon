import { Source } from '~/parser/source/source';

test('1', () => {
  const source = Source.fromPath('src/parser/source/test-files/1.xon');

  expect(source.text).toBe('abc = 123\n');
});
