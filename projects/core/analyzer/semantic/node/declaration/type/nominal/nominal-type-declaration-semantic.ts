import {$} from '../../../../../../$';
import {Boolean2, Nothing, String2} from '../../../../../../../lib/types';
import {TextResourceRange} from '../../../../../../util/resource/text/text-resource-range';
import {DeclarationManager} from '../../../../declaration-manager';
import {TypeSemantic} from '../../../type/type-semantic';
import {DeclarationSemantic} from '../../declaration-semantic';
import {ValueDeclarationSemantic} from '../../value/value-declaration-semantic';
import {TypeDeclarationSemantic} from '../type-declaration-semantic';

export type NominalTypeDeclarationSemantic = TypeDeclarationSemantic & {
  $: $.NominalTypeDeclarationSemantic;
  modifier: String2;
  // todo refactor to be required 'baseType: TypeSemantic | Nothing;'
  baseType?: TypeSemantic | Nothing;

  // todo should be nullable ???
  attributes?: DeclarationManager<ValueDeclarationSemantic> | Nothing;
};

export function nominalTypeDeclarationSemantic(
  reference: TextResourceRange,
  documentation: String2 | Nothing,
  modifier: String2,
  name: String2,
  // todo should we send 'type' because of always send unknown type at shallow/first parse
  type: TypeSemantic,
): NominalTypeDeclarationSemantic {
  return {
    $: $.NominalTypeDeclarationSemantic,
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
