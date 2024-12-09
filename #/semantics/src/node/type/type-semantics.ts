import {
  $Semantics,
  AttributeValueDeclarationSemantics,
  DeclarationScope,
  Semantics,
  semanticsPackageType,
  TypeDeclarationSemantics,
} from '#semantics';
import {Boolean2, Nothing} from '#typing';

export type TypeSemantics = Semantics & {
  declaration?: TypeDeclarationSemantics | Nothing;

  attributes(): DeclarationScope<AttributeValueDeclarationSemantics>;
  is(other: TypeSemantics): Boolean2;
};

export const $TypeSemantics = semanticsPackageType<TypeSemantics>('TypeSemantics', $Semantics);
