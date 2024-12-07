import {Boolean2} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  SetTypeSemantic,
  TypeSemantics,
} from '#semantics';
import {$} from '#typing';

export type ComplementTypeSemantic = SetTypeSemantic & {
  $: $.ComplementTypeSemantic;
  left: TypeSemantics;
  right: TypeSemantics;
};

export function complementTypeSemantic(
  nodeLink: Node,
  left: TypeSemantics,
  right: TypeSemantics,
): ComplementTypeSemantic {
  const semantic: ComplementTypeSemantic = {
    $: $.ComplementTypeSemantic,
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
      return this.left.attributes().complement(this.right.attributes());
    },
  };

  return semantic;
}
