import {TextData, TextResourceRange} from '#common';
import {CloseNode, lexicalNode} from '#core';
import {$} from '#typing';

export type AngleCloseNode = CloseNode<$.AngleCloseNode>;

export function angleCloseNode(reference: TextResourceRange, text: TextData): AngleCloseNode {
  return lexicalNode({$: $.AngleCloseNode, reference, text});
}
