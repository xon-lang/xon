import {
  $AnalyzerType,
  $SetTypeSemantic,
  $TypeSemantic,
  isInSet,
  SemanticScope,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, Nothing} from '#common';
import {Brand, is} from '#typing';

export type ObjectTypeSemantic = TypeSemantic & Brand<'Analyzer.ObjectTypeSemantic'>;

export const $ObjectTypeSemantic = () =>
  $AnalyzerType<ObjectTypeSemantic>('ObjectTypeSemantic', $TypeSemantic());

export function newObjectTypeSemantic(scope?: SemanticScope | Nothing): ObjectTypeSemantic {
  return {
    $: $ObjectTypeSemantic(),
    scope,

    is(other: TypeSemantic): Boolean2 {
      if (is(other, $SetTypeSemantic())) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      return false;
    },

    equals(_other: TypeSemantic): Boolean2 {
      return false;
    },
  };
}
