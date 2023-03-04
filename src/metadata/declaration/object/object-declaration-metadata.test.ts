import { DefinitionMetadata } from '~/metadata/declaration/definition/definition-metadata';
import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { SourceMetadata } from '~/metadata/source/source-metadata';
import { getSourceMetadata } from '~/metadata/source/source-metadata-helper';
import { DeclarationStatementTree } from '~/tree/statement/declaration/declaration-statement-tree';
import { parseSource } from '~/util/parse';

test('definition', () => {
  const code = 'model A';
  const tree = parseSource(code);
  const { declaration } = tree.expressions[0] as DeclarationStatementTree;
  tree.scope.parent = new TestDeclarationScope();
  tree.metadata = getSourceMetadata(tree);

  expect(tree.metadata).toBeInstanceOf(SourceMetadata);
  expect(declaration.metadata).toBeInstanceOf(DefinitionMetadata);
  expect(declaration.metadata.name).toBe('A');
});
