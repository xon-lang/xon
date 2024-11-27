import {TextData, TextReference} from '#common';
import {CloseNode, lexicalNode} from '#core';
import {$} from '#typing';

export type CharCloseNode = CloseNode<$.CharCloseNode>;

export function charCloseNode(reference: TextReference, text: TextData): CharCloseNode {
  return lexicalNode($.CharCloseNode, {reference, text});
}
