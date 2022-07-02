import { parseSource } from '../../../util/parse';
import { SourceMetadata } from '../../source/source-metadata';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { TestDeclarationScope } from '../scope/test-declaration-scope';
import { DefinitionMetadata } from './definition-metadata';

test('definition', () => {
  const code = 'model A';
  const tree = parseSource(code);
  const scope = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(SourceMetadata);
  expect(scope.declarations.length).toBe(1);
  expect(scope.declarations[0]).toBeInstanceOf(DefinitionMetadata);
  expect(scope.declarations[0].name).toBe('A');
});
