import {$AnalyzerType, $TypeSemantic, AttributeTypeDeclarationSemantic, TypeSemantic} from '#analyzer';
import {Boolean2, Nothing, nothing, Text} from '#common';
import {Brand} from '#typing';

export type UnknownTypeSemantic = TypeSemantic & Brand<'Analyzer.MemberNode'>;

export const $UnknownTypeSemantic = () =>
  $AnalyzerType<UnknownTypeSemantic>('UnknownTypeSemantic', $TypeSemantic());

export function newUnknownTypeSemantic(): UnknownTypeSemantic {
  return {
    $: $UnknownTypeSemantic(),

    getAttribute(name: Text): AttributeTypeDeclarationSemantic | Nothing {
      return nothing;
    },

    is(other: TypeSemantic): Boolean2 {
      return false;
    },

    equals(other: TypeSemantic): Boolean2 {
      return false;
    },
  };
}
