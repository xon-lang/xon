import {$, isSetOperatorTypeSemantic} from '../../../../../$';
import {Array2, Boolean2, Nothing, String2} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface FunctionTypeSemantic extends TypeSemantic {
  $: $.FunctionTypeSemantic;
  generics: Array2<TypeSemantic | Nothing> | Nothing;
  parameters: Array2<DeclarationSemantic | Nothing>;
  result: TypeSemantic | Nothing;
}

export function functionTypeSemantic(
  reference: TextResourceRange,
  generics: Array2<TypeSemantic | Nothing> | Nothing,
  parameters: Array2<DeclarationSemantic | Nothing>,
  result: TypeSemantic | Nothing,
): FunctionTypeSemantic {
  const semantic: FunctionTypeSemantic = {
    $: $.FunctionTypeSemantic,
    reference,
    generics,
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

    attributes(): Record<String2, Array2<TypeSemantic>> {
      return {};
    },
  };

  return semantic;
}
