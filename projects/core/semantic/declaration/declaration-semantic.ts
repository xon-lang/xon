import {Nothing, String2, nothing} from '../../lib/core';
import {SourceReference} from '../../source/source-reference';
import {$Semantic, Semantic} from '../semantic';
import {TypeSemantic} from '../type/type-semantic';
import {ValueSemantic} from '../value/value-semantic';

export interface DeclarationSemantic extends Semantic {
  $: $Semantic.DECLARATION;
  usages: SourceReference[];
  modifier: String2 | Nothing;
  name: String2;
  generics: (DeclarationSemantic | Nothing)[] | Nothing;
  parameters: (DeclarationSemantic | Nothing)[] | Nothing;
  type: TypeSemantic | Nothing;
  initializer: (TypeSemantic | ValueSemantic) | Nothing;
  attributes: Record<String2, DeclarationSemantic[]>;
}

export function declarationSemantic(
  reference: SourceReference,
  modifier: String2 | Nothing,
  name: String2,
): DeclarationSemantic {
  return {
    $: $Semantic.DECLARATION,
    reference,
    modifier,
    name,
    usages: [reference],
    generics: nothing,
    parameters: nothing,
    type: nothing,
    initializer: nothing,
    attributes: {},
  };
}
