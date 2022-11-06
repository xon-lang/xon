import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { IntersectionTypeMetadata } from '~/metadata/expression/type/intersection/intersection-type-metadata';
import { fillTypeMetadata } from '~/metadata/expression/type/type-metadata-helper';
import { parseExpression } from '~/util/parse';

test('intersect', () => {
  const code = 'Integer & Float';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as IntersectionTypeMetadata;

  expect(metadata).toBeInstanceOf(IntersectionTypeMetadata);
  expect(metadata.attributesScope().declarations.length).toBe(10);
});
