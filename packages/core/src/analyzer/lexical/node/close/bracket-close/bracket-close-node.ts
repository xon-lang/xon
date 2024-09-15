import {$, CloseNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type BracketCloseNode = CloseNode<$.BracketCloseNode>;

export function bracketCloseNode(reference: TextResourceRange, text: TextData): BracketCloseNode {
  return lexicalNode({$: $.BracketCloseNode, reference, text});
}
