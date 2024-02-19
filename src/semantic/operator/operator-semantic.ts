import { String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic } from '../semantic';

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
