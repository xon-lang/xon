import {Anything, String2} from '#common';
import {$, Node, TextData} from '#core';

export type LexicalNode<T extends $ = $> = Node<T> & {
  text: TextData;
};

export function lexicalNode<T extends LexicalNode & Record<String2, Anything>>(params: T): T {
  return params;
}
