import { CloseNode } from '~/parser/node/close/close-node';
import { Node } from '~/parser/node/node';
import { OpenNode } from '~/parser/node/open/open-node';
import { ParameterNode } from '~/parser/node/parameter/parameter-node';
import { NodeType } from '../node-type';

export interface ParametersNode extends Node {
  $: NodeType.PARAMETERS;
  open: OpenNode;
  close: CloseNode | null;
  parameter: ParameterNode[];
}

// export function modelNode(modifier: ModifierNode, id: IdNode, base: Node | null, attributes: Node[]): ModelNode {
//   const left = modifier ?? id ?? base ?? value;
//   const right = value ?? base ?? id ?? modifier;

//   if (!left || !right) {
//     throw new Error('Not implemented');
//   }

//   return {
//     $: NodeType.DECLARATION,
//     start: clonePosition(left.start),
//     stop: clonePosition(right.stop),
//     modifier,
//     id,
//     base,
//     value,
//   };
// }
