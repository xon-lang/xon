import {$} from '../../../../../../$';
import {Boolean2, Nothing, String2} from '../../../../../../../lib/types';
import {Node} from '../../../../../node';
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
  nodeLink: Node | Nothing,
  documentation: String2 | Nothing,
  modifier: String2,
  name: String2,
  // todo should we send 'type' because of always send unknown type at shallow/first parse
  type: TypeSemantic,
): NominalTypeDeclarationSemantic {
  return {
    $: $.NominalTypeDeclarationSemantic,
    nodeLink,
    usages: [],
    documentation,

    modifier,
    name,
    type,

    eq(other: DeclarationSemantic): Boolean2 {
      // todo recheck 'eq' conditions
      if (this.nodeLink && other.nodeLink) {
        return this.nodeLink?.reference.equals(other.nodeLink?.reference);
      }

      return false;
    },
  };
}
