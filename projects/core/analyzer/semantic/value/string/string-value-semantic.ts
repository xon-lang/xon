import {TextResourceRange} from '../../../../util/resource/text/text-resource-reference';
import {$Semantic} from '../../node/semantic-node';
import {StringTypeSemantic} from '../../type/string/string-type-semantic';
import {ValueSemantic} from '../value-semantic';

export type StringValueSemantic = ValueSemantic<$Semantic.STRING_VALUE, StringTypeSemantic>;

export function stringValueSemantic(
  reference: TextResourceRange,
  type: StringTypeSemantic,
): StringValueSemantic {
  return {
    $: $Semantic.STRING_VALUE,
    reference,
    type,
  };
}
