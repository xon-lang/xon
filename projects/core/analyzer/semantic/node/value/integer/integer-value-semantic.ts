import {$} from '../../../../../$';
import {Nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {IntegerTypeSemantic} from '../../type/integer/integer-type-semantic';
import {ValueSemantic} from '../value-semantic';

export type IntegerValueSemantic = ValueSemantic<$.IntegerValueSemantic, IntegerTypeSemantic>;

export function integerValueSemantic(
  nodeLink: Node | Nothing,
  type: IntegerTypeSemantic,
): IntegerValueSemantic {
  return {
    $: $.IntegerValueSemantic,
    nodeLink,
    type,
  };
}
