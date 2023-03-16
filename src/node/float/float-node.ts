import { IdNode } from '~/node/id/id-node';
import { InfixNode } from '~/node/infix/infix-node';
import { IntegerNode } from '~/node/integer/integer-node';
import { NodeType } from '~/node/node';
import { OperatorNode } from '~/node/operator/operator-node';

export interface FloatNode extends InfixNode {
  type: NodeType.FLOAT;
  left: IntegerNode;
  right: IntegerNode | IdNode;
}

export function floatNode(operator: OperatorNode, left: IntegerNode, right: IntegerNode | IdNode): FloatNode {
  return {
    type: NodeType.FLOAT,
    operator,
    left,
    right,
  };
}
