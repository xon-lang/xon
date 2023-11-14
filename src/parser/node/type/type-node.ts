import { Node } from '~/parser/node/node';
import { clonePosition } from '~/parser/node/node-position';
import { NodeType } from '../node-type';

export interface TypeNode extends Node {
  $: NodeType.TYPE;
  operator: Node;
  value: Node;
}

export function typeNode(operator: Node, value: Node): TypeNode {
  return {
    $: NodeType.TYPE,
    start: clonePosition(operator.start),
    stop: clonePosition(value.stop),
    operator,
    value,
  };
}
