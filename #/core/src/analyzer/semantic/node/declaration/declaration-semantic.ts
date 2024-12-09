import {Boolean2, Nothing, Text, TextReference} from '#common';
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
  documentation?: Text | Nothing;
  usages: TextReference[];
  modifier?: Text | Nothing;
  name: Text;
  type: TypeSemantic;

  eq(other: DeclarationSemantic): Boolean2;
};
