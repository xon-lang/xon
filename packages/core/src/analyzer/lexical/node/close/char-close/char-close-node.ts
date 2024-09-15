import {$, CloseNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type CharCloseNode = CloseNode<$.CharCloseNode>;

export function charCloseNode(reference: TextResourceRange, text: TextData): CharCloseNode {
  return lexicalNode({$: $.CharCloseNode, reference, text});
}
