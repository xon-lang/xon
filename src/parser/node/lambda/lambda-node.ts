import { AssignNode } from '../../../parser/node/assign/assign-node';
import { GroupNode } from '../../../parser/node/group/group-node';
import { Node, addNodeParent } from '../../../parser/node/node';
import { rangeFromNodes } from '../../../source/source-range';
import { NodeType } from '../node-type';

export interface LambdaNode extends Node {
  $: NodeType.LAMBDA;
  // todo mb parameters node
  assignee: GroupNode;
  assign: AssignNode;
}

export function lambdaNode(assignee: GroupNode, assign: AssignNode): LambdaNode {
  const node: LambdaNode = {
    $: NodeType.LAMBDA,
    range: rangeFromNodes(assignee, assign),
    assignee,
    assign,
  };

  addNodeParent(node, assignee, assign);

  return node;
}
