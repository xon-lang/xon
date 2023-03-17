import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { IntegerNode } from '~/analysis/lexical/node/integer/integer-node';
import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { Node, NodeType } from '~/analysis/node';

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
