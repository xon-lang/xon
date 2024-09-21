import {Boolean2, Nothing, String2, TextResourceRange} from '#common';
import {DeclarationNode, Semantic, TypeSemantic} from '#core';
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
  nodeLink: DeclarationNode;
  documentation?: String2 | Nothing;
  usages: TextResourceRange[];
  modifier?: String2 | Nothing;
  name: String2;
  type: TypeSemantic;

  eq(other: DeclarationSemantic): Boolean2;
};
