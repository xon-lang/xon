import {
  $Semantic,
  AttributeValueDeclarationSemantic,
  corePackageType,
  DeclarationScope,
  Semantic,
  TypeDeclarationSemantic,
} from '#analyzer';
import {Boolean2, Nothing} from '#common';

export type TypeSemantic = Semantic & {
  declaration?: TypeDeclarationSemantic | Nothing;

  attributes(): DeclarationScope<AttributeValueDeclarationSemantic>;

  // todo '(unknown is unknown === false)' ???
  is(other: TypeSemantic): Boolean2;
  eq(other: TypeSemantic): Boolean2;
};

export const $TypeSemantic = corePackageType<TypeSemantic>('TypeSemantic', $Semantic);
