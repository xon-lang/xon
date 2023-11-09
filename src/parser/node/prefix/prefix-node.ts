import { Node, NodeType } from '~/parser/node/node';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { SyntacticNode } from '../lexical-node';

export interface PrefixNode extends SyntacticNode {
  $: NodeType.PREFIX;
  operator: OperatorNode;
  value: Node;
}

export function prefixNode(operator: OperatorNode, value: SyntacticNode): PrefixNode {
  return {
    $: NodeType.PREFIX,
    start: operator.start,
    stop: value.stop,
    operator,
    value,
  };
}
