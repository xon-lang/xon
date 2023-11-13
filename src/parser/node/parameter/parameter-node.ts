import { IdNode } from '~/parser/node/id/id-node';
import { Node } from '~/parser/node/node';
import { NodeType } from '../node-type';

export interface ParameterNode extends Node {
  $: NodeType.PARAMETER;
  id: IdNode;
  type: Node | null;
  value: Node | null;
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
