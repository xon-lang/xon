import { Source } from '~/source/source';
import { SourcePosition } from '~/source/source-position';

test('1', () => {
  const text = '\n abc \n';
  const source = Source.fromText(text, null);
  const sourcePosition = SourcePosition.fromIndex(source, 2);

  expect(sourcePosition.index).toBe(2);
  expect(sourcePosition.line).toBe(1);
  expect(sourcePosition.column).toBe(1);
});
