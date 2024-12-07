import {Boolean2, Nothing} from '#common';
import {
  $Semantics,
  AttributeValueDeclarationSemantics,
  DeclarationScope,
  Semantics,
  semanticsPackageType,
  TypeDeclarationSemantics,
} from '#semantics';

export type TypeSemantics = Semantics & {
  declaration?: TypeDeclarationSemantics | Nothing;

  attributes(): DeclarationScope<AttributeValueDeclarationSemantics>;
  is(other: TypeSemantics): Boolean2;
};

export const $TypeSemantics = semanticsPackageType<TypeSemantics>('TypeSemantics', $Semantics);
