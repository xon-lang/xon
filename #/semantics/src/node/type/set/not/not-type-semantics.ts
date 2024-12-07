import {Boolean2} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  SetTypeSemantic,
  TypeSemantics,
} from '#semantics';
import {$} from '#typing';

export type NotTypeSemantic = SetTypeSemantic & {
  $: $.NotTypeSemantic;
  value: TypeSemantics;
};

export function notTypeSemantic(nodeLink: Node, value: TypeSemantics): NotTypeSemantic {
  const semantic: NotTypeSemantic = {
    $: $.NotTypeSemantic,
    nodeLink,
    value,

    is(other: TypeSemantics): Boolean2 {
      return this.eq(other);
    },

    eq(_other: TypeSemantics): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      // todo investigate
      throw new Error('Not implemented');
    },
  };

  return semantic;
}
