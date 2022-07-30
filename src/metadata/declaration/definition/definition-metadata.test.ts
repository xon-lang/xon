import { DeclarationStatementTree } from '../../../tree/statement/declaration/declaration-statement-tree';
import { parseSource } from '../../../util/parse';
import { SourceMetadata } from '../../source/source-metadata';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { TestDeclarationScope } from '../scope/test-declaration-scope';
import { DefinitionMetadata } from './definition-metadata';

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
