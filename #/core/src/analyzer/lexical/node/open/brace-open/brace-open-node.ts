import {TextData, TextReference} from '#common';
import {OpenNode, lexicalNode} from '#core';
import {$} from '#typing';

export type BraceOpenNode = OpenNode<$.BraceOpenNode>;

export function braceOpenNode(reference: TextReference, text: TextData): BraceOpenNode {
  return lexicalNode($.BraceOpenNode, {reference, text});
}
