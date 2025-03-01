import {
  $AnalyzerType,
  $TypeDeclarationSemantic,
  DeclarationSemantic,
  newFunctionTypeSemantic,
  newIdTypeSemantic,
  newInvokeTypeSemantic,
  ParameterTypeDeclarationSemantic,
  TypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {ArrayData, Boolean2, newArrayData, nothing, Nothing, Text} from '#common';

export type NominalTypeDeclarationSemantic = TypeDeclarationSemantic & {
  parameters?: ArrayData<ParameterTypeDeclarationSemantic> | Nothing;
  extendsType?: TypeSemantic | Nothing;
  // attributes: DeclarationScope<AttributeValueDeclarationSemantic>;
};

export const $NominalTypeDeclarationSemantic = () =>
  $AnalyzerType<NominalTypeDeclarationSemantic>('NominalTypeDeclarationSemantic', $TypeDeclarationSemantic());

export function newNominalTypeDeclarationSemantic(
  name: Text,
  documentation?: Text | Nothing,
  parameters?: ArrayData<ParameterTypeDeclarationSemantic> | Nothing,
  extendsType?: TypeSemantic | Nothing,
): NominalTypeDeclarationSemantic {
  return {
    $: $NominalTypeDeclarationSemantic(),
    usages: newArrayData(),
    name,
    documentation,
    parameters,
    extendsType,
    // attributes: newDeclarationScope(),

    getType(args?: ArrayData<TypeSemantic> | Nothing): TypeSemantic {
      if (this.parameters?.some()) {
        if (args?.some()) {
          return newInvokeTypeSemantic(newIdTypeSemantic(this.name, this), args);
        }

        return newFunctionTypeSemantic(nothing, this.parameters, newIdTypeSemantic(this.name, this));
      }

      return newIdTypeSemantic(this.name, this);
    },

    equals(other: DeclarationSemantic): Boolean2 {
      return this === other;
    },
  };
}
