import { fillTypeMetadata, IntersectionTypeMetadata, TestDeclarationScope } from '~/metadata';
import { parseExpression } from '~/util';

test('intersect', () => {
  const code = 'Integer & Float';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as IntersectionTypeMetadata;

  expect(metadata).toBeInstanceOf(IntersectionTypeMetadata);
  expect(metadata.attributesScope().declarations.length).toBe(10);
});
