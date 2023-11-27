import { AssignNode } from '~/parser/node/assign/assign-node';
import { IdNode } from '~/parser/node/id/id-node';
import { Node, addNodeChildren } from '~/parser/node/node';
import { rangeFromNodes } from '~/source/source-range';
import { NodeType } from '../node-type';

export interface IdAssignNode extends Node {
  $: NodeType.ID_ASSIGN;
  id: IdNode;
  assign: AssignNode;
}

export function idAssignNode(id: IdNode, assign: AssignNode): IdAssignNode {
  const node: IdAssignNode = {
    $: NodeType.ID_ASSIGN,
    range: rangeFromNodes(id, assign),
    id,
    assign,
  };

  addNodeChildren(node, id, assign);

  return node;
}
