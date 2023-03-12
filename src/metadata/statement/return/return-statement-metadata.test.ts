import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { SourceMetadata } from '~/metadata/source/source-metadata';
import { getSourceMetadata } from '~/metadata/source/source-metadata-helper';
import { parseSource } from '~/parser/parser';

test('return', () => {
  const code = 'return 123';
  const tree = parseSource(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree);

  expect(metadata).toBeInstanceOf(SourceMetadata);
});
