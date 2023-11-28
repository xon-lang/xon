import { ArrayNode } from '~/parser/node/array/array-node';
import { AssignNode } from '~/parser/node/assign/assign-node';
import { Node, addNodeChildren } from '~/parser/node/node';
import { rangeFromNodes } from '~/source/source-range';
import { NodeType } from '../node-type';

export interface ArrayAssignNode extends Node {
  $: NodeType.ARRAY_ASSIGN;
  assignee: ArrayNode;
  assign: AssignNode;
}

export function arrayAssignNode(assignee: ArrayNode, assign: AssignNode): ArrayAssignNode {
  const node: ArrayAssignNode = {
    $: NodeType.ARRAY_ASSIGN,
    range: rangeFromNodes(assignee, assign),
    assignee,
    assign,
  };

  addNodeChildren(node, assignee, assign);

  return node;
}
