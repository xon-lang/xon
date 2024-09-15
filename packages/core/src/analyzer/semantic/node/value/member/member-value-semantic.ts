import {$} from '../../../../../$';
import {Nothing, String2} from '../../../../../../../lib/src/types';
import {Node} from '../../../../node';
import {TypeSemantic} from '../../type/type-semantic';
import {ValueSemantic} from '../value-semantic';

export type MemberValueSemantic = ValueSemantic<$.MemberValueSemantic> & {
  instance: ValueSemantic;
  name: String2 | Nothing;
};

export function memberValueSemantic(
  nodeLink: Node,
  instance: ValueSemantic,
  name: String2 | Nothing,
  type: TypeSemantic,
): MemberValueSemantic {
  return {
    $: $.MemberValueSemantic,
    nodeLink,
    instance,
    name,
    type,
  };
}
