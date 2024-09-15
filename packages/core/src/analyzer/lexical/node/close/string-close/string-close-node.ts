import {$, CloseNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type StringCloseNode = CloseNode<$.StringCloseNode>;

export function stringCloseNode(reference: TextResourceRange, text: TextData): StringCloseNode {
  return lexicalNode({$: $.StringCloseNode, reference, text});
}
