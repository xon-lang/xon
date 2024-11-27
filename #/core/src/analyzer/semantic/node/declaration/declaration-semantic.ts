import {Boolean2, Nothing, TextData, TextReference} from '#/common';
import {DeclarationNode, Semantic, TypeSemantic} from '#/core';
import {$} from '#/typing';

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
  documentation?: TextData | Nothing;
  usages: TextReference[];
  modifier?: TextData | Nothing;
  name: TextData;
  type: TypeSemantic;

  eq(other: DeclarationSemantic): Boolean2;
};
