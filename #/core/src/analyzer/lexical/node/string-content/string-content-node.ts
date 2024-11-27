import {TextData, TextReference} from '#common';
import {LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

export type StringContentNode = LexicalNode<$.StringContentNode>;

export function stringContentNode(reference: TextReference, text: TextData): StringContentNode {
  return lexicalNode($.StringContentNode, {reference, text});
}
