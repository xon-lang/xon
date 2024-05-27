import {TextResourceReference} from '../../../util/resource/resource-reference';
import {$Semantic} from '../../semantic';
import {StringTypeSemantic} from '../../type/string/string-type-semantic';
import {ValueSemantic} from '../value-semantic';

export type StringValueSemantic = ValueSemantic<$Semantic.STRING_VALUE, StringTypeSemantic>;

export function stringValueSemantic(reference: TextResourceReference, type: StringTypeSemantic): StringValueSemantic {
  return {
    $: $Semantic.STRING_VALUE,
    reference,
    type,
  };
}
