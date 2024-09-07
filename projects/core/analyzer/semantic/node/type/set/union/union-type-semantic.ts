import {$} from '../../../../../../$';
import {Boolean2} from '../../../../../../../lib/types';
import {Node} from '../../../../../node';
import {DeclarationScope} from '../../../../declaration-scope';
import {AttributeValueDeclarationSemantic} from '../../../declaration/value/attribute/attribute-value-declaration-semantic';
import {TypeSemantic} from '../../type-semantic';
import {SetTypeSemantic} from '../set';

export interface UnionTypeSemantic extends SetTypeSemantic {
  $: $.UnionTypeSemantic;
  left: TypeSemantic;
  right: TypeSemantic;
}

export function unionTypeSemantic(
  nodeLink: Node,
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

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return this.left.attributes().union(this.right.attributes());
    },
  };

  return semantic;
}
