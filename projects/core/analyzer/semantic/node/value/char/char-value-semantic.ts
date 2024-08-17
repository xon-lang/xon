import {$} from '../../../../../$';
import {Nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {CharTypeSemantic} from '../../type/char/char-type-semantic';
import {ValueSemantic} from '../value-semantic';

export type CharValueSemantic = ValueSemantic<$.CharValueSemantic, CharTypeSemantic>;

export function charValueSemantic(nodeLink: Node | Nothing, type: CharTypeSemantic): CharValueSemantic {
  return {
    $: $.CharValueSemantic,
    nodeLink,
    type,
  };
}
