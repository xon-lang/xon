import {Boolean2} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  SetTypeSemantic,
  TypeSemantics,
} from '#semantics';
import {$} from '#typing';

export type UnionTypeSemantic = SetTypeSemantic & {
  $: $.UnionTypeSemantic;
  left: TypeSemantics;
  right: TypeSemantics;
};

export function unionTypeSemantic(
  nodeLink: Node,
  left: TypeSemantics,
  right: TypeSemantics,
): UnionTypeSemantic {
  const semantic: UnionTypeSemantic = {
    $: $.UnionTypeSemantic,
    nodeLink,
    left,
    right,

    is(other: TypeSemantics): Boolean2 {
      return this.eq(other);
    },

    eq(_other: TypeSemantics): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return this.left.attributes().union(this.right.attributes());
    },
  };

  return semantic;
}
