import {$AnalyzerType, $ValueSemantic, DeclarationSemantic, TypeSemantic, ValueSemantic} from '#analyzer';
import {Nothing, Text, TextReference} from '#common';
import {Brand} from '#typing';

export type UsageValueSemantic = ValueSemantic &
  Brand<'Analyzer.UsageSemantic'> & {
    name: Text;
    type?: TypeSemantic | Nothing;
    declaration?: DeclarationSemantic | Nothing;
    reference?: TextReference | Nothing;
  };

export const $UsageValueSemantic = () => $AnalyzerType<UsageValueSemantic>('UsageSemantic', $ValueSemantic());

export function newUsageValueSemantic(
  name: Text,
  declaration?: DeclarationSemantic | Nothing,
  reference?: TextReference | Nothing,
): UsageValueSemantic {
  const usage: UsageValueSemantic = {
    $: $UsageValueSemantic(),
    name,
    type: declaration?.getType(),
    declaration,
    reference,
  };

  if (declaration) {
    declaration.usages.addLastItem(usage);
  }

  return usage;
}
