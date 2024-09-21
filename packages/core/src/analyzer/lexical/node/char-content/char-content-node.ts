import {TextData, TextResourceRange} from '#common';
import {LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

export type CharContentNode = LexicalNode<$.CharContentNode>;

export function charContentNode(reference: TextResourceRange, text: TextData): CharContentNode {
  return lexicalNode({$: $.CharContentNode, reference, text});
}
