import {Array2, Boolean2, Nothing, String2} from '../../../lib/types';
import {TYPE_MODIFIERS, VALUE_MODIFIERS} from '../../analyzer/parser-config';
import {TextResourceReference} from '../../util/resource/resource-reference';
import {$Semantic, Semantic, semanticIs} from '../semantic';
import {TypeSemantic} from '../type/type-semantic';
import {ValueSemantic} from '../value/value-semantic';

export interface DeclarationSemantic extends Semantic<$Semantic.DECLARATION> {
  documentation?: String2 | Nothing;
  usages: Array2<TextResourceReference>;
  modifier?: String2 | Nothing;
  name: String2;
  generics?: Array2<DeclarationSemantic | Nothing> | Nothing;
  parameters?: Array2<DeclarationSemantic | Nothing> | Nothing;
  type?: TypeSemantic | Nothing;
  value?: (TypeSemantic | ValueSemantic) | Nothing;
  attributes?: Record<String2, Array2<DeclarationSemantic>> | Nothing;

  eq(other: DeclarationSemantic): Boolean2;
}

export function declarationSemantic(
  reference: TextResourceReference,
  documentation: String2 | Nothing,
  modifier: String2 | Nothing,
  name: String2,
): DeclarationSemantic {
  return {
    $: $Semantic.DECLARATION,
    reference,
    documentation,
    modifier,
    name,
    usages: [reference],

    eq(other: DeclarationSemantic): Boolean2 {
      return this.reference.positionEquals(other.reference);
    },
  };
}

export function isTypeDeclarationSemantic(semantic: Semantic): semantic is DeclarationSemantic {
  return (
    semanticIs<DeclarationSemantic>(semantic, $Semantic.DECLARATION) &&
    !!semantic.modifier &&
    TYPE_MODIFIERS.includes(semantic.modifier)
  );
}

export function isValueDeclarationSemantic(semantic: Semantic): semantic is DeclarationSemantic {
  return (
    semanticIs<DeclarationSemantic>(semantic, $Semantic.DECLARATION) &&
    (!semantic.modifier || VALUE_MODIFIERS.includes(semantic.modifier))
  );
}
