import {TextData, TextReference} from '#/common';
import {LexicalNode, lexicalNode} from '#/core';
import {$} from '#/typing';

export type CharContentNode = LexicalNode<$.CharContentNode>;

export function charContentNode(reference: TextReference, text: TextData): CharContentNode {
  return lexicalNode($.CharContentNode, {reference, text});
}
