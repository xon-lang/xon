import {Boolean2} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  SetTypeSemantic,
  TypeSemantic,
} from '#semantics';
import {$} from '#typing';

export type ComplementTypeSemantic = SetTypeSemantic & {
  $: $.ComplementTypeSemantic;
  left: TypeSemantic;
  right: TypeSemantic;
};

export function complementTypeSemantic(
  nodeLink: Node,
  left: TypeSemantic,
  right: TypeSemantic,
): ComplementTypeSemantic {
  const semantic: ComplementTypeSemantic = {
    $: $.ComplementTypeSemantic,
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
      return this.left.attributes().complement(this.right.attributes());
    },
  };

  return semantic;
}
