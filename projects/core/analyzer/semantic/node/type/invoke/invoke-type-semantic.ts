import {$, isSetOperatorTypeSemantic} from '../../../../../$';
import {Boolean2, Nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {createDeclarationManager, DeclarationManager} from '../../../declaration-manager';
import {AttributeValueDeclarationSemantic} from '../../declaration/value/attribute/attribute-value-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export type InvokeTypeSemantic = TypeSemantic & {
  $: $.InvokeTypeSemantic;
  instance: TypeSemantic;
  args: TypeSemantic[];
};

export function invokeTypeSemantic(
  nodeLink: Node | Nothing,
  instance: TypeSemantic,
  args: TypeSemantic[],
): InvokeTypeSemantic {
  return {
    $: $.InvokeTypeSemantic,
    nodeLink,
    instance,
    args,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): DeclarationManager<AttributeValueDeclarationSemantic> {
      return createDeclarationManager();
      // throw new Error('Not implemented');
    },
  };
}
