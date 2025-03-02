import {
  $AnalyzerType,
  $TypeSemantic,
  DeclarationSemantic,
  TypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, Nothing, Text, TextReference} from '#common';
import {Brand} from '#typing';

export type UsageTypeSemantic = TypeSemantic &
  Brand<'Analyzer.UsageTypeSemantic'> & {
    name: Text;
    type?: TypeSemantic | Nothing;
    declaration?: DeclarationSemantic | Nothing;
    reference?: TextReference | Nothing;
  };

export const $UsageTypeSemantic = () => $AnalyzerType<UsageTypeSemantic>('UsageSemantic', $TypeSemantic());

export function newUsageTypeSemantic(
  name: Text,
  declaration?: TypeDeclarationSemantic | Nothing,
  reference?: TextReference | Nothing,
): UsageTypeSemantic {
  const usage: UsageTypeSemantic = {
    $: $UsageTypeSemantic(),
    name,
    type: declaration?.getType(),
    declaration,
    reference,
    // attributes,

    equals(other: TypeSemantic): Boolean2 {
      return this.type?.equals(other) ?? false;
    },

    is(other: TypeSemantic): Boolean2 {
      return this.type?.is(other) ?? false;
    },
  };

  if (declaration) {
    declaration.usages.addLastItem(usage);
  }

  return usage;
}
