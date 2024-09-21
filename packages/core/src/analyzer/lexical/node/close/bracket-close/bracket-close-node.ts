import {TextData, TextResourceRange} from '#common';
import {CloseNode, lexicalNode} from '#core';
import {$} from '#typing';

export type BracketCloseNode = CloseNode<$.BracketCloseNode>;

export function bracketCloseNode(reference: TextResourceRange, text: TextData): BracketCloseNode {
  return lexicalNode({$: $.BracketCloseNode, reference, text});
}
