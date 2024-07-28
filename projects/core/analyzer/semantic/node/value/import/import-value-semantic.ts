import {$} from '../../../../../$';
import {Nothing} from '../../../../../../lib/types';
import {Resource} from '../../../../../util/resource/resource';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {TypeSemantic} from '../../type/type-semantic';
import {ValueSemantic} from '../value-semantic';

export type ImportValueSemantic = ValueSemantic<$.ImportValueSemantic> & {
  resource: Resource | Nothing;
};

export function importValueSemantic(
  reference: TextResourceRange,
  resource: Resource | Nothing,
  type: TypeSemantic,
): ImportValueSemantic {
  return {
    $: $.ImportValueSemantic,
    reference,
    type,
    resource,
  };
}
