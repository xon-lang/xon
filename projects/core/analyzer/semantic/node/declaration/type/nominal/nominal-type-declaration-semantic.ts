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
  type: TypeSemantic | Nothing;
  attributes?: DeclarationManager<ValueDeclarationSemantic> | Nothing;
};

export function nominalTypeDeclarationSemantic(
  reference: TextResourceRange,
  documentation: String2 | Nothing,
  // todo we always know 'type' modifier
  modifier: String2 | Nothing,
  name: String2,
  type: TypeSemantic | Nothing,
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
