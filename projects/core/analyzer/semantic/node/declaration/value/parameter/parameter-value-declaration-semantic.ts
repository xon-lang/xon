import {$} from '../../../../../../$';
import {Boolean2, Nothing, String2} from '../../../../../../../lib/types';
import {TextResourceRange} from '../../../../../../util/resource/text/text-resource-range';
import {TypeSemantic} from '../../../type/type-semantic';
import {DeclarationSemantic} from '../../declaration-semantic';
import {ValueDeclarationSemantic} from '../value-declaration-semantic';

export type ParameterValueDeclarationSemantic = ValueDeclarationSemantic & {
  $: $.ParameterValueDeclarationSemantic;

  eq(other: DeclarationSemantic): Boolean2;
};

export function propertyValueDeclarationSemantic(
  reference: TextResourceRange,
  documentation: String2 | Nothing,
  modifier: String2 | Nothing,
  name: String2,
  type: TypeSemantic,
): ParameterValueDeclarationSemantic {
  return {
    $: $.ParameterValueDeclarationSemantic,
    reference,
    usages: [],
    documentation,

    modifier,
    name,
    type,

    eq(other: DeclarationSemantic): Boolean2 {
      return this.reference.equals(other.reference);
    },
  };
}
