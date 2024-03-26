import {Nothing, String2, nothing} from '../../../../lib/core';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {ARRAY_NODE_OPEN, GROUP_NODE_OPEN, OBJECT_NODE_OPEN} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface OpenNode extends TokenNode {
  $: $Node.OPEN;
}

export function openNode(range: TextResourceRange, text: String2): OpenNode {
  return tokenNode($Node.OPEN, {range, text});
}

export function scanOpenNode(context: SyntaxContext): Partial<OpenNode> | Nothing {
  const char = context.resource.data[context.position.index];

  if (char === GROUP_NODE_OPEN || char === ARRAY_NODE_OPEN || char === OBJECT_NODE_OPEN) {
    const text = context.resource.data[context.position.index];
    const range = context.getRange(text.length, false);

    return openNode(range, text);
  }

  return nothing;
}
