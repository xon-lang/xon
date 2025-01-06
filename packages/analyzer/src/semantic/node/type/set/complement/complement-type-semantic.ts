import {
  $SetTypeSemantic,
  analyzerPackageType,
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  SetTypeSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2} from '#common';

export type ComplementTypeSemantic = SetTypeSemantic & {
  left: TypeSemantic;
  right: TypeSemantic;
};

export const $ComplementTypeSemantic = analyzerPackageType<ComplementTypeSemantic>(
  'ComplementTypeSemantic',
  $SetTypeSemantic,
);

export function complementTypeSemantic(
  nodeLink: Node,
  left: TypeSemantic,
  right: TypeSemantic,
): ComplementTypeSemantic {
  const semantic: ComplementTypeSemantic = {
    $: $ComplementTypeSemantic,
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
