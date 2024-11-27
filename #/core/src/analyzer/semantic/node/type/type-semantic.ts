import {Boolean2, Nothing} from '#/common';
import {AttributeValueDeclarationSemantic, DeclarationScope, Semantic, TypeDeclarationSemantic} from '#/core';

export type TypeSemantic = Semantic & {
  declaration?: TypeDeclarationSemantic | Nothing;

  attributes(): DeclarationScope<AttributeValueDeclarationSemantic>;

  // todo '(unknown is unknown === false)' ???
  is(other: TypeSemantic): Boolean2;
  eq(other: TypeSemantic): Boolean2;
};
