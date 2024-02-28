import { String2 } from '../../../../lib/core';
import { SourceRange } from '../../../../source/source-range';
import { ARRAY_NODE_OPEN_CODE, GROUP_NODE_OPEN_CODE, OBJECT_NODE_OPEN_CODE } from '../../../syntax-config';
import { SyntaxContext } from '../../../syntax-context';
import { $Node } from '../../node';
import { TokenNode, tokenNode } from '../token-node';

export interface OpenNode extends TokenNode {
  $: $Node.OPEN;
}

export function openNode(range: SourceRange, text: String2): OpenNode {
  return tokenNode($Node.OPEN, range, text);
}

export function scanOpenNode(context: SyntaxContext): Partial<OpenNode> | null {
  const code = context.source.characters[context.position.index];

  if (code === GROUP_NODE_OPEN_CODE || code === ARRAY_NODE_OPEN_CODE || code === OBJECT_NODE_OPEN_CODE) {
    const text = context.source.text[context.position.index];
    const range = context.getRange(text.length, false);

    return openNode(range, text);
  }

  return null;
}
