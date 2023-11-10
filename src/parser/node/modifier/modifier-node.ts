import { Integer, String2 } from '~/lib/core';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface ModifierNode extends TokenNode {
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
