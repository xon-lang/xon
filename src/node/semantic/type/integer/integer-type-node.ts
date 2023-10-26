import { Integer } from '~/lib/core';
import { IntegerNode } from '~/node/custom/integer/integer-node';
import { NodeType } from '~/node/node';
import { TypeNode } from '~/node/semantic/type/type-node';

export interface IntegerTypeNode extends TypeNode {
  $: NodeType.TYPE_INTEGER;
  node: IntegerNode | null;
  value: Integer;
}

export function integerTypeNode(value: Integer, node: IntegerNode | null): IntegerTypeNode {
  return {
    $: NodeType.TYPE_INTEGER,
    node,
    value,
  };
}

export function parseIntegerTypeNode(node: IntegerNode): IntegerTypeNode {
  return integerTypeNode(Number(node.text), node);
}
