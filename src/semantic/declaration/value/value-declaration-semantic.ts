import {Nothing, String2, nothing} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic} from '../../semantic';
import {TypeSemantic} from '../../type/type-semantic';
import {DeclarationSemantic} from '../declaration-semantic';

export interface ValueDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.VALUE_DECLARATION;
  parameters: (ValueDeclarationSemantic | Nothing)[] | Nothing;
  type: TypeSemantic | Nothing;
  initializerType: TypeSemantic | Nothing;
}

export function valueDeclarationSemantic(
  reference: SourceReference,
  modifier: String2 | Nothing,
  name: String2,
): ValueDeclarationSemantic {
  return {
    $: $Semantic.VALUE_DECLARATION,
    reference,
    name,
    modifier,
    usages: [],
    generics: nothing,
    parameters: nothing,
    type: nothing,
    initializerType: nothing,
    attributes: {},
  };
}
