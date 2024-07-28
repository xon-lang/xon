import {$} from '../../../../../../$';
import {Boolean2} from '../../../../../../../lib/types';
import {TextResourceRange} from '../../../../../../util/resource/text/text-resource-range';
import {DeclarationManager} from '../../../../declaration-manager';
import {ValueDeclarationSemantic} from '../../../declaration/value/value-declaration-semantic';
import {TypeSemantic} from '../../type-semantic';
import {SetTypeSemantic} from '../set';

export interface UnionTypeSemantic extends SetTypeSemantic {
  $: $.UnionTypeSemantic;
  left: TypeSemantic;
  right: TypeSemantic;
}

export function unionTypeSemantic(
  reference: TextResourceRange,
  left: TypeSemantic,
  right: TypeSemantic,
): UnionTypeSemantic {
  const semantic: UnionTypeSemantic = {
    $: $.UnionTypeSemantic,
    reference,
    left,
    right,

    is(other: TypeSemantic): Boolean2 {
      return this.eq(other);
    },

    eq(_other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): DeclarationManager<ValueDeclarationSemantic> {
      return this.left.attributes().union(this.right.attributes());
    },
  };

  return semantic;
}
