import {Boolean2, is_v2, Nothing} from '#common';
import {
  $SetTypeSemantics,
  AttributeValueDeclarationSemantics,
  DeclarationScope,
  isInSet,
  NominalTypeDeclarationSemantics,
  semanticsPackageType,
  SetTypeSemantics,
  TypeSemantics,
} from '#semantics';

export type RangeTypeSemantics = SetTypeSemantics & {
  declaration: NominalTypeDeclarationSemantics;
  from: TypeSemantics;
  to: TypeSemantics;
  step: TypeSemantics | Nothing;
};

export const $RangeTypeSemantics = semanticsPackageType<RangeTypeSemantics>(
  'RangeTypeSemantics',
  $SetTypeSemantics,
);

export function newRangeTypeSemantics(
  declaration: NominalTypeDeclarationSemantics,
  from: RangeTypeSemantics['from'],
  to: RangeTypeSemantics['to'],
  step: RangeTypeSemantics['step'],
): RangeTypeSemantics {
  const semantic: RangeTypeSemantics = {
    $: $RangeTypeSemantics,
    declaration,
    from,
    to,
    step,

    is(other: TypeSemantics): Boolean2 {
      if (is_v2(other, $SetTypeSemantics)) {
        return isInSet(this, other);
      }

      if (is_v2(other, $RangeTypeSemantics)) {
        if (
          is_v2(this.from, $IntegerTypeSemantics) &&
          is_v2(other.from, $IntegerTypeSemantics) &&
          is_v2(this.to, $IntegerTypeSemantics) &&
          is_v2(other.to, $IntegerTypeSemantics)
        )
          return this.from.value >= other.from.value && this.to.value <= other.to.value;
      }

      return false;
    },

    equals(other: TypeSemantics): Boolean2 {
      if (is_v2(other, $.RangeTypeSemantic)) {
        return this.from === other.from && this.to === other.to && this.step === other.step;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantics> {
      throw new Error('Not implemented');
    },
  };

  return semantic;
}
