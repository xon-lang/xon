import {Boolean2} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  SetTypeSemantic,
  TypeSemantic,
} from '#core';
import {$} from '#typing';

export interface NotTypeSemantic extends SetTypeSemantic {
  $: $.NotTypeSemantic;
  value: TypeSemantic;
}

export function notTypeSemantic(nodeLink: Node, value: TypeSemantic): NotTypeSemantic {
  const semantic: NotTypeSemantic = {
    $: $.NotTypeSemantic,
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
