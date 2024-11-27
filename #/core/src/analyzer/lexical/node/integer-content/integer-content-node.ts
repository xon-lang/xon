import {TextData, TextReference} from '#common';
import {LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

export type IntegerContentNode = LexicalNode<$.IntegerContentNode>;

export function integerContentNode(reference: TextReference, text: TextData): IntegerContentNode {
  return lexicalNode($.IntegerContentNode, {reference, text});
}
