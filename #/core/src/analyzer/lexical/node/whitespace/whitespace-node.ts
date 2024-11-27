import {TextData, TextReference} from '#/common';
import {LexicalNode, lexicalNode} from '#/core';
import {$} from '#/typing';

export type WhitespaceNode = LexicalNode<$.WhitespaceNode>;

export function whitespaceNode(reference: TextReference, text: TextData): WhitespaceNode {
  return lexicalNode($.WhitespaceNode, {reference, text, isHidden: true});
}
