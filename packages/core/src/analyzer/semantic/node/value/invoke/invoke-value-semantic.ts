import {$} from '../../../../../$';
import {Node} from '../../../../node';
import {TypeSemantic} from '../../type/type-semantic';
import {ValueSemantic} from '../value-semantic';

export type InvokeValueSemantic = ValueSemantic<$.InvokeValueSemantic>;

export function invokeValueSemantic(nodeLink: Node, type: TypeSemantic): InvokeValueSemantic {
  return {
    $: $.InvokeValueSemantic,
    nodeLink,
    type,
  };
}
