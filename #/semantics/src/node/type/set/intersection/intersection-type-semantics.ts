import {Boolean2} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  SetTypeSemantic,
  TypeSemantics,
} from '#semantics';
import {$} from '#typing';

export type IntersectionTypeSemantic = SetTypeSemantic & {
  $: $.IntersectionTypeSemantic;
  left: TypeSemantics;
  right: TypeSemantics;
};

export function intersectionTypeSemantic(
  nodeLink: Node,
  left: TypeSemantics,
  right: TypeSemantics,
): IntersectionTypeSemantic {
  const semantic: IntersectionTypeSemantic = {
    $: $.IntersectionTypeSemantic,
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
      return this.left.attributes().intersection(this.right.attributes());
    },
  };

  return semantic;
}
