import {Boolean2} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  SetTypeSemantic,
  TypeSemantic,
} from '#core';
import {$} from '#typing';

export interface IntersectionTypeSemantic extends SetTypeSemantic {
  $: $.IntersectionTypeSemantic;
  left: TypeSemantic;
  right: TypeSemantic;
}

export function intersectionTypeSemantic(
  nodeLink: Node,
  left: TypeSemantic,
  right: TypeSemantic,
): IntersectionTypeSemantic {
  const semantic: IntersectionTypeSemantic = {
    $: $.IntersectionTypeSemantic,
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
      return this.left.attributes().intersection(this.right.attributes());
    },
  };

  return semantic;
}
