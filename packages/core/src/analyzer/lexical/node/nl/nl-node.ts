import {TextData, TextResourceRange} from '#common';
import {LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

export type NlNode = LexicalNode<$.NlNode>;

export function nlNode(reference: TextResourceRange, text: TextData): NlNode {
  return lexicalNode({$: $.NlNode, reference, text, isHidden: true});
}
