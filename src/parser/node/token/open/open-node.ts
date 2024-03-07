import {String2} from '../../../../lib/core';
import {SourceRange} from '../../../../source/source-range';
import {ARRAY_NODE_OPEN, GROUP_NODE_OPEN, OBJECT_NODE_OPEN} from '../../../syntax-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface OpenNode extends TokenNode {
  $: $Node.OPEN;
}

export function openNode(range: SourceRange, text: String2): OpenNode {
  return tokenNode($Node.OPEN, range, text);
}

export function scanOpenNode(context: SyntaxContext): Partial<OpenNode> | null {
  const char = context.source.text[context.position.index];

  if (char === GROUP_NODE_OPEN || char === ARRAY_NODE_OPEN || char === OBJECT_NODE_OPEN) {
    const text = context.source.text[context.position.index];
    const range = context.getRange(text.length, false);

    return openNode(range, text);
  }

  return null;
}
