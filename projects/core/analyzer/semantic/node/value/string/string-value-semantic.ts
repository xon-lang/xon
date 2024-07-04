import {$} from '../../../../../$';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {StringTypeSemantic} from '../../type/string/string-type-semantic';
import {ValueSemantic} from '../value-semantic';

export type StringValueSemantic = ValueSemantic<$.StringValueSemantic, StringTypeSemantic>;

export function stringValueSemantic(
  reference: TextResourceRange,
  type: StringTypeSemantic,
): StringValueSemantic {
  return {
    $: $.StringValueSemantic,
    reference,
    type,
  };
}
