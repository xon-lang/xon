import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {$Semantic} from '../../semantic-node';
import {IntegerTypeSemantic} from '../../type/integer/integer-type-semantic';
import {ValueSemantic} from '../value-semantic';

export type IntegerValueSemantic = ValueSemantic<$Semantic.INTEGER_VALUE, IntegerTypeSemantic>;

export function integerValueSemantic(
  reference: TextResourceRange,
  type: IntegerTypeSemantic,
): IntegerValueSemantic {
  return {
    $: $Semantic.INTEGER_VALUE,
    reference,
    type,
  };
}
