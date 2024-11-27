import {TextData, TextReference} from '#/common';
import {OpenNode, lexicalNode} from '#/core';
import {$} from '#/typing';

export type StringOpenNode = OpenNode<$.StringOpenNode>;

export function stringOpenNode(reference: TextReference, text: TextData): StringOpenNode {
  return lexicalNode($.StringOpenNode, {reference, text});
}
