import {$} from '../../../../../$';
import {Nothing} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {TypeSemantic} from '../../type/type-semantic';
import {ValueSemantic} from '../value-semantic';

export type MemberValueSemantic = ValueSemantic<$.MemberValueSemantic>;

export function memberValueSemantic(
  reference: TextResourceRange,
  type: TypeSemantic | Nothing,
): MemberValueSemantic {
  return {
    $: $.MemberValueSemantic,
    reference,
    type,
  };
}
