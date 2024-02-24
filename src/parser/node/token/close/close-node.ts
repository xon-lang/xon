import { String2 } from '../../../../lib/core';
import { SourceRange } from '../../../../source/source-range';
import { ARRAY_NODE_CLOSE_CODE, GROUP_NODE_CLOSE_CODE, OBJECT_NODE_CLOSE_CODE } from '../../../syntax-config';
import { SyntaxContext } from '../../../syntax-context';
import { $Node } from '../../node';
import { TokenNode, token } from '../token-node';

export interface CloseNode extends TokenNode {
  $: $Node.CLOSE;
}

export function closeNode(range: SourceRange, text: String2): CloseNode {
  return token($Node.CLOSE, range, text);
}

export function scanCloseNode(context: SyntaxContext): CloseNode | null {
  const code = context.source.characters[context.position.index];

  if (code === GROUP_NODE_CLOSE_CODE || code === ARRAY_NODE_CLOSE_CODE || code === OBJECT_NODE_CLOSE_CODE) {
    const text = context.source.text[context.position.index];
    const range = context.getRange(1);

    return closeNode(range, text);
  }

  return null;
}
