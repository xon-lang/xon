import { String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { DeclarationSemantic } from '../declaration/declaration-semantic';
import { $Semantic } from '../semantic';

export interface OperatorSemantic extends DeclarationSemantic {
  $: $Semantic.OPERATOR;
}

export function operatorSemantic(reference: SourceReference, name: String2): OperatorSemantic {
  return {
    $: $Semantic.OPERATOR,
    reference,
    name,
    usages: [],
  };
}
