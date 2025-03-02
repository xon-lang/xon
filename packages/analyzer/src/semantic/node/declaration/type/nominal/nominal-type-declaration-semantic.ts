import {
  $AnalyzerType,
  $TypeDeclarationSemantic,
  AttributeList,
  DeclarationSemantic,
  ParameterTypeDeclarationSemantic,
  TypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {ArrayData, Boolean2, newArrayData, Nothing, Text} from '#common';

export type NominalTypeDeclarationSemantic = TypeDeclarationSemantic & {
  extendsType?: TypeSemantic | Nothing;
  attributes?: AttributeList | Nothing;
};

export const $NominalTypeDeclarationSemantic = () =>
  $AnalyzerType<NominalTypeDeclarationSemantic>('NominalTypeDeclarationSemantic', $TypeDeclarationSemantic());

export function newNominalTypeDeclarationSemantic(
  name: Text,
  parameters?: ArrayData<ParameterTypeDeclarationSemantic> | Nothing,
  extendsType?: TypeSemantic | Nothing,
  attributes?: AttributeList | Nothing,
  documentation?: Text | Nothing,
): NominalTypeDeclarationSemantic {
  return {
    $: $NominalTypeDeclarationSemantic(),
    usages: newArrayData(),
    name,
    parameters,
    extendsType,
    attributes,
    documentation,

    equals(other: DeclarationSemantic): Boolean2 {
      if (this === other) {
        return true;
      }

      if (this.reference) {
        return !!other.reference && this.reference.equals(other.reference);
      }

      return this.name === other.name;
    },
  };
}
