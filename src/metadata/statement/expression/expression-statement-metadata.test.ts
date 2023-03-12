import { parseSource } from '~/compiler/parser/parser';
import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { SourceMetadata } from '~/metadata/source/source-metadata';
import { getSourceMetadata } from '~/metadata/source/source-metadata-helper';

test('literal', () => {
  const code = '123';
  const tree = parseSource(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree);

  expect(metadata).toBeInstanceOf(SourceMetadata);
});
