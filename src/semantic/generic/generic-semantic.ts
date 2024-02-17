import { String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { ModelValueSemantic } from '../model/model-semantic';
import { $Semantic, DeclarationSemantic, ValueSemantic } from '../semantic';

export interface GenericDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.GENERIC_DECLARATION;
  base: ModelValueSemantic;
  value: ValueSemantic;
}

export interface GenericValueSemantic extends ValueSemantic {
  $: $Semantic.GENERIC_VALUE;
  declaration: GenericDeclarationSemantic;
}

export function genericDeclarationSemantic(
  reference: SourceReference,
  name: String2,
  base: ModelValueSemantic,
  value: ValueSemantic,
): GenericDeclarationSemantic {
  return {
    $: $Semantic.GENERIC_DECLARATION,
    reference,
    name,
    usages: [],
    base,
    value,
  };
}

export function genericValueSemantic(
  reference: SourceReference,
  declaration: GenericDeclarationSemantic,
): GenericValueSemantic {
  const semantic: GenericValueSemantic = {
    $: $Semantic.GENERIC_VALUE,
    reference,
    declaration,
  };

  declaration.usages.push(semantic);

  return semantic;
}
