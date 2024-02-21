import { Nothing, String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { DeclarationSemantic } from '../declaration/declaration-semantic';
import { GenericSemantic } from '../declaration/generic/generic-semantic';
import { MethodSemantic } from '../declaration/method/method-semantic';
import { $Semantic, Semantic } from '../semantic';
import { UsageSemantic } from '../usage/usage-semantic';

export interface TypeSemantic extends Semantic {
  $: $Semantic.MODEL;
  declaration: DeclarationSemantic;
  generics: (UsageSemantic | Nothing)[] | Nothing;

  attributes(): Record<String2, MethodSemantic[]>;
}

export function typeSemantic(
  reference: SourceReference,
  name: String2,
  generics: (GenericSemantic | Nothing)[],
): TypeSemantic {
  return {
    $: $Semantic.MODEL,
    reference,
    name,
    usages: [],
    generics,

    attributes() {
      return {};
    },
  };
}

export function typeShallowSemantic(reference: SourceReference, name: String2): TypeSemantic {
  return {
    $: $Semantic.MODEL,
    reference,
    name,
    usages: [],
    generics: [],
    attributes: {},
  };
}
