import {
  $SetTypeSemantic,
  AttributeValueDeclarationSemantic,
  corePackageType,
  DeclarationScope,
  Node,
  SetTypeSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2} from '#common';

export type UnionTypeSemantic = SetTypeSemantic & {
  left: TypeSemantic;
  right: TypeSemantic;
};

export const $UnionTypeSemantic = corePackageType<UnionTypeSemantic>('UnionTypeSemantic', $SetTypeSemantic);

export function unionTypeSemantic(
  nodeLink: Node,
  left: TypeSemantic,
  right: TypeSemantic,
): UnionTypeSemantic {
  const semantic: UnionTypeSemantic = {
    $: $UnionTypeSemantic,
    nodeLink,
    left,
    right,

    is(other: TypeSemantic): Boolean2 {
      return this.eq(other);
    },

    eq(_other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return this.left.attributes().union(this.right.attributes());
    },
  };

  return semantic;
}
