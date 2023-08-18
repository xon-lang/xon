import { NodeType, Token } from '~/analysis/node';
import { Integer, String2 } from '~/lib/core';

export interface ModifierNode extends Token {
  $: NodeType.MODIFIER;
}

export function modifierNode(start: Integer, stop: Integer, text: String2): ModifierNode {
  return {
    $: NodeType.MODIFIER,
    hidden: [],
    start,
    stop,
    text,
  };
}
