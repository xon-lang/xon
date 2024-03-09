import {Nothing, String2, nothing} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic} from '../../semantic';
import {DeclarationTypeSemantic} from '../../usage/type/declaration/declaration-type-semantic';
import {DeclarationSemantic} from '../declaration-semantic';
import {GenericSemantic} from '../generic/generic-semantic';

export interface ModelSemantic extends DeclarationSemantic {
  $: $Semantic.MODEL;
  generics: (GenericSemantic | Nothing)[];
  base: DeclarationTypeSemantic | Nothing;
  // todo change to single attribute manager class
  attributes: Record<String2, DeclarationSemantic[]>;
}

export function modelSemantic(reference: SourceReference, name: String2): ModelSemantic {
  return {
    $: $Semantic.MODEL,
    reference,
    name,
    usages: [],
    generics: [],
    base: nothing,
    attributes: {},
  };
}
