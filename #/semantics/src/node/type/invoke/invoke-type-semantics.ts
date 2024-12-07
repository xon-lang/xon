import {Boolean2} from '#common';
import {
  $TypeSemantics,
  AttributeValueDeclarationSemantics,
  DeclarationScope,
  TypeSemantics,
  isInSet,
  newDeclarationScope,
  semanticsPackageType,
} from '#semantics';
import {isSetOperatorTypeSemantic} from '#typing';

export type InvokeTypeSemantics = TypeSemantics & {
  instance: TypeSemantics;
  // todo use a separate semantic than array
  args: TypeSemantics[];
};

export const $InvokeTypeSemantics = semanticsPackageType<InvokeTypeSemantics>(
  'InvokeTypeSemantics',
  $TypeSemantics,
);

export function newInvokeTypeSemantics(instance: TypeSemantics, args: TypeSemantics[]): InvokeTypeSemantics {
  return {
    $: $InvokeTypeSemantics,
    instance,
    args,

    is(other: TypeSemantics): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      return false;
    },

    equals(other: TypeSemantics): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantics> {
      return newDeclarationScope();
      // throw new Error('Not implemented');
    },
  };
}
