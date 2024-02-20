import { Nothing } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { DeclarationSemantic } from '../declaration/declaration-semantic';
import { $Semantic } from '../semantic';

export interface UsageSemantic {
  $: $Semantic.VALUE;
  reference: SourceReference;
  declaration: DeclarationSemantic;
  generics: (UsageSemantic | Nothing)[];
  arguments: (UsageSemantic | Nothing)[];
}

export function usageSemantic(
  reference: SourceReference,
  declaration: DeclarationSemantic,
  generics: (UsageSemantic | Nothing)[],
  args: (UsageSemantic | Nothing)[],
): UsageSemantic {
  const semantic: UsageSemantic = {
    $: $Semantic.VALUE,
    reference,
    declaration,
    generics,
    arguments: args,
  };

  declaration.usages.push(semantic);

  return semantic;
}
