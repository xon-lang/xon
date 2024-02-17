import { String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic, ValueSemantic } from '../semantic';

export interface PunctuationDeclarationSemantic extends DeclarationSemantic {}

export interface PunctuationValueSemantic extends ValueSemantic {}

export function punctuationDeclarationSemantic(
  reference: SourceReference,
  name: String2,
): PunctuationDeclarationSemantic {
  return {
    $: $Semantic.PUNCTUATION_DECLARATION,
    reference,
    name,
    usages: [],
  };
}

export function punctuationValueSemantic(
  reference: SourceReference,
  declaration: PunctuationDeclarationSemantic,
): PunctuationValueSemantic {
  const semantic: PunctuationValueSemantic = {
    $: $Semantic.PUNCTUATION_VALUE,
    reference,
    declaration,
  };

  declaration.usages.push(semantic);

  return semantic;
}
