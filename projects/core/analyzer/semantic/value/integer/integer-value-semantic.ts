import {TextResourceReference} from '../../../../util/resource/resource-reference';
import {$Semantic} from '../../semantic';
import {IntegerTypeSemantic} from '../../type/integer/integer-type-semantic';
import {ValueSemantic} from '../value-semantic';

export type IntegerValueSemantic = ValueSemantic<$Semantic.INTEGER_VALUE, IntegerTypeSemantic>;

export function integerValueSemantic(
  reference: TextResourceReference,
  type: IntegerTypeSemantic,
): IntegerValueSemantic {
  return {
    $: $Semantic.INTEGER_VALUE,
    reference,
    type,
  };
}
