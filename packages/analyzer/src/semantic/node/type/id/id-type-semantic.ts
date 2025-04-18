import {
  $AnalyzerType,
  $TypeSemantic,
  DeclarationSemantic,
  TypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, Nothing, Text, TextReference} from '#common';
import {Brand} from '#typing';

export type IdTypeSemantic = TypeSemantic &
  Brand<'Analyzer.IdTypeSemantic'> & {
    reference: TextReference;
    name: Text;
    type?: TypeSemantic | Nothing;
    declaration?: DeclarationSemantic | Nothing;
  };

export const $IdTypeSemantic = () => $AnalyzerType<IdTypeSemantic>('IdTypeSemantic', $TypeSemantic());

export function newIdTypeSemantic(
  reference: TextReference,
  name: Text,
  declaration?: TypeDeclarationSemantic | Nothing,
): IdTypeSemantic {
  const usage: IdTypeSemantic = {
    $: $IdTypeSemantic(),
    name,
    declaration,
    reference,
    scope: declaration?.scope,

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
