import {TextData, TextResourceRange} from '#common';
import {LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

export type JoiningNode = LexicalNode<$.JoiningNode>;

export function joiningNode(reference: TextResourceRange, text: TextData): JoiningNode {
  return lexicalNode({$: $.JoiningNode, reference, text, isHidden: true});
}
