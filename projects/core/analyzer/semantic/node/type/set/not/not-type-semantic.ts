import {$} from '../../../../../../$';
import {Boolean2} from '../../../../../../../lib/types';
import {TextResourceRange} from '../../../../../../util/resource/text/text-resource-range';
import {DeclarationManager} from '../../../../declaration-manager';
import {TypeSemantic} from '../../type-semantic';
import {SetTypeSemantic} from '../set';

export interface NotTypeSemantic extends SetTypeSemantic {
  $: $.NotTypeSemantic;
  value: TypeSemantic;
}

export function notTypeSemantic(reference: TextResourceRange, value: TypeSemantic): NotTypeSemantic {
  const semantic: NotTypeSemantic = {
    $: $.NotTypeSemantic,
    reference,
    value,

    is(other: TypeSemantic): Boolean2 {
      return this.eq(other);
    },

    eq(_other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): DeclarationManager {
      // todo investigate
      throw new Error('Not implemented');
    },
  };

  return semantic;
}
