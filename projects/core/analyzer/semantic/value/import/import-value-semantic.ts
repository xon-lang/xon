import {Nothing, nothing} from '../../../../../lib/types';
import {Resource} from '../../../../util/resource/resource';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {$Semantic} from '../../node/semantic-node';
import {ValueSemantic} from '../value-semantic';

export type ImportValueSemantic = ValueSemantic<$Semantic.IMPORT_VALUE> & {
  resource: Resource | Nothing;
};

export function importValueSemantic(
  reference: TextResourceRange,
  resource?: Resource | Nothing,
): ImportValueSemantic {
  return {
    $: $Semantic.IMPORT_VALUE,
    reference,
    type: nothing,
    resource,
  };
}
