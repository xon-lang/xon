import {$} from '../../../../../$';
import {Node} from '../../../../node';
import {CharTypeSemantic} from '../../type/char/char-type-semantic';
import {ValueSemantic} from '../value-semantic';

export type CharValueSemantic = ValueSemantic<$.CharValueSemantic, CharTypeSemantic>;

export function charValueSemantic(nodeLink: Node, type: CharTypeSemantic): CharValueSemantic {
  return {
    $: $.CharValueSemantic,
    nodeLink,
    type,
  };
}
