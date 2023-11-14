import { MODIFIERS } from '~/parser/util/operators';
import { NodeType } from '../node-type';
import { TokenNode } from '../token-node';

export type ModifierText = (typeof MODIFIERS)[number];

export interface ModifierNode extends TokenNode {
  $: NodeType.MODIFIER;
  text: ModifierText;
}

export function modifierNode(text: ModifierText): Partial<ModifierNode> {
  return {
    $: NodeType.MODIFIER,
    text,
  };
}
