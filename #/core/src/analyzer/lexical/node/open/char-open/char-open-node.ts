import {TextData, TextReference} from '#/common';
import {OpenNode, lexicalNode} from '#/core';
import {$} from '#/typing';

export type CharOpenNode = OpenNode<$.CharOpenNode>;

export function charOpenNode(reference: TextReference, text: TextData): CharOpenNode {
  return lexicalNode($.CharOpenNode, {reference, text});
}
