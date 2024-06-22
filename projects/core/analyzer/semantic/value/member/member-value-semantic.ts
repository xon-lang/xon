import {Nothing} from '../../../../../lib/types';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-reference';
import {$Semantic} from '../../semantic-node';
import {TypeSemantic} from '../../type/type-semantic';
import {ValueSemantic} from '../value-semantic';

export type MemberValueSemantic = ValueSemantic<$Semantic.MEMBER_VALUE>;

export function memberValueSemantic(
  reference: TextResourceRange,
  type: TypeSemantic | Nothing,
): MemberValueSemantic {
  return {
    $: $Semantic.MEMBER_VALUE,
    reference,
    type,
  };
}
