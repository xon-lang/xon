import {$, LexicalNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type UnknownNode = LexicalNode<$.UnknownNode>;

export function unknownNode(reference: TextResourceRange, text: TextData): UnknownNode {
  return lexicalNode({$: $.UnknownNode, reference, text});
}
