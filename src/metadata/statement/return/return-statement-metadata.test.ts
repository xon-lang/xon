import { getSourceMetadata, SourceMetadata, TestDeclarationScope } from '~/metadata';
import { parseSource } from '~/util';

test('return', () => {
  const code = 'return 123';
  const tree = parseSource(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree);

  expect(metadata).toBeInstanceOf(SourceMetadata);
});
