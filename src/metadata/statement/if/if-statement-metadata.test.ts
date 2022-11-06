import { getSourceMetadata, SourceMetadata, TestDeclarationScope } from '~/metadata';
import { parseSource } from '~/util';

test('if', () => {
  const code = 'if true\n  123';
  const tree = parseSource(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree);

  expect(metadata).toBeInstanceOf(SourceMetadata);
});
