import { String2 } from '../../../lib/core';
import { SourceRange } from '../../../source/source-range';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export interface ModifierNode extends TokenNode {
  $: NodeType.MODIFIER;
  text: String2;
}

export function modifierNode(range: SourceRange, text: String2): ModifierNode {
  return {
    $: NodeType.MODIFIER,
    range,
    text,
  };
}
