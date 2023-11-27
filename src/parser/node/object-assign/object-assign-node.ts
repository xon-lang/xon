import { AssignNode } from '~/parser/node/assign/assign-node';
import { Node, addNodeChildren } from '~/parser/node/node';
import { ObjectNode } from '~/parser/node/object/object-node';
import { rangeFromNodes } from '~/source/source-range';
import { NodeType } from '../node-type';

export interface ObjectAssignNode extends Node {
  $: NodeType.OBJECT_ASSIGN;
  object: ObjectNode;
  assign: AssignNode;
}

export function objectAssignNode(object: ObjectNode, assign: AssignNode): ObjectAssignNode {
  const node: ObjectAssignNode = {
    $: NodeType.OBJECT_ASSIGN,
    range: rangeFromNodes(object, assign),
    object,
    assign,
  };

  addNodeChildren(node, object, assign);

  return node;
}
