import {$Node} from '../../../../../$';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {IntegerTypeSemantic} from '../../type/integer/integer-type-semantic';
import {ValueSemantic} from '../value-semantic';

export type IntegerValueSemantic = ValueSemantic<$Node.IntegerValueSemantic, IntegerTypeSemantic>;

export function integerValueSemantic(
  reference: TextResourceRange,
  type: IntegerTypeSemantic,
): IntegerValueSemantic {
  return {
    $: $Node.IntegerValueSemantic,
    reference,
    type,
  };
}
