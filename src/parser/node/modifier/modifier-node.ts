import { Integer, String2 } from '~/lib/core';
import { NonHiddenLexicalNode } from '~/parser/node/lexical-node';
import { NodeType } from '../node-type';

export interface ModifierNode extends NonHiddenLexicalNode {
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
