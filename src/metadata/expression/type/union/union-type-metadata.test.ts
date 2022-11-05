import { TestDeclarationScope } from '@/metadata/declaration/scope/test-declaration-scope';
import { fillTypeMetadata } from '@/metadata/expression/type/type-metadata-helper';
import { UnionTypeMetadata } from '@/metadata/expression/type/union/union-type-metadata';
import { parseExpression } from '@/util/parse';

test('union', () => {
  const code = 'Integer | Float';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as UnionTypeMetadata;

  expect(metadata).toBeInstanceOf(UnionTypeMetadata);
  expect(metadata.attributesScope().declarations.length).toBe(2);
});
