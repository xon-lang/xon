import { Node } from '~/parser/node/node';
import { textRangeFromNodes } from '~/parser/node/node-position';
import { NodeType } from '../node-type';

export interface TypeNode extends Node {
  $: NodeType.TYPE;
  operator: Node;
  value: Node;
}

export function typeNode(operator: Node, value: Node): TypeNode {
  return {
    $: NodeType.TYPE,
    range: textRangeFromNodes(operator, value),
    operator,
    value,
  };
}
