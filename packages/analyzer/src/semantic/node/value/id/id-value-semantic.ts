import {
  $AnalyzerType,
  $ValueSemantic,
  TypeSemantic,
  ValueDeclarationSemantic,
  ValueSemantic,
} from '#analyzer';
import {Nothing, Text} from '#common';

export type IdValueSemantic = ValueSemantic & {
  name: Text;
  declaration?: ValueDeclarationSemantic | Nothing;
};

export const $IdValueSemantic = () => $AnalyzerType<IdValueSemantic>('IdValueSemantic', $ValueSemantic());

export function newIdValueSemantic(
  name: Text,
  declaration: ValueDeclarationSemantic | Nothing,
  type: TypeSemantic,
): IdValueSemantic {
  // if (declaration) {
  //   declaration.usages.addLastItem(nodeLink.reference);
  // }

  return {
    $: $IdValueSemantic(),
    name,
    type,
    declaration,
  };
}
