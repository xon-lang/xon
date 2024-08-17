import {$} from '../../../../../../$';
import {Boolean2, Nothing} from '../../../../../../../lib/types';
import {Node} from '../../../../../node';
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
  nodeLink: Node | Nothing,
  left: TypeSemantic,
  right: TypeSemantic,
): UnionTypeSemantic {
  const semantic: UnionTypeSemantic = {
    $: $.UnionTypeSemantic,
    nodeLink,
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
