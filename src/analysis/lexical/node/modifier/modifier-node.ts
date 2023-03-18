import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { NodeType } from '~/analysis/node';
import { Integer, String2 } from '~/lib/core';

export interface ModifierNode extends LexicalNode {
  $: NodeType.MODIFIER;
}

export function modifierNode(start: Integer, stop: Integer, text: String2): ModifierNode {
  return {
    $: NodeType.MODIFIER,
    start,
    stop,
    text,
  };
}
