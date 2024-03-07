import {Nothing, String2, nothing} from '../../../../lib/core';
import {SourceRange} from '../../../../source/source-range';
import {ARRAY_NODE_CLOSE_CODE, GROUP_NODE_CLOSE_CODE, OBJECT_NODE_CLOSE_CODE} from '../../../syntax-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {TokenNode, tokenNode} from '../token-node';

export interface CloseNode extends TokenNode {
  $: $Node.CLOSE;
}

export function closeNode(range: SourceRange, text: String2): CloseNode {
  return tokenNode($Node.CLOSE, range, text);
}

export function scanCloseNode(context: SyntaxContext): CloseNode | Nothing {
  const char = context.source.text[context.position.index];

  if (char === GROUP_NODE_CLOSE_CODE || char === ARRAY_NODE_CLOSE_CODE || char === OBJECT_NODE_CLOSE_CODE) {
    const text = context.source.text[context.position.index];
    const range = context.getRange(1, false);

    return closeNode(range, text);
  }

  return nothing;
}
