import { OperatorNode } from '~/node/lexical/operator/operator-node';
import { Node, NodeType } from '~/node/node';
import { SyntacticNode } from '../syntactic-node';

export interface PrefixNode extends SyntacticNode {
  $: NodeType.PREFIX;
  operator: OperatorNode;
  value: Node;
}

export function prefixNode(operator: OperatorNode, value: Node): PrefixNode {
  return {
    $: NodeType.PREFIX,
    start: operator.start,
    stop: value.stop,
    operator,
    value,
  };
}
