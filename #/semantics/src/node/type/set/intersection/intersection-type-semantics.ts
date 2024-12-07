import {Boolean2} from '#common';
import {
  $SetTypeSemantics,
  AttributeValueDeclarationSemantics,
  DeclarationScope,
  semanticsPackageType,
  SetTypeSemantics,
  TypeSemantics,
} from '#semantics';

export type IntersectionTypeSemantics = SetTypeSemantics & {
  left: TypeSemantics;
  right: TypeSemantics;
};

export const $IntersectionTypeSemantics = semanticsPackageType<IntersectionTypeSemantics>(
  'IntersectionTypeSemantics',
  $SetTypeSemantics,
);

export function newIntersectionTypeSemantics(
  left: TypeSemantics,
  right: TypeSemantics,
): IntersectionTypeSemantics {
  const semantic: IntersectionTypeSemantics = {
    $: $IntersectionTypeSemantics,
    left,
    right,

    is(other: TypeSemantics): Boolean2 {
      return this.equals(other);
    },

    equals(_other: TypeSemantics): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantics> {
      return this.left.attributes().intersection(this.right.attributes());
    },
  };

  return semantic;
}
