import {TextData, TextResourceRange} from '#common';
import {CloseNode, lexicalNode} from '#core';
import {$} from '#typing';

export type ParenCloseNode = CloseNode<$.ParenCloseNode>;

export function parenCloseNode(reference: TextResourceRange, text: TextData): ParenCloseNode {
  return lexicalNode({$: $.ParenCloseNode, reference, text});
}
