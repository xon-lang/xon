import {$} from '../../../../../$';
import {Nothing} from '../../../../../../lib/types';
import {Resource} from '../../../../../util/resource/resource';
import {Node} from '../../../../node';
import {TypeSemantic} from '../../type/type-semantic';
import {ValueSemantic} from '../value-semantic';

export type ImportValueSemantic = ValueSemantic<$.ImportValueSemantic> & {
  resource: Resource | Nothing;
};

export function importValueSemantic(
  nodeLink: Node,
  resource: Resource | Nothing,
  type: TypeSemantic,
): ImportValueSemantic {
  return {
    $: $.ImportValueSemantic,
    nodeLink,
    type,
    resource,
  };
}
