import { Nothing } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { DeclarationSemantic } from '../declaration/declaration-semantic';
import { $Semantic, Semantic } from '../semantic';

export interface UsageSemantic extends Semantic {
  declaration: DeclarationSemantic;
  generics: (UsageSemantic | Nothing)[] | Nothing;
}

export function usageSemantic(
  reference: SourceReference,
  declaration: DeclarationSemantic,
  generics: (UsageSemantic | Nothing)[] | Nothing,
  args: (UsageSemantic | Nothing)[] | Nothing,
): UsageSemantic {
  const semantic: UsageSemantic = {
    $: $Semantic.USAGE,
    reference,
    declaration,
    generics,
    // arguments: args,
  };

  declaration.usages.push(semantic);

  return semantic;
}
