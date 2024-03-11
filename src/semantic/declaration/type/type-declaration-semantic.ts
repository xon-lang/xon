import {Nothing, String2, nothing} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {$Semantic} from '../../semantic';
import {TypeSemantic} from '../../type/type-semantic';
import {DeclarationSemantic} from '../declaration-semantic';

export interface TypeDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.TYPE_DECLARATION;
  base: TypeSemantic | Nothing;
  initializerType: TypeSemantic | Nothing;
}

export function typeDeclarationSemantic(
  reference: SourceReference,
  modifier: String2 | Nothing,
  name: String2,
): TypeDeclarationSemantic {
  return {
    $: $Semantic.TYPE_DECLARATION,
    reference,
    modifier,
    name,
    usages: [],
    generics: nothing,
    base: nothing,
    initializerType: nothing,
    attributes: {},
  };
}
