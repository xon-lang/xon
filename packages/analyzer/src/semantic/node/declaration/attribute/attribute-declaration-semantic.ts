import {$AnalyzerType, $ValueDeclarationSemantic, DeclarationSemantic, TypeSemantic} from '#analyzer';
import {newArrayData, Nothing, Text, TextReference} from '#common';

export type AttributeDeclarationSemantic = DeclarationSemantic & {
  type?: TypeSemantic | Nothing;
};

export const $AttributeDeclarationSemantic = () =>
  $AnalyzerType<AttributeDeclarationSemantic>(
    'AttributeValueDeclarationSemantic',
    $ValueDeclarationSemantic(),
  );

export function newAttributeDeclarationSemantic(
  name: Text,
  type?: TypeSemantic | Nothing,
  documentation?: Text | Nothing,
  reference?: TextReference | Nothing,
): AttributeDeclarationSemantic {
  return {
    $: $AttributeDeclarationSemantic(),
    usages: newArrayData(),
    name,
    type,
    documentation,
    reference,

    getType(): TypeSemantic | Nothing {
      return this.type;
    },
  };
}
