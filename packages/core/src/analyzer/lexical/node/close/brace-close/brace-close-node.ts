import {$, CloseNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type BraceCloseNode = CloseNode<$.BraceCloseNode>;

export function braceCloseNode(reference: TextResourceRange, text: TextData): BraceCloseNode {
  return lexicalNode({$: $.BraceCloseNode, reference, text});
}
