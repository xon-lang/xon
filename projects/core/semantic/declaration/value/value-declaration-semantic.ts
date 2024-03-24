import {Array2, Nothing, String2, nothing} from '../../../lib/core';
import {ResourceReference} from '../../../util/resource/resource-reference';
import {$Semantic} from '../../semantic';
import {TypeSemantic} from '../../type/type-semantic';
import {ValueSemantic} from '../../value/value-semantic';
import {DeclarationSemantic} from '../declaration-semantic';

export interface ValueDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.VALUE_DECLARATION;
  parameters: Array2<DeclarationSemantic | Nothing> | Nothing;
  type: TypeSemantic | Nothing;
  initializer: (TypeSemantic | ValueSemantic) | Nothing;
}

export function valueDeclarationSemantic(
  reference: ResourceReference,
  modifier: String2 | Nothing,
  name: String2,
): ValueDeclarationSemantic {
  return {
    $: $Semantic.VALUE_DECLARATION,
    reference,
    modifier,
    name,
    usages: [reference],
    generics: nothing,
    parameters: nothing,
    type: nothing,
    initializer: nothing,
  };
}
