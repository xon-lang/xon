import { String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { ModelDeclarationSemantic } from '../model/model-semantic';
import { $Semantic, DeclarationSemantic, ValueSemantic } from '../semantic';

export interface PropertyDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.PROPERTY_DECLARATION;
  type: ModelDeclarationSemantic;
}

export interface PropertyValueSemantic extends ValueSemantic {
  $: $Semantic.PROPERTY_VALUE;
  declaration: PropertyDeclarationSemantic;
}

export function propertyDeclarationSemantic(
  reference: SourceReference,
  name: String2,
  type: ModelDeclarationSemantic,
): PropertyDeclarationSemantic {
  return {
    $: $Semantic.PROPERTY_DECLARATION,
    reference,
    name,
    usages: [],
    type,
  };
}

export function propertyValueSemantic(
  reference: SourceReference,
  declaration: PropertyDeclarationSemantic,
): PropertyValueSemantic {
  const semantic: PropertyValueSemantic = {
    $: $Semantic.PROPERTY_VALUE,
    reference,
    declaration,
  };

  declaration.usages.push(semantic);

  return semantic;
}
