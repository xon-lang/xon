import { String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic, ValueSemantic } from '../semantic';

export interface OperatorDeclarationSemantic extends DeclarationSemantic {}

export interface OperatorValueSemantic extends ValueSemantic {}

export function operatorDeclarationSemantic(reference: SourceReference, name: String2): OperatorDeclarationSemantic {
  return {
    $: $Semantic.PUNCTUATION,
    reference,
    name,
    usages: [],
  };
}

export function operatorValueSemantic(
  reference: SourceReference,
  declaration: OperatorDeclarationSemantic,
): OperatorValueSemantic {
  const semantic: OperatorValueSemantic = {
    $: $Semantic.PUNCTUATION_VALUE,
    reference,
    declaration,
  };

  declaration.usages.push(semantic);

  return semantic;
}
