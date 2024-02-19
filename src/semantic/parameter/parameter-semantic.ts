import { String2 } from '../../lib/core';
import { SourceReference } from '../../source/source-reference';
import { $Semantic, DeclarationSemantic, ValueSemantic } from '../semantic';

export interface ParameterDeclarationSemantic extends DeclarationSemantic {
  $: $Semantic.PARAMETER;
  type: DeclarationSemantic;
  initializer: ValueSemantic;
}

export interface ParameterValueSemantic extends ValueSemantic {
  $: $Semantic.PARAMETER_VALUE;
  declaration: ParameterDeclarationSemantic;
}

export function parameterDeclarationSemantic(
  reference: SourceReference,
  name: String2,
  type: DeclarationSemantic,
  initializer: ValueSemantic,
): ParameterDeclarationSemantic {
  return {
    $: $Semantic.PARAMETER,
    reference,
    name,
    usages: [],
    type,
    initializer,
  };
}

export function parameterValueSemantic(
  reference: SourceReference,
  declaration: ParameterDeclarationSemantic,
): ParameterValueSemantic {
  const semantic: ParameterValueSemantic = {
    $: $Semantic.PARAMETER_VALUE,
    reference,
    declaration,
  };

  declaration.usages.push(semantic);

  return semantic;
}
