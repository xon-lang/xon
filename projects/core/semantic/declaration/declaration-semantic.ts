import {Boolean2, Nothing, String2, nothing} from '../../lib/core';
import {SourceReference} from '../../source/source-reference';
import {$Semantic, Semantic} from '../semantic';
import {TypeSemantic} from '../type/type-semantic';
import {ValueSemantic} from '../value/value-semantic';
import {DeclarationRestrictions, getDeclarationRestrictionsByModifier} from './declaration-restrictions';

export interface DeclarationSemantic extends Semantic {
  $: $Semantic.DECLARATION;
  usages: SourceReference[];
  modifier: String2 | Nothing;
  restrictions: DeclarationRestrictions | Nothing;
  name: String2;
  generics: (DeclarationSemantic | Nothing)[] | Nothing;
  parameters: (DeclarationSemantic | Nothing)[] | Nothing;
  type: TypeSemantic | Nothing;
  initializer: (TypeSemantic | ValueSemantic) | Nothing;
  attributes: Record<String2, DeclarationSemantic[]>;

  eq(semantic: DeclarationSemantic): Boolean2;
}

export function declarationSemantic(
  reference: SourceReference,
  modifier: String2 | Nothing,
  name: String2,
): DeclarationSemantic {
  const restrictions = getDeclarationRestrictionsByModifier(modifier);

  return {
    $: $Semantic.DECLARATION,
    reference,
    modifier,
    restrictions,
    name,
    usages: [reference],
    generics: nothing,
    parameters: nothing,
    type: nothing,
    initializer: nothing,
    attributes: {},

    eq(semantic: DeclarationSemantic): Boolean2 {
      return this.reference.eq(semantic.reference);
    },
  };
}
