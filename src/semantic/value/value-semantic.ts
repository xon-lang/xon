import { Nothing } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic } from '../semantic';

export interface ValueSemantic {
  $: $Semantic.VALUE;
  reference: SourceReference;
  declaration: DeclarationSemantic;
  generics: (ValueSemantic | Nothing)[];
  arguments: (ValueSemantic | Nothing)[];
}

export function valueSemantic(
  reference: SourceReference,
  declaration: DeclarationSemantic,
  generics: (ValueSemantic | Nothing)[],
  args: (ValueSemantic | Nothing)[],
): ValueSemantic {
  const semantic: ValueSemantic = {
    $: $Semantic.VALUE,
    reference,
    declaration,
    generics,
    arguments: args,
  };

  declaration.usages.push(semantic);

  return semantic;
}
