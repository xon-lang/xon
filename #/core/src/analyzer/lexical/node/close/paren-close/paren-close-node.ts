import {TextData, TextReference} from '#common';
import {CloseNode, lexicalNode} from '#core';
import {$} from '#typing';

export type ParenCloseNode = CloseNode<$.ParenCloseNode>;

export function parenCloseNode(reference: TextReference, text: TextData): ParenCloseNode {
  return lexicalNode($.ParenCloseNode, {reference, text});
}
