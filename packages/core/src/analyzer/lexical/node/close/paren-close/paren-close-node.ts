import {$, CloseNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type ParenCloseNode = CloseNode<$.ParenCloseNode>;

export function parenCloseNode(reference: TextResourceRange, text: TextData): ParenCloseNode {
  return lexicalNode({$: $.ParenCloseNode, reference, text});
}
