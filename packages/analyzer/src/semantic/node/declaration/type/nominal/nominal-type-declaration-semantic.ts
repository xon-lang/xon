import {
  $AnalyzerType,
  $TypeDeclarationSemantic,
  DeclarationSemantic,
  ParameterTypeDeclarationSemantic,
  SemanticScope,
  TypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {ArrayData, Boolean2, newArrayData, Nothing, Text, TextReference} from '#common';

export type NominalTypeDeclarationSemantic = TypeDeclarationSemantic & {
  extendsType?: TypeSemantic | Nothing;

  equals(other: DeclarationSemantic): Boolean2;
};

export const $NominalTypeDeclarationSemantic = () =>
  $AnalyzerType<NominalTypeDeclarationSemantic>('NominalTypeDeclarationSemantic', $TypeDeclarationSemantic());

export function newNominalTypeDeclarationSemantic(
  reference: TextReference,
  name: Text,
  parameters?: ArrayData<ParameterTypeDeclarationSemantic> | Nothing,
  extendsType?: TypeSemantic | Nothing,
  scope?: SemanticScope | Nothing,
  documentation?: Text | Nothing,
): NominalTypeDeclarationSemantic {
  return {
    $: $NominalTypeDeclarationSemantic(),
    reference,
    usages: newArrayData(),
    name,
    parameters,
    extendsType,
    scope: scope,
    documentation,

    // getType(): TypeSemantic | Nothing {
    //   if (this.parameters?.some()) {
    //     return newFunctionTypeSemantic(this.parameters, newNominalTypeSemantic(this));
    //   }

    //   return newNominalTypeSemantic(this);
    // },

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
