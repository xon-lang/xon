import {Nothing, String2, nothing} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic} from '../../semantic';
import {TypeSemantic} from '../../type/type-semantic';
import {ValueSemantic} from '../../value/value-semantic';
import {DeclarationSemantic} from '../declaration-semantic';

export interface ValueDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.VALUE_DECLARATION;
  parameters: (DeclarationSemantic | Nothing)[] | Nothing;
  type: TypeSemantic | Nothing;
  initializer: (TypeSemantic | ValueSemantic) | Nothing;
}

export function valueDeclarationSemantic(
  reference: SourceReference,
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
