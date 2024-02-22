import { Nothing, String2 } from '../../../lib/core';
import { SourceReference } from '../../../source/source-reference';
import { DeclarationSemantic } from '../../declaration/declaration-semantic';
import { $Semantic } from '../../semantic';
import { TypeSemantic } from '../type/type-semantic';
import { UsageSemantic } from '../usage-semantic';

export interface ValueSemantic extends UsageSemantic {
  $: $Semantic.VALUE;
  generics: (UsageSemantic | Nothing)[] | Nothing;
  arguments: (UsageSemantic | Nothing)[] | Nothing;

  attributes(): Record<String2, TypeSemantic[]>;
}

export function valueSemantic(
  reference: SourceReference,
  declaration: DeclarationSemantic,
  generics: (UsageSemantic | Nothing)[] | Nothing,
  args: (UsageSemantic | Nothing)[] | Nothing,
): ValueSemantic {
  const semantic: ValueSemantic = {
    $: $Semantic.VALUE,
    reference,
    declaration,
    generics,
    arguments: args,

    attributes(): Record<String2, TypeSemantic[]> {
      return {};
    },
  };

  declaration.usages.push(semantic);

  return semantic;
}
