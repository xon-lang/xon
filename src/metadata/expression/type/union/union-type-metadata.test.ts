import { fillTypeMetadata, TestDeclarationScope, UnionTypeMetadata } from '~/metadata';
import { parseExpression } from '~/util';

test('union', () => {
  const code = 'Integer | Float';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as UnionTypeMetadata;

  expect(metadata).toBeInstanceOf(UnionTypeMetadata);
  expect(metadata.attributesScope().declarations.length).toBe(2);
});
