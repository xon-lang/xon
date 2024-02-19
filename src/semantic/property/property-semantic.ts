import { String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic } from '../semantic';
import { TypeValueSemantic } from '../type/type-semantic';

export interface PropertyDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.PROPERTY_DECLARATION;
  type: TypeValueSemantic;
}

export function propertyDeclarationSemantic(
  reference: SourceReference,
  name: String2,
  type: TypeValueSemantic,
): PropertyDeclarationSemantic {
  return {
    $: $Semantic.PROPERTY_DECLARATION,
    reference,
    name,
    usages: [],
    type,
  };
}
