import {$, isSetOperatorTypeSemantic} from '../../../../../$';
import {Array2, Boolean2} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {createDeclarationManager, DeclarationManager} from '../../../declaration-manager';
import {ValueDeclarationSemantic} from '../../declaration/value/value-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export type InvokeTypeSemantic = TypeSemantic & {
  $: $.InvokeTypeSemantic;
  instance: TypeSemantic;
  args: Array2<TypeSemantic>;
};

export function invokeTypeSemantic(
  reference: TextResourceRange,
  instance: TypeSemantic,
  args: Array2<TypeSemantic>,
): InvokeTypeSemantic {
  return {
    $: $.InvokeTypeSemantic,
    reference,
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

    attributes(): DeclarationManager<ValueDeclarationSemantic> {
      return createDeclarationManager();
      // throw new Error('Not implemented');
    },
  };
}
