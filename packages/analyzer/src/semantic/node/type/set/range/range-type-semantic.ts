import {
  $AnalyzerType,
  $IntegerTypeSemantic,
  $SetTypeSemantic,
  isInSet,
  Node,
  NominalTypeDeclarationSemantic,
  SemanticScope,
  SetTypeSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, Nothing} from '#common';
import {is} from '#typing';

export type RangeTypeSemantic = SetTypeSemantic & {
  declaration: NominalTypeDeclarationSemantic;
  from: TypeSemantic;
  to: TypeSemantic;
  step: TypeSemantic | Nothing;
};

export const $RangeTypeSemantic = () =>
  $AnalyzerType<RangeTypeSemantic>('RangeTypeSemantic', $SetTypeSemantic());

export function rangeTypeSemantic(
  nodeLink: Node,
  declaration: NominalTypeDeclarationSemantic,
  from: RangeTypeSemantic['from'],
  to: RangeTypeSemantic['to'],
  step: RangeTypeSemantic['step'],
): RangeTypeSemantic {
  const semantic: RangeTypeSemantic = {
    $: $RangeTypeSemantic(),
    nodeLink,
    declaration,
    from,
    to,
    step,

    is(other: TypeSemantic): Boolean2 {
      if (is(other, $SetTypeSemantic())) {
        return isInSet(this, other);
      }

      if (is(other, $RangeTypeSemantic())) {
        if (
          is(this.from, $IntegerTypeSemantic()) &&
          is(other.from, $IntegerTypeSemantic()) &&
          is(this.to, $IntegerTypeSemantic()) &&
          is(other.to, $IntegerTypeSemantic())
        )
          return this.from.value >= other.from.value && this.to.value <= other.to.value;
      }

      return false;
    },

    equals(other: TypeSemantic): Boolean2 {
      if (is(other, $RangeTypeSemantic())) {
        return this.from === other.from && this.to === other.to && this.step === other.step;
      }

      return false;
    },

    scope(): SemanticScope {
      throw new Error('Not implemented');
    },
  };

  return semantic;
}
