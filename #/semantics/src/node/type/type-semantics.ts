import {Boolean2, Nothing} from '#common';
import {
  $Semantics,
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Semantics,
  semanticsPackageType,
  TypeDeclarationSemantic,
} from '#semantics';

export type TypeSemantics = Semantics & {
  declaration?: TypeDeclarationSemantic | Nothing;

  attributes(): DeclarationScope<AttributeValueDeclarationSemantic>;
  is(other: TypeSemantics): Boolean2;
  eq(other: TypeSemantics): Boolean2;
};

export const $TypeSemantics = semanticsPackageType<TypeSemantics>('TypeSemantics', $Semantics);
