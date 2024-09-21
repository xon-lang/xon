import {TextData, TextResourceRange} from '#common';
import {OpenNode, lexicalNode} from '#core';
import {$} from '#typing';

export type StringOpenNode = OpenNode<$.StringOpenNode>;

export function stringOpenNode(reference: TextResourceRange, text: TextData): StringOpenNode {
  return lexicalNode({$: $.StringOpenNode, reference, text});
}
