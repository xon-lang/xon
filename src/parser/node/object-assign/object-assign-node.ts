import { AssignNode } from '~/parser/node/assign/assign-node';
import { Node, addNodeChildren } from '~/parser/node/node';
import { ObjectNode } from '~/parser/node/object/object-node';
import { rangeFromNodes } from '~/source/source-range';
import { NodeType } from '../node-type';

export interface ObjectAssignNode extends Node {
  $: NodeType.OBJECT_ASSIGN;
  assignee: ObjectNode;
  assign: AssignNode;
}

export function objectAssignNode(assignee: ObjectNode, assign: AssignNode): ObjectAssignNode {
  const node: ObjectAssignNode = {
    $: NodeType.OBJECT_ASSIGN,
    range: rangeFromNodes(assignee, assign),
    assignee,
    assign,
  };

  addNodeChildren(node, assignee, assign);

  return node;
}
