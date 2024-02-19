import { String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic } from '../semantic';

export interface OperatorDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.OPERATOR;
}

export function operatorDeclarationSemantic(reference: SourceReference, name: String2): OperatorDeclarationSemantic {
  return {
    $: $Semantic.OPERATOR,
    reference,
    name,
    usages: [],
  };
}
