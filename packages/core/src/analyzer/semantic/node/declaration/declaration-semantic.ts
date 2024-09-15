import {Boolean2, Nothing, String2} from '#common';
import {$, DeclarationNode, Semantic, TextResourceRange, TypeSemantic} from '#core';

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
