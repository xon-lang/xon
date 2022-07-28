import { parseSource } from '../../../util/parse';
import { SourceMetadata } from '../../source/source-metadata';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { getShadowSourceMetadata } from '../declaration-metadata-helper';
import { TestDeclarationScope } from '../scope/test-declaration-scope';
import { DefinitionMetadata } from './definition-metadata';

test('definition', () => {
  const code = 'model A';
  const tree = parseSource(code);
  tree.scope.parent = new TestDeclarationScope();
  tree.metadata = getSourceMetadata(tree);
  const declarations = getShadowSourceMetadata(tree);

  expect(tree.metadata).toBeInstanceOf(SourceMetadata);
  expect(declarations.length).toBe(1);
  expect(declarations[0]).toBeInstanceOf(DefinitionMetadata);
  expect(declarations[0].name).toBe('A');
});
