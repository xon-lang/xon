import {$} from '../../../../../$';
import {Node} from '../../../../node';
import {IntegerTypeSemantic} from '../../type/integer/integer-type-semantic';
import {ValueSemantic} from '../value-semantic';

export type IntegerValueSemantic = ValueSemantic<$.IntegerValueSemantic, IntegerTypeSemantic>;

export function integerValueSemantic(nodeLink: Node, type: IntegerTypeSemantic): IntegerValueSemantic {
  return {
    $: $.IntegerValueSemantic,
    nodeLink,
    type,
  };
}
