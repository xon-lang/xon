import { Node, NodeType } from '~/analysis/node';
import { IdNode } from '~/node/id/id-node';
import { IntegerNode } from '~/node/integer/integer-node';
import { OperatorNode } from '~/node/operator/operator-node';

export interface FloatNode extends Node {
  type: NodeType.FLOAT;
  point: OperatorNode;
  left: IntegerNode;
  right: IntegerNode | IdNode;
}

export function floatNode(point: OperatorNode, left: IntegerNode, right: IntegerNode | IdNode): FloatNode {
  return {
    type: NodeType.FLOAT,
    point,
    left,
    right,
  };
}
