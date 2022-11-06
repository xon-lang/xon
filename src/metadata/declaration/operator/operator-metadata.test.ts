import { getSourceMetadata, SourceMetadata, TestDeclarationScope } from '~/metadata';
import { parseSource } from '~/util';

test('single parameter', () => {
  const code = 'operator +(a: Number, b: Number) : Number';
  const tree = parseSource(code);
  tree.scope = new TestDeclarationScope();
  tree.metadata = getSourceMetadata(tree);

  expect(tree.metadata).toBeInstanceOf(SourceMetadata);
  expect(tree.scope.declarations.length).toBe(1);
  expect(tree.scope.filter('+')[0].name).toBe('+');
});
