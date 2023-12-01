import { MODIFIERS } from '~/parser/util/operators';
import { SourceRange } from '~/source/source-range';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export type ModifierText = (typeof MODIFIERS)[number];

export interface ModifierNode extends TokenNode {
  $: NodeType.MODIFIER;
  text: ModifierText;
}

export function modifierNode(range: SourceRange, text: ModifierText): ModifierNode {
  return {
    $: NodeType.MODIFIER,
    range,
    text,
  };
}
