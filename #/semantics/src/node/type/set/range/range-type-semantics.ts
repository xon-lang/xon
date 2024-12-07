import {Boolean2, Nothing} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  NominalTypeDeclarationSemantic,
  SetTypeSemantic,
  TypeSemantics,
  isInSet,
} from '#semantics';
import {$, is, isSetOperatorTypeSemantic} from '#typing';

export type RangeTypeSemantic = SetTypeSemantic & {
  $: $.RangeTypeSemantic;
  declaration: NominalTypeDeclarationSemantic;
  from: TypeSemantics;
  to: TypeSemantics;
  step: TypeSemantics | Nothing;
};

export function rangeTypeSemantic(
  nodeLink: Node,
  declaration: NominalTypeDeclarationSemantic,
  from: RangeTypeSemantic['from'],
  to: RangeTypeSemantic['to'],
  step: RangeTypeSemantic['step'],
): RangeTypeSemantic {
  const semantic: RangeTypeSemantic = {
    $: $.RangeTypeSemantic,
    nodeLink,
    declaration,
    from,
    to,
    step,

    is(other: TypeSemantics): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (is(other, $.RangeTypeSemantic)) {
        if (
          is(this.from, $.IntegerTypeSemantic) &&
          is(other.from, $.IntegerTypeSemantic) &&
          is(this.to, $.IntegerTypeSemantic) &&
          is(other.to, $.IntegerTypeSemantic)
        )
          return this.from.value >= other.from.value && this.to.value <= other.to.value;
      }

      return false;
    },

    eq(other: TypeSemantics): Boolean2 {
      if (is(other, $.RangeTypeSemantic)) {
        return this.from === other.from && this.to === other.to && this.step === other.step;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      throw new Error('Not implemented');
    },
  };

  return semantic;
}
