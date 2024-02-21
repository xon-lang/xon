import { String2 } from '../../../lib/core';
import { SourceReference } from '../../../source/source-reference';
import { $Semantic } from '../../semantic';
import { DeclarationSemantic } from '../declaration-semantic';

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
