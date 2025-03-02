import {
  $AnalyzerType,
  $SetTypeSemantic,
  $TypeSemantic,
  AttributeList,
  isInSet,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, Nothing} from '#common';
import {Brand, is} from '#typing';

export type ObjectTypeSemantic = TypeSemantic & Brand<'Analyzer.ObjectTypeSemantic'>;

export const $ObjectTypeSemantic = () =>
  $AnalyzerType<ObjectTypeSemantic>('ObjectTypeSemantic', $TypeSemantic());

export function newObjectTypeSemantic(attributes?: AttributeList | Nothing): ObjectTypeSemantic {
  return {
    $: $ObjectTypeSemantic(),
    attributes,

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
