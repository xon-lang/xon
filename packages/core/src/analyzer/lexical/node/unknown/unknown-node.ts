import {TextData, TextResourceRange} from '#common';
import {LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

export type UnknownNode = LexicalNode<$.UnknownNode>;

export function unknownNode(reference: TextResourceRange, text: TextData): UnknownNode {
  return lexicalNode({$: $.UnknownNode, reference, text});
}
