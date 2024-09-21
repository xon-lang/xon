import {Boolean2} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  SetTypeSemantic,
  TypeSemantic,
} from '#core';
import {$} from '#typing';

export type UnionTypeSemantic = SetTypeSemantic & {
  $: $.UnionTypeSemantic;
  left: TypeSemantic;
  right: TypeSemantic;
};

export function unionTypeSemantic(
  nodeLink: Node,
  left: TypeSemantic,
  right: TypeSemantic,
): UnionTypeSemantic {
  const semantic: UnionTypeSemantic = {
    $: $.UnionTypeSemantic,
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
