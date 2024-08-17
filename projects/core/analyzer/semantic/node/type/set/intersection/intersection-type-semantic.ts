import {$} from '../../../../../../$';
import {Boolean2} from '../../../../../../../lib/types';
import {Node} from '../../../../../node';
import {DeclarationManager} from '../../../../declaration-manager';
import {AttributeValueDeclarationSemantic} from '../../../declaration/value/attribute/attribute-value-declaration-semantic';
import {TypeSemantic} from '../../type-semantic';
import {SetTypeSemantic} from '../set';

export interface IntersectionTypeSemantic extends SetTypeSemantic {
  $: $.IntersectionTypeSemantic;
  left: TypeSemantic;
  right: TypeSemantic;
}

export function intersectionTypeSemantic(
  nodeLink: Node,
  left: TypeSemantic,
  right: TypeSemantic,
): IntersectionTypeSemantic {
  const semantic: IntersectionTypeSemantic = {
    $: $.IntersectionTypeSemantic,
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
      return this.left.attributes().intersection(this.right.attributes());
    },
  };

  return semantic;
}
