import {TextData, TextReference} from '#common';
import {LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

export type JoiningNode = LexicalNode<$.JoiningNode>;

export function joiningNode(reference: TextReference, text: TextData): JoiningNode {
  return lexicalNode($.JoiningNode, {reference, text, isHidden: true});
}
