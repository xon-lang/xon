import {Nothing} from '../../../../../lib/types';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {$Semantic} from '../../node/semantic-node';
import {TypeSemantic} from '../../type/type-semantic';
import {ValueSemantic} from '../value-semantic';

export type InvokeValueSemantic = ValueSemantic<$Semantic.INVOKE_VALUE>;

export function invokeValueSemantic(
  reference: TextResourceRange,
  type: TypeSemantic | Nothing,
): InvokeValueSemantic {
  return {
    $: $Semantic.INVOKE_VALUE,
    reference,
    type,
  };
}
