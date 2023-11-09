import { Node, NodeType } from '~/parser/lexical/node';
import { OperatorNode } from '~/parser/lexical/operator/operator-node';
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
