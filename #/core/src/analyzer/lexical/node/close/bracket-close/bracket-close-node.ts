import {TextData, TextReference} from '#/common';
import {CloseNode, lexicalNode} from '#/core';
import {$} from '#/typing';

export type BracketCloseNode = CloseNode<$.BracketCloseNode>;

export function bracketCloseNode(reference: TextReference, text: TextData): BracketCloseNode {
  return lexicalNode($.BracketCloseNode, {reference, text});
}
