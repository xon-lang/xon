import {$} from '../../../../../../$';
import {Boolean2} from '../../../../../../../lib/types';
import {Node} from '../../../../../node';
import {DeclarationManager} from '../../../../declaration-manager';
import {AttributeValueDeclarationSemantic} from '../../../declaration/value/attribute/attribute-value-declaration-semantic';
import {TypeSemantic} from '../../type-semantic';
import {SetTypeSemantic} from '../set';

export interface ComplementTypeSemantic extends SetTypeSemantic {
  $: $.ComplementTypeSemantic;
  left: TypeSemantic;
  right: TypeSemantic;
}

export function complementTypeSemantic(
  nodeLink: Node,
  left: TypeSemantic,
  right: TypeSemantic,
): ComplementTypeSemantic {
  const semantic: ComplementTypeSemantic = {
    $: $.ComplementTypeSemantic,
    nodeLink,
    left,
    right,

    is(other: TypeSemantic): Boolean2 {
      return this.eq(other);
    },

    eq(_other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): DeclarationManager<AttributeValueDeclarationSemantic> {
      return this.left.attributes().complement(this.right.attributes());
    },
  };

  return semantic;
}
