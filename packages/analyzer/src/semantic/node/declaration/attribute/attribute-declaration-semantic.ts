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
  reference: TextReference,
  documentation: Text | Nothing,
  name: Text,
  type?: TypeSemantic | Nothing,
): AttributeDeclarationSemantic {
  return {
    $: $AttributeDeclarationSemantic(),
    usages: newArrayData(),
    reference,
    name,
    type,
    documentation,
  };
}
