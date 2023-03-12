import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { ArrayTypeMetadata } from '~/metadata/type/array/array-type-metadata';
import { LiteralTypeMetadata } from '~/metadata/type/literal/literal-type-metadata';
import { fillTypeMetadata } from '~/metadata/type/type-metadata-helper';
import { UnionType } from '~/metadata/type/union/union-type';
import { parseNode } from '~/parser/parser';

test('no items', () => {
  const code = 'Integer[]';
  const tree = parseNode(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as ArrayTypeMetadata;

  expect(metadata).toBeInstanceOf(ArrayTypeMetadata);
  expect(metadata.commonType.equals(tree.scope.core.integer.type)).toBe(true);
  expect(metadata.items.length).toBe(0);
});

test('has items', () => {
  const code = "[1, 'hi']";
  const tree = parseNode(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as ArrayTypeMetadata;

  expect(metadata).toBeInstanceOf(ArrayTypeMetadata);
  expect(
    metadata.commonType.equals(
      UnionType.fromTypes([
        new LiteralTypeMetadata(1, tree.scope.core.integer),
        new LiteralTypeMetadata('hi', tree.scope.core.string),
      ]),
    ),
  ).toBe(true);
  expect(metadata.items.length).toBe(2);
  expect(metadata.items[0].equals(new LiteralTypeMetadata(1, tree.scope.core.integer))).toBe(true);
  expect(metadata.items[1].equals(new LiteralTypeMetadata('hi', tree.scope.core.string))).toBe(true);
});
