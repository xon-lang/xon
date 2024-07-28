import {$} from '../../../../../../$';
import {Array2, Boolean2, Nothing, String2} from '../../../../../../../lib/types';
import {TextResourceRange} from '../../../../../../util/resource/text/text-resource-range';
import {TypeSemantic} from '../../../type/type-semantic';
import {DeclarationSemantic} from '../../declaration-semantic';
import {ValueDeclarationSemantic} from '../value-declaration-semantic';

export type MethodValueDeclarationSemantic = ValueDeclarationSemantic & {
  $: $.MethodValueDeclarationSemantic;
  // todo refactor to use 'parameters: Array2<ValueDeclarationSemantic>'
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
    parameters,
    type,

    eq(other: DeclarationSemantic): Boolean2 {
      return this.reference.equals(other.reference);
    },
  };
}
