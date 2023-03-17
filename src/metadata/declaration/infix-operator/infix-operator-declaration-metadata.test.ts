import { parseSource } from '~/analysis/syntax/syntax-analysis';
import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { SourceMetadata } from '~/metadata/source/source-metadata';
import { getSourceMetadata } from '~/metadata/source/source-metadata-helper';

test('single parameter', () => {
  const code = 'operator +(a: Number, b: Number) : Number';
  const tree = parseSource(code);
  tree.scope = new TestDeclarationScope();
  tree.metadata = getSourceMetadata(tree);

  expect(tree.metadata).toBeInstanceOf(SourceMetadata);
  expect(tree.scope.declarations.length).toBe(1);
  expect(tree.scope.filter('+')[0].name).toBe('+');
});
