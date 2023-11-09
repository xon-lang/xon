import { SyntacticNode } from '~/parser/node/lexical-node';
import { Node } from '~/parser/node/node';
import { OperatorNode } from '~/parser/node/operator/operator-node';
import { NodeType } from '../node-type';

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
