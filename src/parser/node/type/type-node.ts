import { Node } from '~/parser/node/node';
import { rangeFromNodes } from '../../../source/source-range';
import { NodeType } from '../node-type';

export interface TypeNode extends Node {
  $: NodeType.TYPE;
  operator: Node;
  value: Node;
}

export function typeNode(operator: Node, value: Node): TypeNode {
  return {
    $: NodeType.TYPE,
    range: rangeFromNodes(operator, value),
    operator,
    value,
  };
}
