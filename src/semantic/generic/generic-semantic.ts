import { Nothing, String2, nothing } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { ModelValueSemantic } from '../model/model-semantic';
import { $Semantic, DeclarationSemantic, ValueSemantic } from '../semantic';

export interface GenericDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.GENERIC_DECLARATION;
  base: ModelValueSemantic | Nothing;
  value: ValueSemantic | Nothing;
}

export interface GenericValueSemantic extends ValueSemantic {
  $: $Semantic.GENERIC_VALUE;
  declaration: GenericDeclarationSemantic;
}

export function genericDeclarationSemantic(
  reference: SourceReference,
  name: String2,
  base: ModelValueSemantic | Nothing,
  value: ValueSemantic | Nothing,
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

export function genericShallowDeclarationSemantic(
  reference: SourceReference,
  name: String2,
): GenericDeclarationSemantic {
  return {
    $: $Semantic.GENERIC_DECLARATION,
    reference,
    name,
    usages: [],
    base: nothing,
    value: nothing,
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
