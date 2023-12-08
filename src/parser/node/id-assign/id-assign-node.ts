import { AssignNode } from '../../../parser/node/assign/assign-node';
import { IdNode } from '../../../parser/node/id/id-node';
import { Node, addNodeParent } from '../../../parser/node/node';
import { rangeFromNodes } from '../../../source/source-range';
import { NodeType } from '../node-type';

export interface IdAssignNode extends Node {
  $: NodeType.ID_ASSIGN;
  assignee: IdNode;
  assign: AssignNode;
}

export function idAssignNode(assignee: IdNode, assign: AssignNode): IdAssignNode {
  const node: IdAssignNode = {
    $: NodeType.ID_ASSIGN,
    range: rangeFromNodes(assignee, assign),
    assignee,
    assign,
  };

  addNodeParent(node, assignee, assign);

  return node;
}
