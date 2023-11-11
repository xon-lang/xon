import { Node } from '~/parser/node/node';
import { clonePosition } from '~/parser/node/node-position';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { NodeType } from '../node-type';

export interface PrefixNode extends Node {
  $: NodeType.PREFIX;
  operator: OperatorNode;
  value: Node;
}

export function prefixNode(operator: OperatorNode, value: Node): PrefixNode {
  return {
    $: NodeType.PREFIX,
    start: clonePosition(operator.start),
    stop: clonePosition(value.stop),
    operator,
    value,
  };
}
