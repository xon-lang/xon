import {Boolean2, Nothing, TextData, TextReference} from '#common';
import { Semantic, TypeSemantic} from '#semantics';
import {$} from '#typing';

export type DeclarationKind =
  | $.DeclarationSemantic
  // types
  | $.TypeDeclarationSemantic
  | $.NominalTypeDeclarationSemantic
  | $.StructuralTypeDeclarationSemantic
  | $.ParameterTypeDeclarationSemantic
  // values
  | $.ValueDeclarationSemantic
  | $.AttributeValueDeclarationSemantic
  | $.ParameterValueDeclarationSemantic;

export type DeclarationSemantic = Semantic & {
  documentation?: TextData | Nothing;
  usages: TextReference[];
  modifier?: TextData | Nothing;
  name: TextData;
  type: TypeSemantic;

  eq(other: DeclarationSemantic): Boolean2;
};

export const $Semantics = semanticsPackageType<Semantic>('Semantics');

