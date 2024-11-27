import {TextData, TextReference} from '#common';
import {OpenNode, lexicalNode} from '#core';
import {$} from '#typing';

export type BracketOpenNode = OpenNode<$.BracketOpenNode>;

export function bracketOpenNode(reference: TextReference, text: TextData): BracketOpenNode {
  return lexicalNode($.BracketOpenNode, {reference, text});
}
