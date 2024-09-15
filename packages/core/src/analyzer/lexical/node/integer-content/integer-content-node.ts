import {$, LexicalNode, TextData, TextResourceRange, lexicalNode} from '#core';

export type IntegerContentNode = LexicalNode<$.IntegerContentNode>;

export function integerContentNode(reference: TextResourceRange, text: TextData): IntegerContentNode {
  return lexicalNode({$: $.IntegerContentNode, reference, text});
}
