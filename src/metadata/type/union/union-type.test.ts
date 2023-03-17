import { parse } from '~/analysis/syntax/syntax-analysis';
import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { fillTypeMetadata } from '~/metadata/type/type-metadata-helper';
import { UnionType } from '~/metadata/type/union/union-type';

test('union', () => {
  const code = 'Integer | Float';
  const tree = parse(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as UnionType;

  expect(metadata).toBeInstanceOf(UnionType);
  expect(metadata.scope().declarations.length).toBe(2);
});
