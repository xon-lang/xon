import {$} from '../../../../../../$';
import {Boolean2} from '../../../../../../../lib/types';
import {TextResourceRange} from '../../../../../../util/resource/text/text-resource-range';
import {DeclarationManager} from '../../../../declaration-manager';
import {TypeSemantic} from '../../type-semantic';
import {SetTypeSemantic} from '../set';

export interface IntersectionTypeSemantic extends SetTypeSemantic {
  $: $.IntersectionTypeSemantic;
  left: TypeSemantic;
  right: TypeSemantic;
}

export function intersectionTypeSemantic(
  reference: TextResourceRange,
  left: TypeSemantic,
  right: TypeSemantic,
): IntersectionTypeSemantic {
  const semantic: IntersectionTypeSemantic = {
    $: $.IntersectionTypeSemantic,
    reference,
    left,
    right,

    is(other: TypeSemantic): Boolean2 {
      return this.eq(other);
    },

    eq(_other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): DeclarationManager {
      return this.left.attributes().intersection(this.right.attributes());
    },
  };

  return semantic;
}
