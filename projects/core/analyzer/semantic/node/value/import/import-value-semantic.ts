import {$Node} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {Resource} from '../../../../../util/resource/resource';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {ValueSemantic} from '../value-semantic';

export type ImportValueSemantic = ValueSemantic<$Node.ImportValueSemantic> & {
  resource: Resource | Nothing;
};

export function importValueSemantic(
  reference: TextResourceRange,
  resource?: Resource | Nothing,
): ImportValueSemantic {
  return {
    $: $Node.ImportValueSemantic,
    reference,
    type: nothing,
    resource,
  };
}
