import {TextData, TextReference} from '#/common';
import {CloseNode, lexicalNode} from '#/core';
import {$} from '#/typing';

export type StringCloseNode = CloseNode<$.StringCloseNode>;

export function stringCloseNode(reference: TextReference, text: TextData): StringCloseNode {
  return lexicalNode($.StringCloseNode, {reference, text});
}
