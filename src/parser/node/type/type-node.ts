import { Node } from '~/parser/node/node';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { rangeFromNodes } from '../../../source/source-range';
import { NodeType } from '../node-type';

export interface TypeNode extends Node {
  $: NodeType.TYPE;
  operator: OperatorNode;
  value: Node;
}

export function typeNode(operator: OperatorNode, value: Node): TypeNode {
  return {
    $: NodeType.TYPE,
    range: rangeFromNodes(operator, value),
    operator,
    value,
  };
}
