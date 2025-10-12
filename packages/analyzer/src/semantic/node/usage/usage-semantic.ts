import {$AnalyzerType, $Semantic, DeclarationSemantic, Semantic, TypeDeclarationSemantic} from '#analyzer';
import {Boolean2, Nothing, Text, TextReference} from '#common';
import {Brand} from '#typing';

export type UsageSemantic = Semantic &
  Brand<'Analyzer.UsageSemantic'> & {
    reference: TextReference;
    name: Text;
    type?: Semantic | Nothing;
    declaration?: DeclarationSemantic | Nothing;
  };

export const $UsageSemantic = () => $AnalyzerType<UsageSemantic>('UsageSemantic', $Semantic());

export function newUsageSemantic(
  isType: Boolean2,
  reference: TextReference,
  name: Text,
  declaration?: TypeDeclarationSemantic | Nothing,
): UsageSemantic {
  const usage: UsageSemantic = {
    $: $UsageSemantic(),
    isType,
    name,
    declaration,
    reference,
    scope: declaration?.scope,

    // equals(other: Semantic): Boolean2 {
    //   return this.type?.equals(other) ?? false;
    // },

    // is(other: Semantic): Boolean2 {
    //   return this.type?.is(other) ?? false;
    // },
  };

  if (declaration) {
    declaration.usages.addLastItem(usage);
  }

  return usage;
}
