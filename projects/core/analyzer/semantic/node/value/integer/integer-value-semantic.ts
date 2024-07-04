import {$} from '../../../../../$';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {IntegerTypeSemantic} from '../../type/integer/integer-type-semantic';
import {ValueSemantic} from '../value-semantic';

export type IntegerValueSemantic = ValueSemantic<$.IntegerValueSemantic, IntegerTypeSemantic>;

export function integerValueSemantic(
  reference: TextResourceRange,
  type: IntegerTypeSemantic,
): IntegerValueSemantic {
  return {
    $: $.IntegerValueSemantic,
    reference,
    type,
  };
}
