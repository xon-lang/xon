import {TextData, TextResourceRange} from '#common';
import {CloseNode, lexicalNode} from '#core';
import {$} from '#typing';

export type StringCloseNode = CloseNode<$.StringCloseNode>;

export function stringCloseNode(reference: TextResourceRange, text: TextData): StringCloseNode {
  return lexicalNode({$: $.StringCloseNode, reference, text});
}
