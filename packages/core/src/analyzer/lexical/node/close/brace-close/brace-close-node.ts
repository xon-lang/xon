import {TextData, TextResourceRange} from '#common';
import {CloseNode, lexicalNode} from '#core';
import {$} from '#typing';

export type BraceCloseNode = CloseNode<$.BraceCloseNode>;

export function braceCloseNode(reference: TextResourceRange, text: TextData): BraceCloseNode {
  return lexicalNode({$: $.BraceCloseNode, reference, text});
}
