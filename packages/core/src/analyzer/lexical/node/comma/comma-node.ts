import {$, LexicalNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type CommaNode = LexicalNode<$.CommaNode>;

export function commaNode(reference: TextResourceRange, text: TextData): CommaNode {
  return lexicalNode({$: $.CommaNode, reference, text});
}
