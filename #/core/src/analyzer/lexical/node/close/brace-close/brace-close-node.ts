import {TextData, TextReference} from '#common';
import {CloseNode, lexicalNode} from '#core';
import {$} from '#typing';

export type BraceCloseNode = CloseNode<$.BraceCloseNode>;

export function braceCloseNode(reference: TextReference, text: TextData): BraceCloseNode {
  return lexicalNode($.BraceCloseNode, {reference, text});
}
