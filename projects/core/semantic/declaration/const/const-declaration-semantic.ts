import {Nothing, Something, String2, nothing} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic} from '../../semantic';
import {ValueSemantic} from '../../value/value-semantic';
import {DeclarationSemantic} from '../declaration-semantic';

export interface ConstDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.CONST_DECLARATION;
  parameters: (DeclarationSemantic | Nothing)[] | Nothing;
  initializer: ValueSemantic | Nothing;
  value: Something | Nothing;
}

export function constDeclarationSemantic(
  reference: SourceReference,
  modifier: String2 | Nothing,
  name: String2,
): ConstDeclarationSemantic {
  return {
    $: $Semantic.CONST_DECLARATION,
    reference,
    modifier,
    name,
    usages: [reference],
    generics: nothing,
    parameters: nothing,
    initializer: nothing,
    value: nothing,
  };
}
