import { Node } from '~/parser/node/node';
import { rangeFromNodes } from '../../../source/source-range';
import { NodeType } from '../node-type';

export interface AssignNode extends Node {
  $: NodeType.ASSIGN;
  operator: Node;
  value: Node;
}

export function assignNode(operator: Node, value: Node): AssignNode {
  return {
    $: NodeType.ASSIGN,
    range: rangeFromNodes(operator, value),
    operator,
    value,
  };
}
