import { String2 } from '../../../lib/core';
import { SourceRange } from '../../../source/source-range';
import { TokenNode } from '../node';
import { NodeType } from '../node-type';

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
