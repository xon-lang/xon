import {$, isSetOperatorTypeSemantic} from '../../../../../$';
import {Array2, Boolean2, Nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {DeclarationManager} from '../../../declaration-manager';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import { AttributeValueDeclarationSemantic } from '../../declaration/value/attribute/attribute-value-declaration-semantic';
import {ValueDeclarationSemantic} from '../../declaration/value/value-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface FunctionTypeSemantic extends TypeSemantic {
  $: $.FunctionTypeSemantic;
  parameters: Array2<DeclarationSemantic>;
  result: TypeSemantic;
}

export function functionTypeSemantic(
  nodeLink: Node | Nothing,
  parameters: Array2<DeclarationSemantic>,
  result: TypeSemantic,
): FunctionTypeSemantic {
  return {
    $: $.FunctionTypeSemantic,
    nodeLink,
    parameters,
    result,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      return false;
    },

    eq(_other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): DeclarationManager<AttributeValueDeclarationSemantic> {
      throw new Error('Not implemented');
    },
  };
}
