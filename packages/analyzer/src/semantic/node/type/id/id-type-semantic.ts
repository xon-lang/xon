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
    name: Text;
    type?: TypeSemantic | Nothing;
    declaration?: DeclarationSemantic | Nothing;
    reference?: TextReference | Nothing;
  };

export const $IdTypeSemantic = () => $AnalyzerType<IdTypeSemantic>('IdTypeSemantic', $TypeSemantic());

export function newIdTypeSemantic(
  name: Text,
  declaration?: TypeDeclarationSemantic | Nothing,
  reference?: TextReference | Nothing,
): IdTypeSemantic {
  const usage: IdTypeSemantic = {
    $: $IdTypeSemantic(),
    name,
    declaration,
    reference,
    attributes: declaration?.attributes,

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
