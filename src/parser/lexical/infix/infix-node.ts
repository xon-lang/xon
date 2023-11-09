import { SyntacticNode } from '~/parser/lexical/lexical-node';
import { Node, NodeType } from '~/parser/lexical/node';
import { OperatorNode } from '~/parser/lexical/operator/operator-node';

export interface InfixNode extends SyntacticNode {
  $: NodeType.INFIX;
  operator: OperatorNode;
  left: Node;
  right: Node;
}

export function infixNode(operator: OperatorNode, left: SyntacticNode, right: SyntacticNode): InfixNode {
  return {
    $: NodeType.INFIX,
    start: left.start,
    stop: right.stop,
    operator,
    left,
    right,
  };
}
