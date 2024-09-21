import {TextData, TextResourceRange} from '#common';
import {LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

export type CommaNode = LexicalNode<$.CommaNode>;

export function commaNode(reference: TextResourceRange, text: TextData): CommaNode {
  return lexicalNode({$: $.CommaNode, reference, text});
}
