import {$AnalyzerType, $Semantic, DeclarationSemantic, Semantic, TypeSemantic} from '#analyzer';
import {Nothing, Text, TextReference} from '#common';

export type UsageSemantic = Semantic & {
  name: Text;
  type?: TypeSemantic | Nothing;
  declaration?: DeclarationSemantic | Nothing;
  reference?: TextReference | Nothing;
};

export const $UsageSemantic = () => $AnalyzerType<UsageSemantic>('UsageSemantic', $Semantic());

export function newUsageSemantic(
  name: Text,
  type?: TypeSemantic | Nothing,
  declaration?: DeclarationSemantic | Nothing,
  reference?: TextReference | Nothing,
): UsageSemantic {
  const usage: UsageSemantic = {
    $: $UsageSemantic(),
    name,
    type,
    declaration,
    reference,
  };

  if (declaration) {
    declaration.usages.addLastItem(usage);
  }

  return usage;
}
