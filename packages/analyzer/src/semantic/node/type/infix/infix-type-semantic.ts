import {$AnalyzerType, $TypeSemantic, TypeSemantic} from '#analyzer';
import {Boolean2} from '#common';

export type InfixTypeSemantic = TypeSemantic & {
  left: TypeSemantic;
  right: TypeSemantic;
};

export const $InfixTypeSemantic = () =>
  $AnalyzerType<InfixTypeSemantic>('InfixTypeSemantic', $TypeSemantic());

export function InfixTypeSemantic(left: TypeSemantic, right: TypeSemantic): InfixTypeSemantic {
  const semantic: InfixTypeSemantic = {
    $: $InfixTypeSemantic(),
    left,
    right,

    is(other: TypeSemantic): Boolean2 {
      return this.equals(other);
    },

    equals(_other: TypeSemantic): Boolean2 {
      return false;
    },
  };

  return semantic;
}
