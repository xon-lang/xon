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

export type NotTypeSemantic = SetTypeSemantic & {
  value: TypeSemantic;
};

export const $NotTypeSemantic = analyzerPackageType<NotTypeSemantic>('NotTypeSemantic', $SetTypeSemantic);

export function notTypeSemantic(nodeLink: Node, value: TypeSemantic): NotTypeSemantic {
  const semantic: NotTypeSemantic = {
    $: $NotTypeSemantic,
    nodeLink,
    value,

    is(other: TypeSemantic): Boolean2 {
      return this.eq(other);
    },

    eq(_other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      // todo investigate
      throw new Error('Not implemented');
    },
  };

  return semantic;
}
