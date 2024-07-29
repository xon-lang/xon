import {$} from '../../../../../../$';
import {Array2, Boolean2, Nothing, String2} from '../../../../../../../lib/types';
import {TextResourceRange} from '../../../../../../util/resource/text/text-resource-range';
import {TypeSemantic} from '../../../type/type-semantic';
import {DeclarationSemantic} from '../../declaration-semantic';
import {ValueDeclarationSemantic} from '../value-declaration-semantic';

export type MethodValueDeclarationSemantic = Omit<ValueDeclarationSemantic, '$'> & {
  $: $.MethodValueDeclarationSemantic;
  // todo move it to new 'OperatorDeclarationSemantic'
  alternativeName: String2;
  // todo refactor to use 'parameters: Array2<ParameterValueDeclarationSemantic>'
  parameters: Array2<DeclarationSemantic>;
  generics?: Array2<DeclarationSemantic> | Nothing;
};

export function methodValueDeclarationSemantic(
  reference: TextResourceRange,
  documentation: String2 | Nothing,
  modifier: String2 | Nothing,
  name: String2,
  parameters: Array2<DeclarationSemantic>,
  type: TypeSemantic,
): MethodValueDeclarationSemantic {
  return {
    $: $.MethodValueDeclarationSemantic,
    reference,
    usages: [],

    documentation,
    modifier,
    name,
    alternativeName: alternativeName(name),
    parameters,
    type,

    eq(other: DeclarationSemantic): Boolean2 {
      return this.reference.equals(other.reference);
    },
  };
}

function alternativeName(operator: String2): String2 {
  if (operator === '+') {
    return '__plus__';
  }

  return operator;
}
