import {Nothing} from '../../../../lib/types';
import {TextResourceReference} from '../../../util/resource/resource-reference';
import {$Semantic} from '../../semantic';
import {TypeSemantic} from '../../type/type-semantic';
import {ValueSemantic} from '../value-semantic';

export type MemberValueSemantic = ValueSemantic<$Semantic.MEMBER_VALUE>;

export function memberValueSemantic(
  reference: TextResourceReference,
  type: TypeSemantic | Nothing,
): MemberValueSemantic {
  return {
    $: $Semantic.MEMBER_VALUE,
    reference,
    type,
  };
}
