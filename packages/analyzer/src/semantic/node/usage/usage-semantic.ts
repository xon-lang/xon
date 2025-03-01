import {$AnalyzerType, $Semantic, DeclarationSemantic, Semantic, TypeSemantic} from '#analyzer';
import {Nothing, Text} from '#common';

export type UsageSemantic = Semantic & {
  name: Text;
  type?: TypeSemantic | Nothing;
  declaration?: DeclarationSemantic | Nothing;
};

export const $UsageSemantic = () => $AnalyzerType<UsageSemantic>('UsageSemantic', $Semantic());

export function newUsageSemantic(
  name: Text,
  type?: TypeSemantic | Nothing,
  declaration?: DeclarationSemantic | Nothing,
): UsageSemantic {
  // if (declaration) {
  //   declaration.usages.addLastItem(nodeLink.reference);
  // }

  return {
    $: $UsageSemantic(),
    name,
    type,
    declaration,
  };
}
