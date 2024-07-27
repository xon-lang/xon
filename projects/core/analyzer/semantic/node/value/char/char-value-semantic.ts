import {$} from '../../../../../$';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {CharTypeSemantic} from '../../type/char/char-type-semantic';
import {ValueSemantic} from '../value-semantic';

export type CharValueSemantic = ValueSemantic<$.CharValueSemantic, CharTypeSemantic>;

export function charValueSemantic(reference: TextResourceRange, type: CharTypeSemantic): CharValueSemantic {
  return {
    $: $.CharValueSemantic,
    reference,
    type,
  };
}
