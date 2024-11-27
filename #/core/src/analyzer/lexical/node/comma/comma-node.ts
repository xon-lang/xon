import {TextData, TextReference} from '#/common';
import {LexicalNode, lexicalNode} from '#/core';
import {$} from '#/typing';

export type CommaNode = LexicalNode<$.CommaNode>;

export function commaNode(reference: TextReference, text: TextData): CommaNode {
  return lexicalNode($.CommaNode, {reference, text});
}
