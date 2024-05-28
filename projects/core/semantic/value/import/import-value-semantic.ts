import {Nothing, nothing} from '../../../../lib/types';
import {Resource} from '../../../util/resource/resource';
import {TextResourceReference} from '../../../util/resource/resource-reference';
import {$Semantic} from '../../semantic';
import {ValueSemantic} from '../value-semantic';

export type ImportValueSemantic = ValueSemantic<$Semantic.IMPORT_VALUE> & {
  resource: Resource | Nothing;
};

export function importValueSemantic(
  reference: TextResourceReference,
  resource: Resource | Nothing,
): ImportValueSemantic {
  return {
    $: $Semantic.IMPORT_VALUE,
    reference,
    type: nothing,
    resource,
  };
}
