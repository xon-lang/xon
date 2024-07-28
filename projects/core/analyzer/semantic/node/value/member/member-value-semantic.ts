import {$} from '../../../../../$';
import {Nothing, String2} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {TypeSemantic} from '../../type/type-semantic';
import {ValueSemantic} from '../value-semantic';

export type MemberValueSemantic = ValueSemantic<$.MemberValueSemantic> & {
  instance: ValueSemantic;
  name: String2 | Nothing;
};

export function memberValueSemantic(
  reference: TextResourceRange,
  instance: ValueSemantic,
  name: String2 | Nothing,
  type: TypeSemantic,
): MemberValueSemantic {
  return {
    $: $.MemberValueSemantic,
    reference,
    instance,
    name,
    type,
  };
}
