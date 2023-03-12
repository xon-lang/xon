import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { fillTypeMetadata } from '~/metadata/type/type-metadata-helper';
import { UnionType } from '~/metadata/type/union/union-type';
import { parseExpression } from '~/parser/parser';

test('union', () => {
  const code = 'Integer | Float';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as UnionType;

  expect(metadata).toBeInstanceOf(UnionType);
  expect(metadata.scope().declarations.length).toBe(2);
});
