import {$AnalyzerType, $Semantic, DeclarationSemantic, Semantic} from '#analyzer';
import {Boolean2, Brand, Nothing, Text} from '#core';

export type StringSemantic = Semantic &
  Brand<'Analyzer.StringSemantic'> & {
    value: Text;
    declaration?: DeclarationSemantic | Nothing;
  };

export const $StringSemantic = () => $AnalyzerType<StringSemantic>('StringSemantic', $Semantic());

export function newStringSemantic(
  isType: Boolean2,
  value: Text,
  declaration?: DeclarationSemantic | Nothing,
): StringSemantic {
  return {
    $: $StringSemantic(),
    isType,
    declaration,
    value,

    // is(other: Semantic): Boolean2 {
    //   if (is(other, $SetTypeSemantic())) {
    //     return isInSet(this, other);
    //   }

    //   if (this.equals(other)) {
    //     return true;
    //   }

    //   if (is(other, $UsageSemantic()) && other.declaration) {
    //     // return this.declaration.equals(other.declaration) || (this.declaration.type?.is(other) ?? false);
    //   }

    //   return false;
    // },

    // equals(other: Semantic): Boolean2 {
    //   if (is(other, $StringSemantic())) {
    //     return this.value === other.value;
    //   }

    //   return false;
    // },
  };
}
