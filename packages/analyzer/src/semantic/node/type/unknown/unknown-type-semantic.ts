import {$AnalyzerType, $TypeSemantic, TypeSemantic} from '#analyzer';
import {Brand} from '#typing';

export type UnknownTypeSemantic = TypeSemantic & Brand<'Analyzer.UnknownTypeSemantic'>;

export const $UnknownTypeSemantic = () =>
  $AnalyzerType<UnknownTypeSemantic>('UnknownTypeSemantic', $TypeSemantic());

export function newUnknownTypeSemantic(): UnknownTypeSemantic {
  return {
    $: $UnknownTypeSemantic(),

    equals(other) {
      return false;
    },

    is(other) {
      return false;
    },
  };
}
