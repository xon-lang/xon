import { parseSource } from '../../../util/parse';
import { SourceMetadata } from '../../source/source-metadata';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { fillShadowSourceMetadata } from '../declaration-metadata-helper';
import { TestDeclarationScope } from '../scope/test-declaration-scope';
import { DefinitionMetadata } from './definition-metadata';

test('definition', () => {
  const code = 'model A';
  const tree = parseSource(code);
  const scope = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree, scope);
  const declarations = fillShadowSourceMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(SourceMetadata);
  expect(declarations.length).toBe(1);
  expect(declarations[0]).toBeInstanceOf(DefinitionMetadata);
  expect(declarations[0].name).toBe('A');
});
