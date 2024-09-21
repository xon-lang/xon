import {TextData, TextResourceRange} from '#common';
import {OpenNode, lexicalNode} from '#core';
import {$} from '#typing';

export type BracketOpenNode = OpenNode<$.BracketOpenNode>;

export function bracketOpenNode(reference: TextResourceRange, text: TextData): BracketOpenNode {
  return lexicalNode({$: $.BracketOpenNode, reference, text});
}
