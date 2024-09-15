import {$, CloseNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type AngleCloseNode = CloseNode<$.AngleCloseNode>;

export function angleCloseNode(reference: TextResourceRange, text: TextData): AngleCloseNode {
  return lexicalNode({$: $.AngleCloseNode, reference, text});
}
