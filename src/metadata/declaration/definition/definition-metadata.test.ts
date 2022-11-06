import { DefinitionMetadata, getSourceMetadata, SourceMetadata, TestDeclarationScope } from '~/metadata';
import { DeclarationStatementTree } from '~/tree';
import { parseSource } from '~/util';

test('definition', () => {
  const code = 'model A';
  const tree = parseSource(code);
  const { declaration } = tree.statements[0] as DeclarationStatementTree;
  tree.scope.parent = new TestDeclarationScope();
  tree.metadata = getSourceMetadata(tree);

  expect(tree.metadata).toBeInstanceOf(SourceMetadata);
  expect(declaration.metadata).toBeInstanceOf(DefinitionMetadata);
  expect(declaration.metadata.name).toBe('A');
});
