import {TextData, TextReference} from '#common';
import {LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

export type UnknownNode = LexicalNode<$.UnknownNode>;

export function unknownNode(reference: TextReference, text: TextData): UnknownNode {
  return lexicalNode($.UnknownNode, {reference, text});
}
