import { Node, addNodeParent } from '../../../parser/node/node';
import { OperatorNode } from '../../../parser/node/operator/operator-node';
import { rangeFromNodes } from '../../../source/source-range';
import { NodeType } from '../node-type';

export interface AssignNode extends Node {
  $: NodeType.ASSIGN;
  operator: OperatorNode;
  value: Node | null;
}

export function assignNode(operator: OperatorNode, value: Node | null): AssignNode {
  const node: AssignNode = {
    $: NodeType.ASSIGN,
    range: rangeFromNodes(operator, value ?? operator),
    operator,
    value,
  };

  addNodeParent(node, operator, value);

  return node;
}
