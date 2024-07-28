import {$} from '../../../../../$';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {TypeSemantic} from '../../type/type-semantic';
import {ValueSemantic} from '../value-semantic';

export type InvokeValueSemantic = ValueSemantic<$.InvokeValueSemantic>;

export function invokeValueSemantic(reference: TextResourceRange, type: TypeSemantic): InvokeValueSemantic {
  return {
    $: $.InvokeValueSemantic,
    reference,
    type,
  };
}
