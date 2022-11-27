import { Source } from '~/util/source/source';
import { SourcePosition } from '~/util/source/source-position';
import { SourceSpan } from '~/util/source/source-span';

test('1', () => {
  const text = '\n abc \n';
  const source = Source.fromText(text, null);
  const start = SourcePosition.fromIndex(source, 2);
  const stop = SourcePosition.fromIndex(source, 4);
  const sourceSpan = new SourceSpan(source, start, stop);

  expect(sourceSpan.getText()).toBe('abc');
});
