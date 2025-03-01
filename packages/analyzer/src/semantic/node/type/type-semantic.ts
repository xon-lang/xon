import {
  $AnalyzerType,
  $Semantic,
  AttributeTypeDeclarationSemantic,
  Semantic,
  TypeDeclarationSemantic,
} from '#analyzer';
import {ArrayData, Boolean2, Nothing, Text} from '#common';

export type TypeSemantic = Semantic & {
  declaration?: TypeDeclarationSemantic | Nothing;

  getAttribute(name: Text): AttributeTypeDeclarationSemantic | Nothing;
  getAttributes(): ArrayData<AttributeTypeDeclarationSemantic> | Nothing;
  is(other: TypeSemantic): Boolean2;
  equals(other: TypeSemantic): Boolean2;
};

export const $TypeSemantic = () => $AnalyzerType<TypeSemantic>('TypeSemantic', $Semantic());
