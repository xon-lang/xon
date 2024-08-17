import {$} from '../../../../../$';
import {Nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {TypeSemantic} from '../../type/type-semantic';
import {ValueSemantic} from '../value-semantic';

export type InvokeValueSemantic = ValueSemantic<$.InvokeValueSemantic>;

export function invokeValueSemantic(nodeLink: Node | Nothing, type: TypeSemantic): InvokeValueSemantic {
  return {
    $: $.InvokeValueSemantic,
    nodeLink,
    type,
  };
}
