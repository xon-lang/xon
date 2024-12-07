import {Boolean2} from '#common';
import {
  $SetTypeSemantics,
  AttributeValueDeclarationSemantics,
  DeclarationScope,
  semanticsPackageType,
  SetTypeSemantics,
  TypeSemantics,
} from '#semantics';

export type NotTypeSemantics = SetTypeSemantics & {
  value: TypeSemantics;
};

export const $NotTypeSemantics = semanticsPackageType<NotTypeSemantics>(
  'NotTypeSemantics',
  $SetTypeSemantics,
);

export function newNotTypeSemantics(value: TypeSemantics): NotTypeSemantics {
  const semantic: NotTypeSemantics = {
    $: $NotTypeSemantics,
    value,

    is(other: TypeSemantics): Boolean2 {
      return this.equals(other);
    },

    equals(_other: TypeSemantics): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantics> {
      // todo investigate
      throw new Error('Not implemented');
    },
  };

  return semantic;
}
