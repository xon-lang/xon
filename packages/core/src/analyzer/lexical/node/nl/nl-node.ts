import { LexicalNode, $, TextResourceRange, TextData, lexicalNode } from "#core";

export type NlNode = LexicalNode<$.NlNode>;

export function nlNode(reference: TextResourceRange, text: TextData): NlNode {
  return lexicalNode({$: $.NlNode, reference, text, isHidden: true});
}
