import { Node } from '~/parser/node/node';
import { clonePosition } from '~/parser/node/node-position';
import { NodeType } from '../node-type';

export interface AssignNode extends Node {
  $: NodeType.ASSIGN;
  operator: Node;
  value: Node;
}

export function assignNode(operator: Node, value: Node): AssignNode {
  return {
    $: NodeType.ASSIGN,
    start: clonePosition(operator.start),
    stop: clonePosition(value.stop),
    operator,
    value,
  };
}
