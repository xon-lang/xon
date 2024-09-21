import {TextData, TextResourceRange} from '#common';
import {LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

export type StringContentNode = LexicalNode<$.StringContentNode>;

export function stringContentNode(reference: TextResourceRange, text: TextData): StringContentNode {
  return lexicalNode({$: $.StringContentNode, reference, text});
}
