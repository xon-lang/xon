import {Boolean2} from '#common';
import {
  $SetTypeSemantics,
  AttributeValueDeclarationSemantics,
  DeclarationScope,
  semanticsPackageType,
  SetTypeSemantics,
  TypeSemantics,
} from '#semantics';

export type ComplementTypeSemantics = SetTypeSemantics & {
  left: TypeSemantics;
  right: TypeSemantics;
};

export const $ComplementTypeSemantics = semanticsPackageType<ComplementTypeSemantics>(
  'ComplementTypeSemantics',
  $SetTypeSemantics,
);

export function newComplementTypeSemantics(
  left: TypeSemantics,
  right: TypeSemantics,
): ComplementTypeSemantics {
  const semantic: ComplementTypeSemantics = {
    $: $ComplementTypeSemantics,
    left,
    right,

    is(other: TypeSemantics): Boolean2 {
      return this.equals(other);
    },

    equals(_other: TypeSemantics): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantics> {
      return this.left.attributes().complement(this.right.attributes());
    },
  };

  return semantic;
}
