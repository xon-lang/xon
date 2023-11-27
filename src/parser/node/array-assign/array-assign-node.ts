import { ArrayNode } from '~/parser/node/array/array-node';
import { AssignNode } from '~/parser/node/assign/assign-node';
import { Node, addNodeChildren } from '~/parser/node/node';
import { rangeFromNodes } from '~/source/source-range';
import { NodeType } from '../node-type';

export interface ArrayAssignNode extends Node {
  $: NodeType.ARRAY_ASSIGN;
  array: ArrayNode;
  assign: AssignNode;
}

export function arrayAssignNode(array: ArrayNode, assign: AssignNode): ArrayAssignNode {
  const node: ArrayAssignNode = {
    $: NodeType.ARRAY_ASSIGN,
    range: rangeFromNodes(array, assign),
    array,
    assign,
  };

  addNodeChildren(node, array, assign);

  return node;
}
