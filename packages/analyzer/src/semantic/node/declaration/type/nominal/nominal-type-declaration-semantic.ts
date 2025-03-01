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

  makeType(args: ArrayData<TypeSemantic>): TypeSemantic;
};

export const $NominalTypeDeclarationSemantic = () =>
  $AnalyzerType<NominalTypeDeclarationSemantic>('NominalTypeDeclarationSemantic', $TypeDeclarationSemantic());

export function newNominalTypeDeclarationSemantic(
  documentation: Text | Nothing,
  name: Text,
  parameters: ArrayData<ParameterTypeDeclarationSemantic> | Nothing,
  extendsType: TypeSemantic | Nothing,
): NominalTypeDeclarationSemantic {
  return {
    $: $NominalTypeDeclarationSemantic(),
    usages: newArrayData(),
    documentation,
    name,
    parameters,
    extendsType,
    // attributes: newDeclarationScope(),

    makeType(args?: ArrayData<TypeSemantic> | Nothing): TypeSemantic {
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
