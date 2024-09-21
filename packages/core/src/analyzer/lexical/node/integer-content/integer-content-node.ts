import {TextData, TextResourceRange} from '#common';
import {LexicalNode, lexicalNode} from '#core';
import {$} from '#typing';

export type IntegerContentNode = LexicalNode<$.IntegerContentNode>;

export function integerContentNode(reference: TextResourceRange, text: TextData): IntegerContentNode {
  return lexicalNode({$: $.IntegerContentNode, reference, text});
}
