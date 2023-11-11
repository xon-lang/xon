import { String2 } from '~/lib/core';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface ModifierNode extends TokenNode {
  $: NodeType.MODIFIER;
}

export function modifierNode(text: String2): Partial<ModifierNode> {
  return {
    $: NodeType.MODIFIER,
    text,
  };
}
