import {$AnalyzerType, $TypeSemantic, Semantic} from '#analyzer';
import {Boolean2} from '#common';

export type InfixTypeSemantic = Semantic & {
  left: Semantic;
  right: Semantic;
};

export const $InfixTypeSemantic = () =>
  $AnalyzerType<InfixTypeSemantic>('InfixTypeSemantic', $TypeSemantic());

export function InfixTypeSemantic(left: Semantic, right: Semantic): InfixTypeSemantic {
  const semantic: InfixTypeSemantic = {
    $: $InfixTypeSemantic(),
    left,
    right,

    is(other: Semantic): Boolean2 {
      return this.equals(other);
    },

    equals(_other: Semantic): Boolean2 {
      return false;
    },
  };

  return semantic;
}
