import { String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { GenericDeclarationSemantic } from '../generic/generic-semantic';
import { MethodDeclarationSemantic } from '../method/method-semantic';
import { $Semantic, DeclarationSemantic, ValueSemantic } from '../semantic';

export interface ModelDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.MODEL_DECLARATION;
  generics: GenericDeclarationSemantic[];
  base: ValueSemantic | null;
  attributes: Record<String2, MethodDeclarationSemantic[]>;
}

export interface ModelValueSemantic extends ValueSemantic {
  $: $Semantic.MODEL_VALUE;
  declaration: ModelDeclarationSemantic;
  generics: ValueSemantic[];
  // attributes: Record<String2, AttributeValueSemantic[]>;
}

export function modelDeclarationSemantic(
  reference: SourceReference,
  name: String2,
  generics: GenericDeclarationSemantic[],
  base: ModelValueSemantic,
  attributes: Record<String2, MethodDeclarationSemantic[]>,
): ModelDeclarationSemantic {
  return {
    $: $Semantic.MODEL_DECLARATION,
    reference,
    name,
    usages: [],
    generics,
    base,
    attributes,
  };
}

export function modelValueSemantic(
  reference: SourceReference,
  declaration: ModelDeclarationSemantic,
  generics: ValueSemantic[],
): ModelValueSemantic {
  const semantic: ModelValueSemantic = {
    $: $Semantic.MODEL_VALUE,
    reference,
    declaration,
    generics,
  };

  declaration.usages.push(semantic);

  return semantic;
}
